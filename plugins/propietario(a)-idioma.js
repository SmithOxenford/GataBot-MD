import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { es, en, id, ar, pt } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `𝙸𝙳𝙸𝙾𝙼𝙰 𝙳𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 :`
let texto2 = `𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝙴𝙻 𝙸𝙳𝙸𝙾𝙼𝙰 𝙿𝙰𝚁𝙰 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 🤖`
let texto3 = `𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙽𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝚁𝙰𝙽 𝙳𝙴 𝙸𝙳𝙸𝙾𝙼𝙰, 𝚂𝙾𝙻𝙾 𝙴𝙻 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙳𝙾 𝙳𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴`
let idioma = await translate(`${texto}`, { to: args[0], autoCorrect: true })
let idioma2 = await translate(`${texto2}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })
let idioma3 = await translate(`${texto3}`, { to: lenguajeGB.lenguaje(), autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeGB = es
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'en'){
global.lenguajeGB = en
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```𝙴𝙽𝙶𝙻𝙸𝚂𝙷```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'id'){
global.lenguajeGB = id
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```𝙱𝙰𝙷𝙰𝚂𝙰 𝙸𝙽𝙳𝙾𝙽𝙴𝚂𝙸𝙰```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'ar'){
global.lenguajeGB = ar
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```عرب```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'pt'){
global.lenguajeGB = pt
await conn.sendButton(m.chat, lenguajeGB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```𝙿𝙾𝚁𝚃𝚄𝙶𝚄𝙴𝚂```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
}else{
  
const sections = [{
title: '✨ 𝐈𝐃𝐈𝐎𝐌𝐀𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒 ✨',
rows: [
{title: "🌟 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻", rowId: `*${usedPrefix + command}* _es_`},
{title: "🌟 𝙴𝙽𝙶𝙻𝙸𝚂𝙷", rowId: `*${usedPrefix + command}* _en_`},
{title: "🌟 𝙱𝙰𝙷𝙰𝚂𝙰 𝙸𝙽𝙳𝙾𝙽𝙴𝚂𝙸𝙰", rowId: `*${usedPrefix + command}* _id_`},
{title: "🌟 عرب", rowId: `*${usedPrefix + command}* _ar_`},
{title: "🌟 𝙿𝙾𝚁𝚃𝚄𝙶𝚄𝙴𝚂", rowId: `*${usedPrefix + command}* _pt_`}]}]

const listMessage = {
text: idioma2.text + '\n\n' + idioma3.text,
footer: `✦ 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 = *${usedPrefix + command}* _es_
✦ 𝙴𝙽𝙶𝙻𝙸𝚂𝙷 = *${usedPrefix + command}* _en_
✦ 𝙱𝙰𝙷𝙰𝚂𝙰 𝙸𝙽𝙳𝙾𝙽𝙴𝚂𝙸𝙰 = *${usedPrefix + command}* _id_
✦ عرب = *${usedPrefix + command}* _ar_
✦ 𝙿𝙾𝚁𝚃𝚄𝙶𝚄𝙴𝚂 = *${usedPrefix + command}* _pt_\n\n` + wm,
title: `${htki} 𝐈𝐃𝐈𝐎𝐌𝐀 🌎`,
buttonText: `𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀𝐑`,
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
}catch(e){
await m.reply(`${fg}\`\`\`𝙽𝙾 𝚂𝙴 𝙻𝙾𝙶𝚁𝙾́ 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙳𝙴 𝙸𝙳𝙸𝙾𝙼𝙰, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix + command}* 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 _${usedPrefix}reporte_\`\`\``) 
console.log(e) 
}}

handler.command = /^(idioma|languaje|idiomas|languajes|languages)$/i
handler.owner = true

export default handler
