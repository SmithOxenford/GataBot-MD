import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw '_Dont: node main.js\nDo: node index.js_'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('🚀🚀')
         await m.reply('🚀🚀🚀🚀')
         await m.reply('🚀🚀🚀🚀🚀🚀')
         await m.reply('𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝚁') 
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler
