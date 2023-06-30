import similarity from 'similarity'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
this.tekateki = this.tekateki ? this.tekateki : {}
if (!(id in this.tekateki)) return m.reply('𝙴𝚂𝙴 𝙰𝙲𝙴𝚁𝚃𝙸𝙹𝙾 𝚈𝙰 𝙷𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️')
if (m.quoted.id == this.tekateki[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
// m.reply(JSON.stringify(json, null, '\t'))
if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tekateki[id][2]
m.reply(`𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰! 🤗\n+${this.tekateki[id][2]} _EXP_`)
clearTimeout(this.tekateki[id][3])
delete this.tekateki[id]
} else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`𝙲𝙰𝚂𝙸 𝙻𝙾 𝙻𝙾𝙶𝚁𝙰𝚂! 😁`)
else m.reply('𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰! ☹️')
}
return !0
}

handler.exp = 0

export default handler
