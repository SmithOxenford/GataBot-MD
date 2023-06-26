import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `⏳ 𝙴𝚂𝙿𝙴𝚁𝙰 𝚄𝙽𝙾𝚂 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙾𝚃𝚁𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾...`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('╰⊱⚠️⊱ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⊱⚠️⊱╮\n\n𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙽𝙾 𝙳𝙴𝙱𝙴 𝙳𝚄𝚁𝙰𝚁 𝙼𝙰́𝚂 𝙳𝙴 𝟽 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂')
      let img = await q.download?.()
      if (!img) throw `╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎́ 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝚅𝙸𝙳𝙴𝙾, 𝙶𝙸𝙵 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴 𝚃𝙸𝙿𝙾 *.jpg* 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚄𝚂𝙴 *${usedPrefix + command}*`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `${eg}⏳ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝚂𝚃𝙸𝙲𝙺𝙴𝚁, 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾... 🤖`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false}}, { quoted: m })
    else throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎́ 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n⚠️ 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑 ⚠️, 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝚅𝙸𝙳𝙴𝙾, 𝙶𝙸𝙵 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴 𝚃𝙸𝙿𝙾 .𝚓𝚙𝚐 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 '
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
