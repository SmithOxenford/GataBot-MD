let handler = async (m, { conn, text }) => {
   if (!text) throw `𝚈 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 🤔`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, '𝙸𝙽𝙵𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾𝚂 ✅️', m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
