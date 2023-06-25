let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚅𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙳𝙴 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚅𝙸𝙿 ☹️\n\𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _@tag_`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}𝙴𝙻/𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾(𝙰) 𝙽𝙾 𝙴𝚂 𝚅𝙸𝙿 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝙰𝙷𝙾𝚁𝙰 𝙴𝙻/𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸(𝙰) 𝚈𝙰 𝙽𝙾 𝙴𝚂 𝚅𝙸𝙿 😰. 𝚃𝙴𝙽𝙳𝚁𝙰́ 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 𝙲𝙾𝙽 ${gt}`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler
