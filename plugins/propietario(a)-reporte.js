let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 ❤️\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _el comando *${usedPrefix}*infobot no funciona_`
if (text.length < 8) throw `${fg} ✨ ᴍɪ́ɴɪᴍᴏ 10 ᴄᴀʀᴀᴄᴛᴇʀᴇs ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴇʟ ʀᴇᴘᴏʀᴛᴇ.`
if (text.length > 1000) throw `${fg} ᴍᴀ́xɪᴍᴏ 1000 ᴄᴀʀᴀᴄᴛᴇʀᴇs ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴇʟ ʀᴇᴘᴏʀᴛᴇ.`
let teks = `╭━━[ ⚠️ 𝐑𝐄𝐏𝐎𝐑𝐓𝐄 ⚠️ ]━━━⬣\n*┃*\n*┃* 𝐍𝐔́𝐌𝐄𝐑𝐎 :\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 :\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('51936933624@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ 𝐄𝐗𝐈𝐓𝐎 ⊱💚⊱╮\n\n𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙷𝙰 𝚂𝙸𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸́ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁. 𝚃𝙴𝙽𝙳𝚁𝙰́ 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾. 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙴𝚁𝙰́ 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴.`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
