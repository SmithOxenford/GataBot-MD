import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `${lenguajeGB['smsAvisoMG']()}𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝙰𝚄𝙳𝙸𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝚅𝙸𝙳𝙴𝙾 🤗\n\n*${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝙰𝚄𝙳𝙸𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝚅𝙸𝙳𝙴𝙾 🤗\n\n*${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '𝙵𝚄𝙴 𝚄𝙽 𝙴𝚇𝙸𝚃𝙾!! 😁', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo']
export default handler
