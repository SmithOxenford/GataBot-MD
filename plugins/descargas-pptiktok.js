import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝚂𝙸𝙽 𝚄𝚂𝙰𝚁 "@"\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _ mundo_dos_animes81 _`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `✅ 𝐅𝐎𝐓𝐎 𝐃𝐄 𝐏𝐄𝐑𝐅𝐈𝐋 \n💟 *${text}*`, m, false)
  
  let info = `💖 𝙸𝙽𝙵𝙾́𝚁𝙼𝙰𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙻𝙰𝚂 𝙽𝙾𝚅𝙴𝙳𝙰𝙳𝙴𝚂 𝚈 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝚄́𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚁𝚂𝙸𝙾́𝙽.
  `.trim()
conn.sendButton(m,chat, info, wm, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
/*conn.sendHydrated(m.chat, info, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)*/

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
