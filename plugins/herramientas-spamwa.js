let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️ 𝙴𝚂𝙿𝙴𝚁𝙰 ${msToTime(time - new Date())}\n 𝙽𝙾 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝚄𝙽 𝙼𝙰𝙻 𝚄𝚂𝙾`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙰𝙻 𝚀𝚄𝙴 𝚂𝙴 𝙻𝙴 𝙷𝙰𝚁𝙰́ 𝚂𝙿𝙰𝙼 😁\n❊ *${usedPrefix + command}* 𝙽𝚄́𝙼𝙴𝚁𝙾 | 𝚃𝙴𝚇𝚃𝙾 | 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n❊ *${usedPrefix + command}* _999999999999|Holaaa|35_`
if (!pesan) throw `${mg}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙰𝙻 𝚀𝚄𝙴 𝚂𝙴 𝙻𝙴 𝙷𝙰𝚁𝙰́ 𝚂𝙿𝙰𝙼 😁\n❊ *${usedPrefix + command}* 𝙽𝚄́𝙼𝙴𝚁𝙾 | 𝚃𝙴𝚇𝚃𝙾 | 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n❊ *${usedPrefix + command}* _999999999999|Holaaa|35_`
if (jumlah && isNaN(jumlah)) throw `𝙴𝙽 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴𝙱𝙴 𝙸𝚁 𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙰𝙻 𝚀𝚄𝙴 𝚂𝙴 𝙻𝙴 𝙷𝙰𝚁𝙰́ 𝚂𝙿𝙰𝙼\n❊ *${usedPrefix + command}* 𝙽𝚄́𝙼𝙴𝚁𝙾 | 𝚃𝙴𝚇𝚃𝙾 | 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n❊ *${usedPrefix + command}* _999999999999|Holaaa|35_`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `${fg} 𝙼𝙸́𝙽𝙸𝙼𝙾 𝟷0 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁 𝙴𝙻 𝚂𝙿𝙰𝙼 😁`
await delay(10000)
await m.reply(`${eg}𝙴𝙻 𝚂𝙿𝙰𝙼 𝚂𝙴 𝙴𝙽𝚅𝙸𝙾́ *${fixedJumlah}* 𝚅𝙴𝙲𝙴𝚂 𝙰 ${nomor}`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
handler.limit = 60
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
