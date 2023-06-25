import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝙳𝙴𝙱𝙴 𝙳𝙴 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚁 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝚃𝙾𝙺𝙴𝙽(𝚂)`
if (isNaN(txt)) throw `${mg}𝚂𝙸𝙽 𝚂𝙸𝙼𝙱𝙾𝙻𝙾𝚂, 𝚂𝙾𝙻𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `${mg}𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙿𝙰𝚁𝙰 𝚃𝙾𝙺𝙴𝙽(𝚂) 𝙴𝚂 *1*`
let users = global.db.data.users
users[who].joincount += tok

conn.sendHydrated(m.chat, `╭[ ❤️ 𝐓𝐎𝐊𝐄𝐍(𝐒) ❤️ ]⬣\n┃\n┃ღ 𝙿𝙰𝚁𝙰 :\n┃ღ *_${text}_*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ 𝚂𝙴 𝙻𝙴 𝙰𝙽̃𝙰𝙳𝙸𝙾́ :\n┃ღ _${tok} Token(s)_ ❤️\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirtokens', 'dartokens', 'dartoken'] 
handler.group = true
handler.owner = true
export default handler
