let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
╭•·–| 👥 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒 👥 |–·•
│ 𝚃𝙾𝚃𝙰𝙻 : ${users.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios Baneados' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`.trim()

await conn.sendButton(m.chat, caption, `⚠️ 𝙴𝚂𝚃𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝙽 𝚄𝚂𝙰𝚁 𝙰 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^listabanuser|listausuarios|listbanuser|listabaneados|listban$/i

export default handler
