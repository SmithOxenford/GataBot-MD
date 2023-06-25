/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🤑\n𝙉𝙊 𝙀𝙎𝙏𝘼𝙍𝙀 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝘼.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝘽𝘼𝙉𝙉𝙀𝘿 👻\n𝙄 𝙒𝙄𝙇𝙇 𝙉𝙊𝙏 𝘽𝙀 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝙐𝙉𝙏𝙄𝙇 𝙄𝙏 𝙄𝙎 𝙐𝙉𝘽𝘼𝙉𝙉𝙀𝘿`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.rowner = true

export default handler*/

//PARA GRUPOS

let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂!')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝙱𝙰𝙽𝙴𝙰𝙳𝙾!')
  chat.isBanned = false
  m.reply(`${eg}𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 🥳\n𝙰𝙷𝙾𝚁𝙰 𝚂𝙸 𝙴𝚂𝚃𝙾𝚈 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 😁`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
