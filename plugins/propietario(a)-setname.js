let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `𝚈 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 🤔`
  try {
    await conn.updateProfileName(text)
    m.reply('𝙻𝙸𝚂𝚃𝙾! ✅️')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

export default handler