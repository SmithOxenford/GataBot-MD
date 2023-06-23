import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg} 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝙲𝙾𝙳𝙸𝙶𝙾 𝚀𝚁 🤗`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.money = 20
export default handler
