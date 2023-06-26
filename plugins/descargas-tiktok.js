
import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙳𝙴𝙱𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* https://vm.tiktok.com/ZMLEPnruc/?k=1`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙴𝚂 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 ☹️, 𝙿𝚁𝙾𝙲𝚄𝚁𝙴 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 🤗`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚃𝙸𝙺𝚃𝙾𝙺 ☹️, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`, fkontak,  m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙿𝚁𝙾𝙽𝚃𝙾 𝚃𝙴𝙽𝙳𝚁𝙰́ 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 🥳`, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `
⛱️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 :\n*_${nickname}_*\n${description ? `\n⛱️ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎́𝐍 :\n_${description}_` : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚃𝙸𝙺𝚃𝙾𝙺 ☹️, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 2
export default handler
