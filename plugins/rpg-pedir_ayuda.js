let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}
let pesan = args.join` `
let oi = `ღ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 : ${pesan}`
let teks = `╭━〔 𝐏𝐈𝐃𝐈𝐄𝐍𝐃𝐎 𝐀𝐘𝐔𝐃𝐀 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃➥ @${mem.id.split('@')[0]}\n`}
teks += `╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(pedirayuda)$/i
handler.group = true
export default handler
