import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!teks) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙻𝙴𝚃𝚁𝙰! 🤗\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Runaway_`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json

await conn.reply(m.chat, `𝐓𝐈𝐓𝐔𝐋𝐎 :
💚 *_${result.title}_*

𝐀𝐔𝐓𝐎𝐑 :
💜 _${result.author}_


${result.lyrics}


𝐄𝐍𝐋𝐀𝐂𝐄 :
🧡 _${result.link}_`, fkontak,  m)
/*let letratexto =`
𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀 
💚 *${result.title}*

𝘼𝙐𝙏𝙊𝙍(𝘼) | 𝘼𝙐𝙏𝙃𝙊𝙍
💜 *${result.author}*


${result.lyrics}


𝙀𝙉𝙇𝘼𝘾𝙀 | 𝙐𝙍𝙇
🧡 *${result.link}*
`.trim()
conn.SendButton(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [ 
['𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 | 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 🚀', `/play ${text}`],
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m)*/
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
