let handler = async (m, { command, text }) => m.reply(`
╭━〔 ❗ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 ❗ 〕━⬣  
  
⬣ 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 : _${text}_ 🤔
⬣ 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 : ${['_Si_','_Tal vez sí_','_Posiblemente_','_Probablemente no_','_No','_Imposible_'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
