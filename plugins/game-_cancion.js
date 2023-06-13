import similarity from 'similarity'
const threshold = 0.72
let handler = {
async before(m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/𝙰𝙳𝙸𝚅𝙸𝙽𝙰 𝙴𝙻 𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽/i.test(m.quoted.text)) return !0
this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
if (!(id in this.tebaklagu)) return m.reply('𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝙷𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️')
if (m.quoted.id == this.tebaklagu[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebaklagu[id][2]
m.reply(`✅𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!\n+${this.tebaklagu[id][2]} XP`)
clearTimeout(this.tebaklagu[id][3])
delete this.tebaklagu[id]
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`Casii!`)
else m.reply(`❌𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!`)
}
return !0
},
exp: 0
}
export default handler
