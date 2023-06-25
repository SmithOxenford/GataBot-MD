let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat

//let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
//let res = [];
let user = global.db.data.users[who]
if (!who) throw `𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙾 𝚁𝙴𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚂𝙴𝚁𝙰́ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*${usedPrefix + command} 1*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
let name = await '@' + who.split`@`[0]

var hora1 = 3600000 * txt //1h
var dia1 = 86400000 * txt //1d
var semana1 = 604800000 * txt //1s
var mes1 = 2629800000 * txt //1m
var now = new Date() * 1

if (!txt && !m.quoted) throw `⚠️ 𝙵𝙰𝙻𝚃𝙰 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 ⚠️`
if (txt == 0 || txt == null) throw `𝙳𝙴𝙱𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 🤗\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*${usedPrefix + command} 1*`
if (isNaN(txt)) return m.reply(`𝚂𝙾𝙻𝙾 𝙽𝚄́𝙼𝙴𝚁𝙾\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*`)

/*let titulo = [ 'PREMIUM 1', 'PREMIUM 2', 'PREMIUM 3', 'PREMIUM 4', 'PREMIUM 5', 'PREMIUM 6']
let nombre = [ 'PREMIUM BÁSICO', 'PREMIUM NORMAL', 'PREMIUM ESPECIAL', 'PREMIUM PRO', 'PREMIUM PLUS', 'PREMIUM MAGISTRAL']
let descripción = [ 'Premium durante 1 Hora', 'Premium durante 3 Horas', 'Premium durante 5 Horas', 'Premium durante 1 Día', 'Premium durante 1 Semana', 'Premium durante 1 Mes']
let tiempo = [ hora1, hora3, hora5, dia1, semana1, mes1]
let comando = [ 'premium1', `${command[2]}`, `${command[3]}`, `${command[4]}`, `${command[5]}`, `${command[6]}`]

let sections = Object.keys(titulo, nombre, descripción, tiempo, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + comando[v] + ' ' + `${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}` + txt, }], }))

const listMessage = {
text: `*ELIJA EL TIEMPO PREMIUM*
*_${name}_*
${wm}`,
title: null,
buttonText: `TIEMPO AQUÍ `,
sections }
  
if (command == 'addprem') {
//if (!txt || !text) return
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}*/
  
 
if (command == 'addprem' || command == 'userpremium') {
if (now < user.premiumTime) user.premiumTime += hora1
else user.premiumTime = now + hora1
user.premium = true
m.reply(`🎟️ 𝚄𝚂𝚃𝙴𝙳 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!!!

✨ 𝐍𝐎𝐌𝐁𝐑𝐄 :  » _${name}_
🕐 𝐓𝐈𝐄𝐌𝐏𝐎 :  » _${hora1 } hora(s)_
📉 𝐓𝐈𝐌𝐄𝐑 » _${user.premiumTime - now} seg_`)}
    
if (command == 'addprem2' || command == 'userpremium2') {
if (now < user.premiumTime) user.premiumTime += dia1
else user.premiumTime = now + dia1
user.premium = true
m.reply(`🎟️ 𝚄𝚂𝚃𝙴𝙳 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!!!

✨ 𝐍𝐎𝐌𝐁𝐑𝐄 :  » _${name}_
🕐 𝐓𝐈𝐄𝐌𝐏𝐎 :  » _${dia1} Día(s)_
📉 𝐓𝐈𝐌𝐄𝐑 » _${user.premiumTime - now} seg_`)}

  
if (command == 'addprem3' || command == 'userpremium3') {
if (now < user.premiumTime) user.premiumTime += semana1
else user.premiumTime = now + semana1
user.premium = true
m.reply(`🎟️ 𝚄𝚂𝚃𝙴𝙳 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!!!

✨ 𝐍𝐎𝐌𝐁𝐑𝐄 :  » _${name}_
🕐 𝐓𝐈𝐄𝐌𝐏𝐎 :  » _${semana1} Semana(s)_
📉 𝐓𝐈𝐌𝐄𝐑 » _${user.premiumTime - now} seg_`)}

  
if (command == 'addprem4' || command == 'userpremium4') {
if (now < user.premiumTime) user.premiumTime += mes1
else user.premiumTime = now + mes1
user.premium = true
m.reply(`🎟️ 𝚄𝚂𝚃𝙴𝙳 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!!!

*✨ 𝐍𝐎𝐌𝐁𝐑𝐄 :  » _${name}_
*🕐 𝐓𝐈𝐄𝐌𝐏𝐎 :  » _${mes1} Mes(es)_
*📉 𝐓𝐈𝐌𝐄𝐑 » _${user.premiumTime - now} seg_`)}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = ['addprem', 'userpremium', 'addprem2', 'userpremium2', 'addprem3', 'userpremium3', 'addprem4', 'userpremium4'] 
handler.group = true
handler.owner = true
handler.botAdmin = true
export default handler

/*let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙎𝙀𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋 💎\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*\n\n𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝙃𝙊 𝙒𝙄𝙇𝙇 𝘽𝙀 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 💎\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙔𝘼 𝙀𝙎 𝙑𝙄𝙋 ✨\n\n𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 𝙄𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ✨`
global.prems.push(`${who.split`@`[0]}`)
  //user.premium = true
conn.reply(m.chat, `${eg}@${who.split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋. 𝙉𝙊 𝙑𝘼 𝙏𝙀𝙉𝙀𝙍 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙉 ${gt} 😼\n\n@${who.split`@`[0]} 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙒 𝘼 𝙑𝙄𝙋 𝙐𝙎𝙀𝙍. 𝙒𝙄𝙇𝙇 𝙉𝙊𝙏 𝙃𝘼𝙑𝙀 𝙇𝙄𝙈𝙄𝙏𝙎 😼`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler*/
