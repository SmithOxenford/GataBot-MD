import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴'
let img = await m.quoted.download()
if (!img) throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false}}, { quoted: m })
else throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝙴𝚁𝚁𝙾𝚁, 𝙰𝙻𝙶𝙾 𝚂𝙰𝙻𝙸𝙾́ 𝙼𝙰𝙻, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler