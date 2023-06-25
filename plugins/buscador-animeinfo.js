import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙰𝙽𝙸𝙼𝙴 🤗`
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
𝐓𝐈𝐓𝐔𝐋𝐎 :
❣ *${title}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐄𝐏𝐈𝐒𝐎𝐃𝐈𝐎𝐒 : 
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐓𝐈𝐃𝐎 𝐏𝐎𝐑 :
❣ _${type}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐂𝐋𝐀𝐒𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍 :
❣ ${rated}
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
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
let info = `💖 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙻𝙰𝚂 𝙽𝙾𝚅𝙴𝙳𝙰𝙳𝙴𝚂 𝚈 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚁𝚂𝙸𝙾𝙽`
conn.sendButton(m.chat, info, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 ', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
/*.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
} catch {
throw `[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾`  
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 1
export default handler
