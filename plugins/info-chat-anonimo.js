import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

let chat = `👤 ᴇʟ ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ ғᴜɴᴄɪᴏɴᴀ sᴏʟᴏ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ ᴍᴀᴋᴀɴᴀᴋʏ.

👥 ᴄᴏɴsɪsᴛᴇ ᴇɴ ᴜsᴀʀ ᴇʟ ɴᴜ́ᴍᴇʀᴏ ᴅᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ʜᴀʙʟᴀʀ ᴄᴏɴ ᴏᴛʀᴀs ᴘᴇʀsᴏɴᴀs, ᴇs ᴅᴇᴄɪʀ ʟᴀs ᴅᴏs ᴘᴇʀsᴏɴᴀs ᴇsᴛᴀʀᴀ́ɴ ᴀ ʟᴀ ᴠᴇᴢ ᴇsᴄʀɪʙɪᴇɴᴅᴏ ᴘᴏʀ ᴇʟ ᴄʜᴀᴛ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ, ᴅᴇ ᴇsᴀ ᴍᴀɴᴇʀᴀ ɴɪɴɢᴜɴᴀ 🔒ᴅᴇ ʟᴀs ᴅᴏs ᴘᴇʀsᴏɴᴀs ᴘᴜᴇᴅᴇɴ ᴠᴇʀ sᴜ ɴᴜ́ᴍᴇʀᴏ, ғᴏᴛᴏ, ᴜsᴜᴀʀɪᴏ, ᴅᴇsᴄʀɪᴘᴄɪᴏ́ɴ ᴇᴛᴄ... 🔒

✨ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ʜᴀᴄᴇʀ ᴜsᴏ ᴅᴇ ᴇsᴛᴀ ғᴜɴᴄɪᴏ́ɴ ᴅᴇʙᴇs ʜᴀᴄᴇʀ ʟᴏ sɪɢᴜɪᴇɴᴛᴇ:
⚡️ ɪɴɢʀᴇsᴀ ᴀʟ ᴄʜᴀᴛ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ
⚡️ ᴇsᴄʀɪʙᴇ ᴇs sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ
*#start*

✅ ᴜɴᴀ ᴠᴇᴢ ʜᴇᴄʜᴏ ʟᴏ ᴀɴᴛᴇʀɪᴏʀ sᴏʟᴏ ᴛɪᴇɴᴇs ϙᴜᴇ ᴛᴇɴᴇʀ ᴘᴀᴄɪᴇɴᴄɪᴀ ᴀ ϙᴜᴇ ᴏᴛʀᴀ ᴘᴇʀsᴏɴᴀ ᴜsᴇ ᴇʟ ᴍɪsᴍᴏ ᴄᴏᴍᴀɴᴅᴏ ﹙*#start*﹚ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ sᴇʀ ᴠɪɴᴄᴜʟᴀᴅᴏs ᴘᴏʀ ᴍᴇᴅɪᴏ ᴅᴇʟ ɴᴜ́ᴍᴇʀᴏ ᴅᴇʟ ʙᴏᴛ ʏ ᴇᴍᴘᴇᴢᴀʀ ᴀ ɪɴᴛᴇʀᴀᴄᴛᴜᴀʀ 

✅ Sɪ ᴅᴇᴊᴀs ᴀᴄᴛɪᴠᴀᴅᴏ ᴇʟ *#start* ᴛᴇɴᴅʀᴀ́s ᴍᴀ́s ᴘᴏsɪʙɪʟɪᴅᴀᴅᴇs ᴅᴇ ɪɴᴛᴇʀᴀᴄᴛᴜᴀʀ ᴄᴏɴ ʟᴀ ᴏᴛʀᴀ ᴘᴇʀsᴏɴᴀ ᴅᴇ ғᴏʀᴍᴀ ᴀɴᴏ́ɴɪᴍᴀ 

🚪 ᴇɴ ᴄᴀsᴏ ϙᴜᴇ ϙᴜɪᴇʀᴀs sᴀʟɪʀ ᴅᴇʟ ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ ᴜsᴀ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ 
*#leave* 

✅ ᴅᴇ ᴇsᴀ ғᴏʀᴍᴀ ʏᴀ ᴅᴇᴊᴀʀᴀ́s ᴅᴇ ᴇsᴛᴀʀ ᴇɴ ᴇʟ ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ ᴅᴇʟ ʙᴏᴛ
❗ ɴᴏ ɴᴏs ʜᴀᴄᴇᴍᴏs ʀᴇsᴘᴏɴsᴀʙʟᴇs ᴅᴇʟ ᴍᴀʟ ᴜsᴏ ϙᴜᴇ ʟᴇ ᴘᴜᴇᴅᴀs ᴅᴀʀ ᴀ ᴇsᴛᴀ ғᴜɴᴄɪᴏ́ɴ ᴅᴇʟ ʙᴏᴛ.`

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

await conn.sendButton(m.chat, chat, wm, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu'] ], fkontak, m)  
}

handler.command = /^(anonimochat|chatanonimo|AnonimoChat|ChatAnonimo|chatanónimo|anónimochat|anonimoch)$/i
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
