import MessageType from '@adiwajshing/baileys'
let pajak = 0 
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝙳𝙴𝙱𝙴 𝙳𝙴 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚁 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂`
if (isNaN(txt)) throw `${mg}𝚂𝙸𝙽 𝚂𝙸𝙼𝙱𝙾𝙻𝙾𝚂, 𝚂𝙾𝙻𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂`
let gatacoins = parseInt(txt)
let money = gatacoins
let pjk = Math.ceil(gatacoins * pajak)
money -= pjk
if (money < 1) throw `${mg}𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂 𝙴𝚂 *1*`
let users = global.db.data.users
users[who].money -= gatacoins

conn.sendHydrated(m.chat, `╭━━━[ 🤖 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐂𝐎𝐈𝐍𝐒 🤖 ]━━━⬣\n┃\n┃ღ 𝙿𝙰𝚁𝙰 :\n┃ღ *_${text}_*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾́ :\n┃ღ *_${gatacoins} MakanakyCoin(s)_ \n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['gatacoins']
handler.command = ['eliminargatacoins', 'eliminargata', 'eliminarcoins', 'quitargatacoins', 'quitargata', 'quitarcoins', 'delgatacoins', 'delgata', 'delcoins'] 
handler.group = true
handler.rowner = true
export default handler 
