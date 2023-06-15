import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 🤗\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 :\n*${usedPrefix + command}* https://www.facebook.com/watch?v=636541475139`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 🤗\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 :\n*${usedPrefix + command}* https://www.facebook.com/watch?v=636541475139`, fkontak, m)
try {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 🤗`, fkontak, m)
let Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let Jjson = await Rres.json()
let VIDEO = Jjson.result[0]
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
conn.sendFile(m.chat, VIDEO, 'error.mp4', `✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}`, m)    
} catch (err1) {
console.log('1 ' + err1)    
try {
let ress = await fg.fbdl(args[0])
let urll = await ress.data[0].url    
await conn.sendFile(m.chat, urll, 'error.mp4', '✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}', m)     
} catch (err2) {
console.log('2 ' + err2)    
try {
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', '✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}', m)}
} catch (err3) {
console.log('3 ' + err3)    
try { 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}', m)
} catch (err4) {
console.log('4 ' + err4)    
try {
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = await json.video
await conn.sendFile(m.chat, url3, 'error.mp4', '✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}', m)         
} catch (err5) {
console.log('5 ' + err5)    
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0])).catch(async _ => await savefrom(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '✅ 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n${wm}', m)    
} catch (err6) {
console.log('6 ' + err6)    
await m.reply(`${lenguajeGB['smsAvisoFG']()}𝙰𝙻𝙶𝙾 𝚂𝙰𝙻𝙸𝙾́ 𝙼𝙰𝙻, 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙴 𝚄𝚂𝙰𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ☹️`)
}}}}}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
handler.limit = 3
export default handler
