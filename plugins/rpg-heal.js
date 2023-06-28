import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
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

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.reply(m.chat, `𝚃𝚄 𝚂𝙰𝙻𝚄𝙳 𝙴𝚂𝚃𝙰́ 𝙻𝙻𝙴𝙽𝙰 ❤️\n\n𝐒𝐀𝐋𝐔𝐃 : ${user.health}`, fkontak, m)
//conn.sendButton(m.chat, `𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 𝙀𝙎𝙏𝘼 𝙇𝙇𝙀𝙉𝘼 ❤️\n𝙔𝙊𝙐𝙍 𝙃𝙀𝘼𝙇𝙏𝙃 𝙄𝙎 𝙁𝙐𝙇𝙇 ❤️`, wm, imgr + `SALUD | HEALTH: ${user.health}`, [[`🏕️ 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙍 | 𝙑𝙀𝙉𝙏𝙐𝙍𝙀`, `${usedPrefix}adventure`], [`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.reply(m.chat, `${htki} 𝚂𝙸𝙽 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂 ${htka}\n\n𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 ${count - user.potion} 𝙿𝙾𝙲𝙸𝙾́𝙽 🥤 𝙿𝙰𝚁𝙰 𝙲𝚄𝚁𝙰𝚁𝚃𝙴

𝐒𝐀𝐋𝐔𝐃 : » ${user.health} ❤️
𝐏𝐎𝐂𝐈𝐎́𝐍 : » ${user.potion} 🥤

𝙲𝙾𝙼𝙿𝚁𝙰 𝙿𝙾𝙲𝙸𝙾́𝙽 𝙾 𝙿𝙸𝙳𝙴𝙻𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝚀𝚄𝙴 𝚃𝙴 𝚃𝚁𝙰𝙽𝚂𝙵𝙸𝙴𝚁𝙰 ☹️

𝐏𝐎𝐂𝐈𝐎́𝐍 𝐁𝐀𝐉𝐀 :
𝙲𝙾𝙼𝙿𝚁𝙰𝚁 𝙿𝙾𝙲𝙸𝙾́𝙽 🥤
*${usedPrefix}buy potion* ${count - user.potion}`, fkontak, m)
//conn.sendButton(m.chat,`${htki} 𝙎𝙄𝙉 𝙋𝙊𝘾𝙄𝙊𝙉𝙀𝙎 ${htka}`,  `𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 ${count - user.potion} 𝙿𝙾𝙲𝙸𝙾́𝙽 🥤 𝙿𝙰𝚁𝙰 𝙲𝚄𝚁𝙰𝚁𝚃𝙴 ${count - user.potion} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙃𝙀𝘼𝙇 𝙔𝙊𝙐 𝙎𝘼𝙇𝙐𝘿 : 𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️ 𝙋𝙊𝘾𝙄𝙊𝙉 : 𝙋𝙊𝙏𝙄𝙊𝙉 » ${user.potion} 🥤 𝘾𝙊𝙈𝙋𝙍𝘼 𝙋𝙊𝘾𝙄𝙊𝙉 𝙊 𝙋𝙄𝘿𝙀𝙇𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙌𝙐𝙀 𝙏𝙀 𝙏𝙍𝘼𝙉𝙎𝙁𝙄𝙀𝙍𝘼 𝘽𝙐𝙔 𝙋𝙊𝙏𝙄𝙊𝙉 𝙊𝙍 𝘼𝙎𝙆 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙏𝙍𝘼𝙉𝙎𝙁𝙀𝙍 𝙔𝙊𝙐`.trim(), imgr + 'POCION BAJA : LOW POTION', [[`𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙋𝙤𝙘𝙞𝙤𝙣 | 𝘽𝙪𝙮 𝙋𝙤𝙩𝙞𝙤𝙣 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],[`𝙋𝙚𝙙𝙞𝙧 𝘼𝙮𝙪𝙙𝙖 | 𝘼𝙨𝙠 𝙛𝙤𝙧 𝙝𝙚𝙡𝙥 ☘️`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* 🥤 *» AYUDA TRANSFIRIENDO:**${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], fkontak, m)
  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
   conn.reply(m.chat, `━┈━《 ✅ 𝐒𝐀𝐋𝐔𝐃 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀 》━┈━\n\n𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝚄𝚂𝙾 ${count} 𝙳𝙴 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝚂𝙰𝙻𝚄𝙳\n\n𝐒𝐀𝐋𝐔𝐃 » ${user.health} ❤\n\n𝚂𝙰𝙻𝚄𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙰𝙳𝙰 `, fkontak, m)    
//conn.sendButton(m.chat, `*━┈━《 ✅ 𝙎𝘼𝙇𝙐𝘿 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝘼 》━┈━*`, `𝙀𝙓𝙄𝙏𝙊𝙎𝘼𝙈𝙀𝙉𝙏𝙀 𝙐𝙎𝙊 ${count} 𝘿𝙀 𝙋𝙊𝘾𝙄𝙊𝙉 🥤 𝙋𝘼𝙍𝘼 𝙍𝙀𝘾𝙐𝙋𝙀𝙍𝘼𝙍 𝙎𝙐 𝙎𝘼𝙇𝙐𝘿\n\n𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔 𝙐𝙎𝙀 ${count} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙍𝙀𝘾𝙊𝙑𝙀𝙍 𝙃𝙀𝘼𝙇𝙏𝙃\n\n𝙎𝘼𝙇𝙐𝘿 : 𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA : HEALTH COMPLETED', [[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`]], fkontak, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
handler.register = true
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
