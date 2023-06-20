let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${pesan}`
let teks = `⺀𝐈 𝐍 𝐕 𝐎 𝐂 𝐀 𝐍 𝐃 𝐎 - 𝐆 𝐑 𝐔 𝐏 𝐎⺀\n\n❏ ${oi}\n\n❏ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂: \n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `*└* 𝙼 𝙰 𝙺 𝙰 𝙽 𝙰 𝙺 𝚈 - 🤖`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
