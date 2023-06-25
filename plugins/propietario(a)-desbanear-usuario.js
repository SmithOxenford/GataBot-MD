let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚂𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 😁`, m)
if(isNaN(number)) return conn.reply(m.chat, `𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙾́ 𝙽𝙾 𝙴𝚂 𝚅𝙰́𝙻𝙸𝙳𝙾 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 ☹️`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
global.global.db.data.users[user].banned = false
conn.reply(m.chat, `@${number} 𝙷𝙰 𝚂𝙸𝙳𝙾 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾(𝙰) 𝙳𝙴 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['desbanearuser', 'desbanearusuario', 'desbanear'] 
handler.owner = true

export default handler
