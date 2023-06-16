let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `💝 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐑𝐄𝐋𝐀𝐂𝐈𝐎𝐍 💝
*╭•·–––––––––––––––––––·•*
│ 𝚃𝙾𝚃𝙰𝙻 : ${relacion.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? '_Sin Pareja_' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `💟 𝐌𝐈 𝐏𝐀𝐑𝐄𝐉𝐀 ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ _No tiene Pareja_`}\n${wm}`, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i

export default handler
