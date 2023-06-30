const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupoOficial1 = nn
const grupoOficial2 = nnn
const grupoOficial3 = nnnt
const grupoOficial4 = nnntt
const grupoOficial5 = nnnttt
const grupoOficial6 = nnnttt2
const grupoOficial7 = nnnttt3
const grupoOficial8 = nnnttt4


let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let [_1, code1] = grupoOficial1.match(linkRegex) || []
let [_2, code2] = grupoOficial2.match(linkRegex) || []
let [_3, code3] = grupoOficial3.match(linkRegex) || []
let [_4, code4] = grupoOficial4.match(linkRegex) || []
let [_5, code5] = grupoOficial5.match(linkRegex) || []
let [_6, code6] = grupoOficial6.match(linkRegex) || []
let [_7, code7] = grupoOficial7.match(linkRegex) || []
let [_8, code8] = grupoOficial8.match(linkRegex) || []

if ( users == 51936933624 || users == 51986206184 ) try {
if (!text) return m.reply(`⚠️ 𝙵𝙰𝙻𝚃𝙰 𝚃𝙴𝚇𝚃𝙾 ⚠️`) 
  
let res1 = await conn.groupAcceptInvite(code1)
let res2 = await conn.groupAcceptInvite(code2)
let res3 = await conn.groupAcceptInvite(code3)
let res4 = await conn.groupAcceptInvite(code4)
let res5 = await conn.groupAcceptInvite(code5)
let res6 = await conn.groupAcceptInvite(code6)
let res7 = await conn.groupAcceptInvite(code7)
let res8 = await conn.groupAcceptInvite(code8)

await conn.sendMessage(res1, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res2, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res3, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res3}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res4, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res4}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res5, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res5}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res6, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res6}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res7, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res7}`)).participants.map(v => v.id) }, { quoted: fkontak })
await conn.sendMessage(res8, { text: text + '\n\n𝐀𝐓𝐓𝐄 : 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰́𝙽𝙲𝙷𝙴𝚉', mentions: (await conn.groupMetadata(`${res8}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴́𝚇𝙸𝚃𝙾 𝙴𝙽 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)

} else {
await m.reply('```𝚄𝚂𝚃𝙴𝙳 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙰𝚄𝚃𝙾𝚁𝙸𝚉𝙰𝙲𝙸𝙾́𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾. 💋```')}
}
handler.command = ['mensajeoficial2']
handler.owner = true

export default handler
