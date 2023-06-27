import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

//import { xpRange } from '../lib/levelling.js'
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
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false



//let handler = async (m, { conn }) => {
//let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
╭━━━[ 𝐍𝐈𝐕𝐄𝐋 ]━━━━⬣
┃ 𝙽𝙾𝙼𝙱𝚁𝙴 :
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙽𝙸𝚅𝙴𝙻 : 
┃ ${user.level}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝚁𝙰𝙽𝙶𝙾 :
┃ ${user.role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝚇𝙿:
┃ ${user.exp - min}/${xp}
╰━━━〔 ${vs} 〕━━⬣

𝚃𝙴 𝙵𝙰𝙻𝚃𝙰 ${max - user.exp} 𝙳𝙴 𝚇𝙿 𝙿𝙰𝚁𝙰 𝚂𝚄𝙱𝙸𝚁 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻 😁
`.trim()
    }
        
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `𝙱𝙸𝙴𝙽 𝙷𝙴𝙲𝙷𝙾! ${conn.getName(m.sender)} 𝐍𝐈𝐕𝐄𝐋 : ${user.level}`
        let str = `
╭━━━[ 𝐍𝐈𝐕𝐄𝐋 ]━━━━⬣
┃ 𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁 : 
┃ ${before}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙽𝙸𝚅𝙴𝙻 𝙰𝙲𝚃𝚄𝙰𝙻 :
┃ ${user.level}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝚁𝙰𝙽𝙶𝙾 :
┃ ${user.role}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙵𝙴𝙲𝙷𝙰 :
┃ ${new Date().toLocaleString('id-ID')}
╰━━━〔 ${vs} 〕━━⬣

𝙲𝚄𝙰𝙽𝚃𝙾 𝙼𝙰́𝚂 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄́𝙴𝚂 𝙲𝙾𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖, 𝙼𝙰𝚈𝙾𝚁 𝚂𝙴𝚁𝙰́ 𝚃𝚄 𝙽𝙸𝚅𝙴𝙻!
𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰 𝚃𝚄́ 𝚁𝙰𝙽𝙶𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *${usedPrefix}rol* 🤩
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
      }
    }
  }

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.exp = 0
export default handler
    
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}    
