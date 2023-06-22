let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡𝙷𝙴𝚈! 𝙴𝚂𝙿𝙴𝚁𝙰 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙾𝙱𝙰𝚁 😁`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙿𝙰𝚁𝙰 𝚁𝙾𝙱𝙰𝚁.`
if (!(who in global.db.data.users)) throw `[❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂.`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} 𝚃𝙸𝙴𝙽𝙴 𝙼𝙴𝙽𝙾𝚂 𝙳𝙴 *${ro} 𝚇𝙿\n𝙽𝙾 𝚁𝙾𝙱𝙴𝚂 𝙰 𝚄𝙽 𝙿𝙾𝙱𝚁𝙴 ☹️`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
global.db.data.users[m.sender].limit += rob
global.db.data.users[who].limit -= rob 
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`‣ 𝚁𝙾𝙱𝙰𝚂𝚃𝙴 ${rob} 𝚇𝙿 𝙰 @${who.split`@`[0]}`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['econ']
handler.command = ['robar', 'rob']
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

