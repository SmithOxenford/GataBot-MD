
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `${ag}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚂𝙸 𝙽𝙾 𝚂𝙰𝙱𝙴 𝙲𝚄𝙰𝙻 𝙴𝚂, 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *#myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw `${fg} 𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙴𝙻 𝙲𝙾𝚁𝚁𝙴𝚃𝙾, 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 *#myns* 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝚂𝚄 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 😁`

global.db.data.users[m.sender]['registroC'] = false
global.db.data.users[m.sender]['registroR'] = false
user.name = 0
user.age = 0
user.genero = 0
user.identidad = 0
user.pasatiempo = 0
user.premLimit = 1
user.tiempo = 0
user.descripcion = 0
user.registered = false
m.reply(`${eg}𝚄𝚂𝚃𝙴𝙳 𝚈𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾(𝙰) 😪`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
