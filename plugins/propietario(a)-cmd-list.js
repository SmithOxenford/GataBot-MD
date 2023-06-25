let handler = async (m, { conn }) => {
conn.reply(m.chat, `
< 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎/𝐓𝐄𝐗𝐓𝐎𝐒 𝐀𝐒𝐈𝐆𝐍𝐀𝐃𝐎𝐒 >

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n𝐂𝐎𝐃𝐈𝐆𝐎 : ${value.locked ? `_(𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘)_ ${key}` : key}\n𝐂𝐎𝐌𝐀𝐍𝐃𝐎/𝐓𝐄𝐗𝐓𝐎𝐒 ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
