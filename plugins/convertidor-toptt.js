import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙰𝚄𝙳𝙸𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 🤗`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾́ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 ☹️, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾́ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾 ☹️, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾́ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 ☹️, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾́ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 ☹️, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler
