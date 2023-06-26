let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${lenguajeGB['smsAvisoMG']()}╭━[ 𝐔𝐒𝐀 𝐀𝐒𝐈 💋 ]━⬣
┃
┃➥ *${usedPrefix + command}* _abrir_
┃➥ *${usedPrefix + command}* _cerrar_
┃
╰━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━⬣
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()} 𝚈𝙰 𝙿𝚄𝙴𝙳𝙴𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝚃𝙾𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾! 😁`, `𝙶𝚁𝚄𝙿𝙾 𝙰𝙱𝙸𝙴𝚁𝚃𝙾\n${wm}`, pp, m)
}
  
if (isClose === 'announcement'){
//m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊*\n𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`)
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()} 𝚂𝙾𝙻𝙾 𝙻𝙾𝚂 𝙰𝙳𝙼𝙸𝙽 𝙿𝚄𝙴𝙳𝙴𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝙸𝙿𝙸𝙿𝙸! 😔`, `𝙶𝚁𝚄𝙿𝙾 𝙲𝙴𝚁𝚁𝙰𝙳𝙾\n${wm}`, pp, m)
}  
 }
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
