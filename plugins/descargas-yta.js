import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 🤗\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n${usedPrefix + command} https://youtu.be/`, fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`, fkontak, m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
//await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝚂𝙴𝙰 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾 ☹️. 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 🤗`, m)}
}}
handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler
