let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _@tag_`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _@tag_`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}𝙴𝙻/𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾(𝙰) 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾(𝙰) 🤩\n𝙿𝙾𝙳𝚁𝙰́ 𝚄𝚂𝙰𝚁 𝙰 ${gt}}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
