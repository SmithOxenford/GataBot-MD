let handler = async (m, { conn }) => {
let ban = global.db.data.chats    
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    
let caption = `╭•·––| 💬 𝐂𝐇𝐀𝐓𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒 💬 |––·•
│ 𝚃𝙾𝚃𝙰𝙻 : ${chats.length} 𝙲𝙷𝙰𝚃𝚂 : ${chats ? '\n│\n' + chats.map(([jid], i) =>`
│ ${i + 1}. ${conn.getName(jid) == undefined ? '_Sin Chats Baneados_' : `_Chat baneado_`}
│ ${jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^chat(s)?baneado(s)?|list(a)?chat(s)?|list(a)?ban(chat(s)?)?$/i

export default handler
