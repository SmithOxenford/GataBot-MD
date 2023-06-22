import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝚂𝙸𝙽 𝚄𝚂𝙰𝚁 "@"\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _mundo_dos_animes81_`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
👤 𝐔𝐒𝐔𝐀𝐑𝐈𝐎(𝐀) :
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ 𝐍𝐎𝐌𝐁𝐑𝐄 : 
*${json.result.nickname}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 : 
_${json.result.followers}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❇️ 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐒 : 
_${json.result.followings}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
❤️ 𝐌𝐄 𝐆𝐔𝐒𝐓𝐀 :
_${json.result.likes}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎁 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈𝐎𝐍𝐄𝐒 : 
_${json.result.video}_
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👀 𝐁𝐈𝐎𝐆𝐑𝐀𝐅𝐈́𝐀 : 
_${json.result.bio}_
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾́ 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ☹️`
}
/*let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
