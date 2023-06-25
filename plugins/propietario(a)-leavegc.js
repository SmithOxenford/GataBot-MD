let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙵𝚄𝙴 𝚄𝙽 𝙶𝚄𝚂𝚃𝙾 𝙴𝚂𝚃𝙰 𝙰𝚀𝚄𝙸 𝙷𝙰𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾 👋') 
await conn.groupLeave(id)}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
