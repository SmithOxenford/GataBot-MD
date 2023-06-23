import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 🤗\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* https://youtu.be/85xI8WFMIUY`, fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`, fkontak, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╭━❰ 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 ❱━⬣\n┃ 💜 𝐓𝐈𝐓𝐔𝐋𝐎 :\n┃ *_${ttl}_*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 💙 𝐏𝐄𝐒𝐎 :\n┃ ${size}\n╰━━❰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ❱━━⬣`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `╭━❰ 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 ❱━⬣\n┃ 🤍 𝐓𝐈𝐓𝐔𝐋𝐎 :\n┃ *_${n}_*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 🧡 𝐏𝐄𝐒𝐎 :\n┃ ${n3}\n╰━━❰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ❱━━⬣`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝚂𝙴𝙰 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾 ☹️. 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 🤗`, m)}
}}
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i
export default handler
