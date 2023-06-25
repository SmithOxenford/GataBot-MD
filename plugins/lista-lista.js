let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝐓𝐈𝐏𝐎𝐒 𝐃𝐄 𝐋𝐈𝐒𝐓𝐀𝐒 ' + fin,
rows: [
{title: "📛 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎𝐒 : ", rowId: `*${usedPrefix}* _listablock_`, description: `𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾𝚂 𝙿𝙾𝚁 𝙻𝙻𝙰𝙼𝙰𝚁. 😐`},
{title: "⚠️ 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐒  : ", rowId: `*${usedPrefix}* _listadv_`, description: `𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚂 𝙿𝙾𝚁 𝙼𝙰𝙻𝙰𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂. 😐`},
{title: "📵 𝐂𝐇𝐀𝐓𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒 :  ", rowId: `*${usedPrefix}* _chatsbaneados_`, description: `𝙲𝙷𝙰𝚃𝚂 𝙳𝙾𝙽𝙳𝙴 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝙽 𝚄𝚂𝙰𝚁 𝙰 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖`},
{title: "🚷 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒 :  ", rowId: `*${usedPrefix}* _listbanuser_`, description: `𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚀𝚄𝙴 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝙽 𝚄𝚂𝙰𝚁 𝙰 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖`},
{title: "🎟️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 :  ", rowId: `*${usedPrefix}* _listapremium_`, description: `𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙲𝙾𝙽 𝙿𝙰𝚂𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 🤑`},
{title: "💞 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐄𝐍 𝐑𝐄𝐋𝐀𝐂𝐈𝐎𝐍 : ", rowId: `*${usedPrefix}* _listaparejas_`, description: `𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰𝙽 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾𝙽 𝚁𝙾𝙼𝙰𝙽𝚃𝙸𝙲𝙰 🥰`}]}]

const listMessage = {
  text: `𝐓𝐈𝐏𝐎𝐒 𝐃𝐄 𝐋𝐈𝐒𝐓𝐀𝐒 𝐃𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒`,
  footer: wm,
  title: `${htki} 𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐀𝐑𝐈𝐀𝐃𝐀𝐒 📃`,
  buttonText: `📑 𝙑𝙀𝙍 𝙇𝙄𝙎𝙏𝘼𝙎 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
