let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag}𝚂𝙸 𝙽𝙾 𝙴𝚂 𝚂𝚄𝙱 𝙱𝙾𝚃, 𝙲𝙾𝙼𝚄𝙽𝙸𝚀𝚄𝙴𝚂𝙴 𝙰𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 🤖`, m)
else {
await conn.reply(m.chat, `${rg}𝚄𝚂𝚃𝙴𝙳 𝙷𝙰 𝙲𝙴𝚁𝚁𝙰𝙳𝙸 𝚂𝙴𝚂𝙸𝙾́𝙽 𝙲𝙾𝙽𝙼𝙸𝙶𝙾 😯`, m)
conn.ws.close()}}
handler.command = /^(berhenti|stop|detener)$/i
handler.owner = true  
handler.fail = null
export default handler
