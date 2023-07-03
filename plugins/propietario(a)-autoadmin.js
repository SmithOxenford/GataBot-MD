let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw '[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙰𝚁𝙻𝙴 𝙰𝙳𝙼𝙸𝙽'
  if (isAdmin) throw '[❗] 𝙷𝙾𝙻𝙰 𝙲𝚁𝙴𝙰𝙳𝙾𝚁, 𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰? 𝚄𝚂𝚃𝙴𝙳 𝚈𝙰 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
