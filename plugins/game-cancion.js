import fetch from 'node-fetch'
import axios from 'axios'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, '𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙷𝙰𝚈 𝙲𝙰𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝚂𝙸𝙽 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃.', conn.tebaklagu[id][0])
throw false
} //5LTV57azwaid7dXfz5fzJu
let res = await fetchJson(`https://fatiharridho.github.io/tebaklagu.json`)
let json = res[Math.floor(Math.random() * res.length)]    
//let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '0ISD8mk5kiv1YC5884lISM' }, 'APIKEY'))
//if (res !== 200) throw 'Error'
//let result = await res.json()
//let json = result.result
let caption = `
😁 𝐀𝐃𝐈𝐕𝐈𝐍𝐀 𝐄𝐋 𝐓𝐈𝐓𝐔𝐋𝐎 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 😁
𝐓𝐈𝐄𝐌𝐏𝐎 : ${(timeout / 1000).toFixed(2)} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂
𝐄𝐒𝐂𝐑𝐈𝐁𝐄 : *${usedPrefix}pista* 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝚄𝙽𝙰 𝙿𝙸𝚂𝚃𝙰
𝐏𝐑𝐄𝐌𝐈𝐎 : ${poin} 𝚇𝙿
𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙲𝙾𝙽 𝙻𝙰𝚂 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰𝚂!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `𝚂𝙴 𝙰𝙲𝙰𝙱𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️\n𝐋𝐀 𝐑𝐄𝐒𝐏𝐔𝐄𝐒𝐓𝐀 𝐄𝐒 : ${json.jawaban}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canción$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
