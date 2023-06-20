//By https://github.com/DIEGO-OFC

import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "[❕] 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`𝐑𝐄𝐒𝐎𝐋𝐔𝐓𝐈𝐎𝐍 : ${width} x ${height}
> 𝐀𝐍𝐂𝐇𝐎 : ${width}
> 𝐀𝐋𝐓𝐔𝐑𝐀 : ${height}
> 𝐋𝐈𝐍𝐊 : ${link}`)
}
handler.help = ['cekresolution <reply | caption>', 'cekreso <reply | caption>']
handler.tags = ['tool']
handler.command = /^(cekreso(lution)?)$/i

export default handler
