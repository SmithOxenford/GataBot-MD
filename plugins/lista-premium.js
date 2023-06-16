let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 :  
*╭•·–––––––––––––––––––·•*
│ 𝚃𝙾𝚃𝙰𝙻 : ${prem.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? '_Sin Usuarios_' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌 ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ 𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐀𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ✦': '✦ 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐏𝐀𝐒𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ✦'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
