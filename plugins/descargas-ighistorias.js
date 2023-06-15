/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴  𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝙸𝙽𝚂𝚃𝚁𝙰𝙶𝙰𝙼 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙻𝙰𝚂 𝙷𝙸𝚂𝚃𝙾𝚁𝙸𝙰𝚂 😁\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 :\n*${usedPrefix + command} adri2.pc*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `💖 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙻𝙰𝚂 𝙽𝙾𝚅𝙴𝙳𝙰𝙳𝙴𝚂 𝚈 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚁𝚂𝙸𝙾́𝙽. 💖
  `
 conn.sendButton(m.chat, info, `𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀𝐍𝐂𝐇𝐄𝐙 - 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀\n${asistencia}\n\n`, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
/*.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.exp = 87
export default handler
