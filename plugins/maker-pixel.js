let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '🌀 𝙰𝚀𝚄𝙸́ 𝙴𝚂𝚃𝙰 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙸𝚇𝙴𝙻𝙰𝙳𝙰!!\n𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(pixel|pixelar|difuminar)$/i
export default handler
