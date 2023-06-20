import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
let full = /f$/i.test(command)
if (!args[0]) return conn.reply(m.chat, '𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝚄𝙽 𝚄𝚁𝙻 𝙳𝙴 𝙻𝙰 𝙿𝙰́𝙶𝙸𝙽𝙰 𝙰 𝙻𝙰 𝚀𝚄𝙴 𝚂𝙴 𝙻𝙴 𝚃𝙾𝙼𝙰𝚁𝙰́ 𝙲𝙰𝙿𝚃𝚄𝚁𝙰 🔎', m)
let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
conn.sendFile(m.chat, ss, 'error.png', url, m)
}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.money = 40
export default handler
