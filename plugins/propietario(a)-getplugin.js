
import fs from 'fs'

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `*${mg}\n𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙳𝙴𝙻 𝙿𝙻𝚄𝙶𝙸𝙽\n 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _menu_`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

export default handler
