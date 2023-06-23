let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('😨 ¡𝙽𝙾 𝙷𝙰𝙶𝙰𝚂 𝚃𝚁𝙰𝙼𝙿𝙰! 😨')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw `${mg} 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽𝙰 𝙾𝙿𝙴𝚁𝙰𝙲𝙸𝙾́𝙽 𝙼𝙰𝚃𝙴𝙼𝙰𝚃𝙸𝙲𝙰 𝙿𝙰𝚁𝙰 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚁 𝙴𝙻 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 😁`
throw `${fg} 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙰𝙳𝙼𝙸𝚃𝙴𝙽 𝙽𝚄́𝙼𝙴𝚁𝙾𝚂 𝚈 𝚂𝙸𝙼𝙱𝙾𝙻𝙾𝚂, -, +, * , /, ×, ÷, π, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
