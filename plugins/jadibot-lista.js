async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '🤖 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐒𝐔𝐁 𝐁𝐎𝐓𝐒 (𝐒𝐄𝐑𝐁𝐎𝐓/𝐉𝐀𝐃𝐈𝐁𝐎𝐓) 𝐀𝐂𝐓𝐈𝐕𝐎𝐒 🤖\n\n🙌 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙻𝙾 𝙿𝙰𝚁𝙰 𝙿𝙴𝙳𝙸𝚁 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰𝙽 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾\n\n❕ 𝚂𝙸 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰𝙿𝙰𝚁𝙴𝙲𝙴 𝙴𝙽 𝙱𝙻𝙰𝙽𝙲𝙾 𝚂𝙸𝙶𝙽𝙸𝙵𝙸𝙲𝙰 𝚀𝚄𝙴 𝙽𝙾 𝙰𝙷𝙸 𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂\n\n❗ 𝙲𝙰𝙳𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚂𝚄𝙱 𝙱𝙾𝚃 𝙼𝙰𝙽𝙴𝙹𝙰 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾́𝙽 𝙲𝙾𝙼𝙾 𝚀𝚄𝙸𝙴𝚁, 𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 𝙽𝙾 𝚂𝙴 𝙷𝙰𝙲𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙰𝙱𝙻𝙴')
await m.reply(users.map(v => '🐈 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
