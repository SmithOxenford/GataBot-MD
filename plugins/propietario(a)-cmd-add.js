let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '[❗ 𝐈𝐍𝐅𝐎 ❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝚀𝚄𝙸𝙴𝚁𝙴 𝙰𝙶𝚁𝙴𝙶𝙰 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾 😁'
if (!m.quoted.fileSha256) throw '[❗ 𝐈𝐍𝐅𝐎 ❗] 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝚂𝙸𝙶𝙽𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽 ☹️'
if (!text) throw `[❗ 𝐈𝐍𝐅𝐎 ❗] 𝙴𝚁𝚁𝙾𝚁, 𝙻𝙾𝚂 𝚄𝚂𝙰𝚁𝚃𝙴 𝙼𝙰𝙻,\n 𝚄𝚂𝙰 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙼𝙰𝙽𝙴𝚁𝙰 :\n*—◉ ${usedPrefix + command}* _<texto> <responder a sticker o imagen>_\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎𝐒 :\n*—◉ ${usedPrefix + command}* _<#menu> <responder a sticker o imagen>_`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '[❗ 𝐈𝐍𝐅𝐎 ❗] 𝚂𝙾𝙻𝙾 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝙿𝚄𝙴𝙳𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾́𝙽 💋'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`[ ✔ ] 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙰 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 💋`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
