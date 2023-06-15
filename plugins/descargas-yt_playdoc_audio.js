import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args || !args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾 🤗\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 :\n${usedPrefix + command} https://youtu.be/`, fkontak,  m)

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙿𝚁𝙾𝙽𝚃𝙾 𝚃𝙴𝙽𝙳𝚁𝙰́ 𝚂𝚄 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`, fkontak,  m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `╭━❰  ${wm}  ❱━⬣\n┃📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥\n┃ও 𝐓𝐈́𝐓𝐔𝐋𝐎 : \n┃» ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও 𝐏𝐄𝐒𝐎 :\n┃» ${size}\n╰━━❰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ❱━━⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `╭━❰  ${wm}  ❱━⬣\n┃ 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥\n┃ ও 𝐓𝐈́𝐓𝐔𝐋𝐎 : \n┃ » ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও 𝐏𝐄𝐒𝐎 :\n┃ » ${size}\n╰━━❰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖* ❱━━⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '⚠️ 𝙴𝚁𝚁𝙾𝚁 ⚠️, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 ☹️', m)}
}}
handler.command = /^playaudiodoc|pdocaudio|docaudio|ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 3
export default handler
