let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users

let caption = `⚠️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐒 ⚠️ 
*╭•·–––––––––––––––––––·•*
│ 𝚃𝙾𝚃𝙰𝙻 : ${adv.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 : ${adv ? '\n' + adv.map(([jid, user], i) => `
│
│ *${i + 1}.* ${conn.getName(jid)  == undefined ? '_Sin Usuarios_' : conn.getName(jid) + ` *(${user.warn}/4)*`}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `⚠️ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⇢ ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^(listaadv|listadv|adv|advlist|advlista)$/i 

export default handler
