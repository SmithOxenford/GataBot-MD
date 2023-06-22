import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝚄𝚂𝙴 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 :\n*${usedPrefix + command}* _Makanaky_`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `💞 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 : ${text}`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
