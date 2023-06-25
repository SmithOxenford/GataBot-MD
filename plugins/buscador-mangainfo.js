import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙼𝙰𝙽𝙶𝙰! 🤗`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`𝐓𝐈𝐓𝐔𝐋𝐎 : 
❣ *${title}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐂𝐀𝐏𝐈𝐓𝐔𝐋𝐎𝐒 :
❣ ${chapters}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐕𝐎𝐋𝐔𝐌𝐄𝐍𝐄𝐒 : 
❣ ${volumes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐈𝐍𝐈𝐂𝐈𝐎 : 
❣ ${start_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐅𝐄𝐂𝐇𝐀 𝐅𝐈𝐍𝐀𝐋 :
❣ ${end_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐏𝐔𝐍𝐓𝐀𝐉𝐄 :
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒 :
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐒𝐈𝐏𝐍𝐎𝐒𝐈𝐒 :
❣ _${synopsis}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐄𝐍𝐋𝐀𝐂𝐄 :
❣ _${url}_`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `💖 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙻𝙰𝚂 𝙽𝙾𝚅𝙴𝙳𝙰𝙳𝙴𝚂 𝚈 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚁𝚂𝙸𝙾́𝙽
  `
conn.sendButton(m.chat, info, wm, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨| 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)

/*.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
