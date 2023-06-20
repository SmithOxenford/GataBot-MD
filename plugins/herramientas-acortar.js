import axios from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙽𝙻𝙰𝙲𝙴 𝙿𝙰𝚁𝙰 𝙰𝙲𝙾𝚁𝚃𝙰𝚁`
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `✅ 𝚂𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾\n\n𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙰𝙽𝚃𝙴𝚂 : \n*${text}*\n\n𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙰𝙷𝙾𝚁𝙰 \n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
