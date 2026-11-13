// WeClinic Leads API — Google Sheet ke andar: Extensions -> Apps Script -> paste
// Deploy -> Web app (Execute as: Me, Access: Anyone). URL ko .env mein VITE_SHEET_API mein daalo.
const SPREADSHEET_ID = '';            // Sheet ke andar se bani script ho to khali
const SHEET_NAME = 'Leads';
const HEADERS = ['Timestamp','Lead ID','Name','Phone','Email','City','Age','Concern','Plan','Consult Mode','Message','Preferred Doctor','Language','Source','UTM'];
const NOTIFY_EMAIL = '';

function doPost(e){ try{ return json_(saveLead(JSON.parse((e&&e.postData&&e.postData.contents)||'{}'))); }
  catch(err){ return json_({ok:false,error:String(err.message||err)}); } }
function doGet(){ return json_({ok:true,service:'WeClinic Leads API'}); }
function json_(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function getSheet_(){ const ss=SPREADSHEET_ID?SpreadsheetApp.openById(SPREADSHEET_ID):SpreadsheetApp.getActiveSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME)||ss.insertSheet(SHEET_NAME);
  if(sh.getLastColumn()<HEADERS.length){ sh.getRange(1,1,1,HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#ea580c').setFontColor('#fff'); sh.setFrozenRows(1);} return sh; }
function clean_(v,n){ let s=String(v==null?'':v).trim().slice(0,n||200); if(/^[=+\-@]/.test(s)) s="'"+s; return s; } // formula-injection guard
function saveLead(d){ d=d||{}; if(d.website) return {ok:true,id:'OK'};          // honeypot
  const name=clean_(d.name,80), phone=String(d.phone||'').replace(/\D/g,'').replace(/^(91|0)(?=\d{10}$)/,''), email=clean_(d.email,120);
  if(name.length<2) throw new Error('Kripya apna sahi naam likhein.');
  if(!/^[6-9]\d{9}$/.test(phone)) throw new Error('Kripya 10 ankon ka sahi mobile number daalein.');
  const cache=CacheService.getScriptCache(), prev=cache.get('lead_'+phone); if(prev) return {ok:true,id:prev,duplicate:true}; // 2-min dedupe
  const id='WC-'+Utilities.formatDate(new Date(),'Asia/Kolkata','yyMMdd')+'-'+Math.floor(1000+Math.random()*9000);
  const row=[new Date(),id,name,"'"+phone,email,clean_(d.city,60),clean_(d.age,3),clean_(d.concern,60),clean_(d.plan,40),clean_(d.mode,20),clean_(d.message,1000),clean_(d.doctor,60),clean_(d.lang,4),clean_(d.source,80),clean_(d.utm,400)];
  const lock=LockService.getScriptLock(); lock.waitLock(10000); try{ getSheet_().appendRow(row);} finally{ lock.releaseLock(); }
  cache.put('lead_'+phone,id,120);
  if(NOTIFY_EMAIL){ try{ MailApp.sendEmail(NOTIFY_EMAIL,'Naya Lead: '+name+' ('+id+')',HEADERS.map((h,i)=>h+': '+row[i]).join('\n')); }catch(e){} }
  return {ok:true,id:id}; }
function setup(){ getSheet_(); }
