/*Créditos a https://github.com/Azami19*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = ` 📊 𝐄𝐍𝐋𝐀𝐂𝐄 :\n_${link}_\n
🎁 𝐓𝐀𝐌𝐀𝐍̃𝐎 :\n${media.length} 𝙱𝚈𝚃𝙴𝚂\n
🚀 𝐄𝐗𝐏𝐈𝐑𝐀𝐂𝐈𝐎́𝐍 :\n${isTele ? '✅ 𝙽𝙾 𝙴𝚇𝙿𝙸𝚁𝙰 ✅' : '⚠️ 𝙳𝙴𝚂𝙲𝙾𝙽𝙾𝙲𝙸𝙳𝙾 ⚠️'}\n
🔰 𝐀𝐂𝐎𝐑𝐓𝐀𝐃𝐎 :\n${await shortUrl(link)}`

conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: md,
    mediaType: 2,
    title: wm,
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
