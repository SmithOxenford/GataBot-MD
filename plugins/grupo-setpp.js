let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '⚠️️ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 ⚠️'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘💋 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴́𝚇𝙸𝚃𝙾 💋'))
} else throw '⚠️️ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 ⚠️'}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
