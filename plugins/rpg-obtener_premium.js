let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂\n✤ ${gata} ${rpgshop.emoticon('limit')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('limit')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('limit')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.limit -= gata * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('limit')}_
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*_${user.limit + gata} ${rpgshopp.emoticon('limit')}_
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*_${user.limit} ${rpgshopp.emoticon('limit')}_
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} min_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 » 
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂\n✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('kyubi')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('kyubi')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.kyubi -= gata * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('kyubi')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('kyubi')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*${user.limit} ${rpgshopp.emoticon('kyubi')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} min_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 » 
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂\n✤ ${gata} ${rpgshop.emoticon('emerald')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('emerald')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('emerald')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.emerald -= gata * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('emerald')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('emerald')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*${user.limit} ${rpgshopp.emoticon('emerald')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} min_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 » 
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙷𝙾𝚁𝙰(𝚂)\n✤ ${gata} ${rpgshop.emoticon('trash')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('trash')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('trash')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.trash -= gata * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('trash')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('trash')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*${user.limit} ${rpgshopp.emoticon('trash')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} hora(s)_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 » 
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙷𝙾𝚁𝙰(𝚂)\n✤ ${gata} ${rpgshop.emoticon('berlian')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('berlian')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('berlian')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.berlian -= gata * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('berlian')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('berlian')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*${user.limit} ${rpgshopp.emoticon('berlian')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} hora(s)_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 »
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙷𝙾𝚁𝙰(𝚂)\n✤ ${gata} ${rpgshop.emoticon('joincount')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('joincount')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('joincount')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.joincount -= gata * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('joincount')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('joincount')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 » 
*┃*${user.limit} ${rpgshopp.emoticon('joincount')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} hora(s)_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 »
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙷𝙾𝚁𝙰(𝚂)\n✤ ${gata} ${rpgshop.emoticon('diamond')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('diamond')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 *${rpgshopp.emoticon('diamond')}* 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.diamond -= gata * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('diamond')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 » 
*┃*${user.limit + gata} ${rpgshopp.emoticon('diamond')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 »
*┃*${user.limit} ${rpgshopp.emoticon('diamond')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} hora(s)_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 »
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼\n\n✤ 🎟️ 1 = ${tiempoDecretado} 𝙳𝙸𝙰(𝚂)\n✤ ${gata} ${rpgshop.emoticon('gold')}*\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata) return conn.reply(m.chat, `${ag}𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 *${rpgshop.emoticon('gold')}* 𝙿𝙰𝚁𝙰 𝙰𝚀𝚄𝙸𝚁𝙸𝚁 🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙾𝙵𝚁𝙴 ${rpgshopp.emoticon('gold')} 𝙴𝙽 𝙻𝙰 𝚃𝙸𝙴𝙽𝙳𝙰 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}buy* 𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚅𝙴𝙽𝙳𝙴𝚁 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙶𝙰𝙽𝙰𝙽𝙲𝙸𝙰𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}sell*`, fkontak, m)
user.gold -= gata * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'',
''];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃*🎟️ 𝐔𝐒𝐓𝐄𝐃 𝐀𝐇𝐎𝐑𝐀 𝐄𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!
*┃*
*┃*✨ 𝙽𝙾𝙼𝙱𝚁𝙴 » 
*┃*${user.name}
*┃*
*┃💰 𝙿𝙰𝙶𝙾 » 
*┃*-${gata * text} ${rpgshopp.emoticon('gold')}
*┃*
*┃👝 𝚃𝙴𝙽𝙸𝙰 »
*┃*${user.limit + gata} ${rpgshopp.emoticon('gold')}
*┃*
*┃🛄 𝙻𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 »
*┃*${user.limit} ${rpgshopp.emoticon('gold')}
*┃*
*┃🕐 𝚃𝙸𝙴𝙼𝙿𝙾 » 
*┃*_${tiempoPremium} dia(s)_
*┃*
*┃📉 𝚃𝙸𝙼𝙴𝚁 »
*┃*_${user.premiumTime - now} seg_
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝚅𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙸́𝙼𝙸𝚃𝙴𝚂.\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' 🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌 🎟️ ' + fin,
rows: [
{title: "💎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓵ : 𝐏𝐀𝐒𝐒 ⓵", rowId: `*${usedPrefix}prem1 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝙱𝙰́𝚂𝙸𝙲𝙾 :\n✪ 15 ${rpgshop.emoticon('limit')} ➟ _5 min Premium_\n`},
{title: "🌀 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓶ : 𝐏𝐀𝐒𝐒 ⓶", rowId: `*${usedPrefix}prem2 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝚃𝙾𝚁𝚁𝙴 𝙳𝙴 𝙴𝙽𝙲𝙰𝙽𝚃𝙾 :\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ _15 min Premium_\n`},
{title: "💚 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓷ : 𝐏𝐀𝐒𝐒 ⓷", rowId: `*${usedPrefix}prem3 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝚅𝙴𝚁𝙳𝚄𝚉𝙲𝙾 :\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ _30 min Premium_\n`},
{title: "🗑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓸ : 𝐏𝐀𝐒𝐒 ⓸", rowId: `*${usedPrefix}prem4 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝚁𝙴𝚂𝙸𝙳𝚄𝙾𝚂 𝙴𝙲𝙾 : \n✪ 50 ${rpgshop.emoticon('trash')} ➟ _1 h Premium_\n`},
{title: "♦️ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓹ : 𝐏𝐀𝐒𝐒 ⓹", rowId: `*${usedPrefix}prem5 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝙲𝙰𝚉𝙰 𝙱𝚁𝙸𝙻𝙻𝙰𝙽𝚃𝙴 : \n✪ 40 ${rpgshop.emoticon('berlian')} ➟ _3 h Premium_\n`},
{title: "🪙 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓺ : 𝐏𝐀𝐒𝐒 ⓺", rowId: `*${usedPrefix}prem6 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝙰𝙼𝙾 𝙳𝙴𝙻 𝙲𝚁𝙸𝙿𝚃𝙾: \n✪ 70 ${rpgshop.emoticon('joincount')} ➟ _7 h Premium_\n`},
{title: "💎+ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓻ : 𝐏𝐀𝐒𝐒 ⓻", rowId: `*${usedPrefix}prem7 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝙶𝙴𝙼𝙰 𝙿𝙻𝚄𝚂 : \n✪ 65 ${rpgshop.emoticon('diamond')} ➟ _24 h Premium_\n`},
{title: "👑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐂𝐋𝐀𝐒𝐄 ⓼ : 𝐏𝐀𝐒𝐒 ⓼", rowId: `*${usedPrefix}prem8 1*`, description: `✪ 𝙿𝙰𝚂𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙾𝚁𝙾 :\n✪ 80 ${rpgshop.emoticon('gold')} ➟ _3 d Premium_\n`}
]},{
title: comienzo + ' 🌟 𝙄𝙉𝙁𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🌟 ' + fin,
rows: [
{title: "🎟️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: usedPrefix + 'listprem'},
{title: "🏆 𝐓𝐎𝐏 𝐌𝐔𝐍𝐃𝐈𝐀𝐋", rowId: usedPrefix + 'top'},
{title: "🚀 𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐀𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `🌟 𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!!!`,
  footer: global.wm,
  title: `${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}`,
  buttonText: `🎟️ 𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
