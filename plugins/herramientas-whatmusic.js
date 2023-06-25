import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return m.reply('╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼* ⊱⚠️⊱╮\n\nEl archivo que carga es demasiado grande, le sugerimos que corte el archivo grande a un archivo más pequeño, 10-20 segundos Los datos de audio son suficientes para identificar')
await conn.reply(m.chat, wait, m)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
🔎 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐄 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒 🔍 

• 📌 𝐓𝐈𝐓𝐔𝐋𝐎 : *_${title}_*
• 👨‍🎤 𝐀𝐑𝐓𝐈𝐒𝐓𝐀 : _${artists !== undefined ? artists.map(v => v.name).join(', ') : '_No encontrado_'}_
• 💾 𝐀𝐋𝐁𝐔́𝐌 : _${album.name || '_No encontrado_'}_
• 🌐 𝐆𝐄́𝐍𝐄𝐑𝐎 : _${genres !== undefined ? genres.map(v => v.name).join(', ') : '_No encontrado_'}_
• 📆 𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐋𝐀𝐍𝐙𝐀𝐌𝐈𝐄𝐍𝐓𝐎 : ${release_date || '_No encontrado_'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎́ 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 ☹️'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler
