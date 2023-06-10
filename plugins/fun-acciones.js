let handler = async (m, { conn, groupMetadata, text, command}) => {
  if (!m.mentionedJid[0] && !m.quoted) throw '𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁𝙻𝙴 𝙰𝙻𝙶𝚄𝙽𝙰𝚂 𝙰𝙲𝙲𝙸𝙾𝙽'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let participants = groupMetadata.participants
  conn.reply(m.chat, `𝙻𝙴 𝙰𝙲𝙰𝙱𝙰𝚂 𝙳𝙴 ${command} ${text} 𝙰 *@${user.split('@')[0]}* 😳`, null, { mentions: [user] })

}
handler.help = ['acciones']
handler.tags = ['acciones']
handler.command = /^(regalar|dar|enviar|meter|chupar|metersela|retar)$/

handler.group = true

export default handler
