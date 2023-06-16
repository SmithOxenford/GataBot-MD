let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '𝚈𝙰 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙼𝙸 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 🥳'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
