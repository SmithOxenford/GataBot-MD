import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝚃𝙸𝚃𝚄𝙻𝙾 🤗\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Billie Eilish - Bellyache_`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 😁`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖',
body: '𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋',         
previewType: 0, thumbnail: fs.readFileSync(""),
sourceUrl: ``}}}) 
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 😁`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖',
body: '𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋',         
previewType: 0, thumbnail: fs.readFileSync(""),
sourceUrl: ``}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾 ☹️`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
