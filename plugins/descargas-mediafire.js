import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = db.data.users[m.sender]
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴. 🤗`
   try {  
      let res = await mediafireDl(args[0])
      let { name, size, date, mime, link } = res
      let caption = `
${eg}
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💫 𝐍𝐎𝐌𝐁𝐑𝐄 : 
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💪 𝐏𝐄𝐒𝐎 : 
┃ ${size}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝐓𝐈𝐏𝐎 :  
┃ ${mime}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘  - 🤖 | 𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀́𝐍𝐂𝐇𝐄𝐙',
body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/SmithOxenford/MakanakyBot-MD`}}})
  
/*let info = `𝙈𝘼𝙔𝙊𝙍 𝘼 150 𝙈𝘽 𝙀𝙎 𝙋𝙊𝙎𝙄𝘽𝙇𝙀 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀.

𝙂𝙍𝙀𝘼𝙏𝙀𝙍 𝙏𝙃𝘼𝙉 150 𝙈𝘽 𝙈𝘼𝙔 𝙉𝙊𝙏 𝘽𝙀 𝙎𝙀𝙉𝙏.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
   await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
   } catch {  
     m.reply(`${lenguajeGB['smsAvisoFG']()}𝚅𝚄𝙴𝙻𝚅𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁. 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴! ☹️`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler

async function mediafireDl(url) {
   const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
   const $ = cheerio.load(res.data)
   const link = $('#downloadButton').attr('href')
   const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
   const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
   const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
   let mime = ''
   let rese = await axios.head(link)
   mime = rese.headers['content-type']
   return { name, size, date, mime, link }
}
