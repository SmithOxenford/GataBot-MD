import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
conn.sendFile(m.chat, pp, 'error.jpg', m)}
/*conn.sendHydrated(m.chat, wm, null, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `.chica`],
['✨ 𝘾𝙃𝙄𝘾𝙊 | 𝘽𝙊𝙔', `.chico`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
 conn.sendFile(m.chat, pp, 'error.jpg', m)}
/*conn.sendHydrated(m.chat, wm, null, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `.chico`],
['✨ 𝘾𝙃𝙄𝘾𝘼 | 𝙂𝙄𝙍𝙇', `.chica`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */

  
if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙿𝙰𝙸𝚂 𝚈 𝙲𝚄𝙸𝙳𝙰𝙳 𝙿𝙰𝚁𝙰 𝚂𝙰𝙱𝙴𝚁 𝙴𝙻 𝙲𝙻𝙸𝙼𝙰 ☁️\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Ecuador Quito_`, m)  
//const clima = await axios.get(`https://es.wttr.in/${text}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)

let pp = `https://es.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ 𝙰𝚀𝚄𝙸́ 𝚃𝙸𝙴𝙽𝙴 𝙴𝙻 𝙲𝙻𝙸𝙼𝙰 𝙴𝙽 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 💋`, m)}
/*conn.sendHydrated(m.chat, `✨ 𝙰𝚀𝚄𝙸́ 𝚃𝙸𝙴𝙽𝙴 𝙴𝙻 𝙲𝙻𝙸𝙼𝙰 𝙴𝙽 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 💋`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
  
  
if (command == 'clima2') {
 if (!text) return conn.reply(m.chat, `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙿𝙰𝙸𝚂 𝚈 𝙲𝚄𝙸𝙳𝙰𝙳 𝙿𝙰𝚁𝙰 𝚂𝙰𝙱𝙴𝚁 𝙴𝙻 𝙲𝙻𝙸𝙼𝙰 ☁️\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Ecuador Quito_`, m)  

let pp = `https://en.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ 𝙷𝙴𝚁𝙴 𝙸𝚂 𝚃𝙷𝙴 𝚆𝙴𝙰𝚃𝙷𝙴𝚁 𝙸𝙽 𝙴𝙽𝙶𝙻𝙸𝚂𝙷 💋`, m)}
/*conn.sendHydrated(m.chat, `✨ *HERE IS THE WEATHER IN ENGLISH*`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
  
  
if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙿𝙰𝙸𝚂 𝚈 𝙲𝚄𝙸𝙳𝙰𝙳 𝙿𝙰𝚁𝙰 𝚂𝙰𝙱𝙴𝚁 𝙴𝙻 𝙲𝙻𝙸𝙼𝙰 ☁️\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Ecuador Quito_`, m)  

let pp = `https://pt.wttr.in/${text}.png`
conn.sendFile(m.chat, pp, 'error.jpg', `✨ 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰́ 𝙾 𝚃𝙴𝙼𝙿𝙾 𝙴𝙼 𝙿𝙾𝚁𝚃𝚄𝙶𝚄𝙴̂𝚂 💋`, m)}
/*conn.sendHydrated(m.chat, `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],  
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
export default handler
