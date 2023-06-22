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
  
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid3.mp4'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
╭━━━〔 𝐑𝐀𝐍𝐆𝐎𝐒 〕━━━⬣
𝐍𝐎𝐌𝐁𝐑𝐄 :
${username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐓𝐔 𝐑𝐀𝐍𝐆𝐎 𝐀𝐂𝐓𝐔𝐀𝐋 :
${role}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *∞ 𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸* 💎🏁
👑 *∞ 𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝙸* 💎🏁
👑 *∞ 𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝙸𝙸* 💎🏁
👑 *∞ 𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝚅* 💎🏁
👑 *∞ 𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝚅* 💎🏁
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸* 🏁
👑 *𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝙸* 🏁
👑 *𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝙸𝙸* 🏁
👑 *𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙸𝚅* 🏁
👑 *𝙴́𝙻𝙸𝚃𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝚅* 🏁
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝚃𝙾𝙿 𝙰𝚂𝚃𝚁𝙰𝙻 𝙸* ⚜️🔱
*𝚃𝙾𝙿 𝙰𝚂𝚃𝚁𝙰𝙻 𝙸𝙸* ⚜️🔱
*𝚃𝙾𝙿 𝙰𝚂𝚃𝚁𝙰𝙻 𝙸𝙸𝙸* ⚜️🔱
*𝚃𝙾𝙿 𝙰𝚂𝚃𝚁𝙰𝙻 𝙸𝚅* ⚜️🔱
*𝚃𝙾𝙿 𝙰𝚂𝚃𝚁𝙰𝙻 𝚅* ⚜️🔱
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙴𝚂𝚃𝙴𝙻𝙰𝚁 𝙸* ☄️
*𝙴𝚂𝚃𝙴𝙻𝙰𝚁 𝙸𝙸* ☄️
*𝙴𝚂𝚃𝙴𝙻𝙰𝚁 𝙸𝙸𝙸* ☄️
*𝙴𝚂𝚃𝙴𝙻𝙰𝚁 𝙸𝚅* ☄️
*𝙴𝚂𝚃𝙴𝙻𝙰𝚁 𝚅* ☄️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙻𝙴𝚈𝙴𝙽𝙳𝙰 𝙸* 🏆
*𝙻𝙴𝚈𝙴𝙽𝙳𝙰 𝙸𝙸* 🏆
*𝙻𝙴𝚈𝙴𝙽𝙳𝙰 𝙸𝙸𝙸* 🏆
*𝙻𝙴𝚈𝙴𝙽𝙳𝙰 𝙸𝚅* 🏆
*𝙻𝙴𝚈𝙴𝙽𝙳𝙰 𝚅* 🏆
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝙸𝙾(𝙰) 𝙸* 🛡️
*𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝙸𝙾(𝙰) 𝙸𝙸* 🛡️
*𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝙸𝙾(𝙰) 𝙸𝙸𝙸* 🛡️
*𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝙸𝙾(𝙰) 𝙸𝚅* 🛡️
*𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝙸𝙾(𝙰) 𝚅* 🛡️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝚂𝚄𝙿𝙴𝚁 𝙿𝚁𝙾 𝙸* 🎩
*𝚂𝚄𝙿𝙴𝚁 𝙿𝚁𝙾 𝙸𝙸* 🎩
*𝚂𝚄𝙿𝙴𝚁 𝙿𝚁𝙾 𝙸𝙸𝙸* 🎩
*𝚂𝚄𝙿𝙴𝚁 𝙿𝚁𝙾 𝙸𝚅* 🎩
*𝚂𝚄𝙿𝙴𝚁 𝙿𝚁𝙾 𝚅* 🎩
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙿𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙸* 😼
*𝙿𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙸𝙸* 😼
*𝙿𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙸𝙸𝙸* 😼
*𝙿𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙸𝚅* 😼
*𝙿𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝚅* 😼
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 𝙸* 💎
*𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 𝙸𝙸* 💎
*𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 𝙸𝙸𝙸* 💎
*𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 𝙸𝚅* 💎
*𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴 𝚅* 💎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙾𝚁𝙾 𝙸* 🏅
*𝙾𝚁𝙾 𝙸𝙸* 🏅
*𝙾𝚁𝙾 𝙸𝙸𝙸* 🏅
*𝙾𝚁𝙾 𝙸𝚅* 🏅
*𝙾𝚁𝙾 𝚅* 🏅
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙿𝙻𝙰𝚃𝙰 𝙸* 🔮
*𝙿𝙻𝙰𝚃𝙰 𝙸𝙸* 🔮
*𝙿𝙻𝙰𝚃𝙰 𝙸𝙸𝙸* 🔮
*𝙿𝙻𝙰𝚃𝙰 𝙸𝚅* 🔮
*𝙿𝙻𝙰𝚃𝙰 𝚅* 🔮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙸𝚁𝙾𝙽 𝙸* 🦾
*𝙸𝚁𝙾𝙽 𝙸𝙸* 🦾
*𝙸𝚁𝙾𝙽 𝙸𝙸𝙸* 🦾
*𝙸𝚁𝙾𝙽 𝙸𝚅* 🦾
*𝙸𝚁𝙾𝙽 𝚅* 🦾
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙼𝙰𝙴𝚂𝚃𝚁𝙾(𝙰) 𝙸* ⚒️
*𝙼𝙰𝙴𝚂𝚃𝚁𝙾(𝙰) 𝙸𝙸* ⚒️
*𝙼𝙰𝙴𝚂𝚃𝚁𝙾(𝙰) 𝙸𝙸𝙸* ⚒️
*𝙼𝙰𝙴𝚂𝚃𝚁𝙾(𝙰) 𝙸𝚅* ⚒️
*𝙼𝙰𝙴𝚂𝚃𝚁𝙾(𝙰) 𝚅* ⚒️
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙴𝚇𝙿𝙻𝙾𝚁𝙰𝙳𝙾𝚁(𝙰) 𝙸* 🪓
*𝙴𝚇𝙿𝙻𝙾𝚁𝙰𝙳𝙾𝚁(𝙰) 𝙸𝙸* 🪓
*𝙴𝚇𝙿𝙻𝙾𝚁𝙰𝙳𝙾𝚁(𝙰) 𝙸𝙸𝙸* 🪓
*𝙴𝚇𝙿𝙻𝙾𝚁𝙰𝙳𝙾𝚁(𝙰) 𝙸𝚅* 🪓
*𝙴𝚇𝙿𝙻𝙾𝚁𝙰𝙳𝙾𝚁(𝙰) 𝚅* 🪓
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙰𝙿𝚁𝙴𝙽𝙳𝙸𝚂 𝙸* 🪚
*𝙰𝙿𝚁𝙴𝙽𝙳𝙸𝚂 𝙸𝙸* 🪚
*𝙰𝙿𝚁𝙴𝙽𝙳𝙸𝚂 𝙸𝙸𝙸* 🪚
*𝙰𝙿𝚁𝙴𝙽𝙳𝙸𝚂 𝙸𝚅* 🪚
*𝙰𝙿𝚁𝙴𝙽𝙳𝙸𝚂 𝚅* 🪚
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝙽𝙾𝚅𝙰𝚃𝙾(𝙰) 𝙸* 🪤
*𝙽𝙾𝚅𝙰𝚃𝙾(𝙰) 𝙸𝙸* 🪤
*𝙽𝙾𝚅𝙰𝚃𝙾(𝙰) 𝙸𝙸𝙸* 🪤
*𝙽𝙾𝚅𝙰𝚃𝙾(𝙰) 𝙸𝚅* 🪤
*𝙽𝙾𝚅𝙰𝚃𝙾(𝙰) 𝚅* 🪤
╰━━━━━━━━━━━━━━━━━━━⬣`.trim()
conn.sendHydrated(m.chat, menu, `𝐑𝐀𝐍𝐆𝐎𝐒 | ${wm}`, pp, 'https://github.com/SmithOxenford/MakanakyBot-MD', '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu'],
['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu']
], m,)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(rol|rango|roles|rangos)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
