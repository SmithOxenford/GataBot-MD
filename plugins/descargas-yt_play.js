import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
import fetch from "node-fetch"
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝚃𝙸𝚃𝚄𝙻𝙾\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _El Faraon Love Shady - Oh Me Vengo_`
	let vid = (await yts(text)).all[0]
let { title, description, publishedTime, url, thumbnail, videoId, timestamp, views, published } = vid
try {
if (command == 'play') {	
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `𓆩 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 𓆪

ও 𝐓𝐈𝐓𝐔𝐋𝐎 :
» *_${title}_* 
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 : 
» _${description}_
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 :
» ${timestamp}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐕𝐈𝐒𝐓𝐀𝐒 :
» ${views}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐔𝐑𝐋 :
» ${url}

𓆩 𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 𓆪`.trim(), fkontak, m)
q = '128kbps'
v = url
yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
title = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
showAdAttribution: false,
title: `𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋`,
body: `${title}`,
mediaType: 2, 
sourceUrl: `${url}`,
thumbnail: await (await fetch(thumbnail)).buffer()}}}, { quoted: m })
//await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
if (command == 'play2') {
conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `𓆩 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 𓆪

ও 𝐓𝐈𝐓𝐔𝐋𝐎 :
» *_${title}_* 
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 : 
» _${description}_
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 :
» ${timestamp}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐕𝐈𝐒𝐓𝐀𝐒 :
» ${views}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐔𝐑𝐋 :
» _${url}_

𓆩 𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 𓆪`.trim(), fkontak, m)
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 𝐓𝐈𝐓𝐔𝐋𝐎 \n┃ ${ttl}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 💙 𝐏𝐄𝐒𝐎 \n┃ ${size}\n╰━━━━━❰ 𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ❱━━━━⬣`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
handler.limit = 1

export default handler
