import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await m.reply(`⬇️ 𝐄𝐒𝐄 𝐄𝐒 𝐒𝐔 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄 ⬇️`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
