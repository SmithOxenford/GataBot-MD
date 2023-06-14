let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 🔖 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 🔖 〕━⬣
┃ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾(𝙰): 
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${global.db.data.users[who].limit} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎
╰━━━━〔 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 〕━━━⬣\n\n💎 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 𝐂𝐎𝐍 𝐄𝐗𝐏 💎
${usedPrefix}buy 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳
${usedPrefix}buyall 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳

💎 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 𝐂𝐎𝐍 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐂𝐎𝐈𝐍𝐒 💎
${usedPrefix}buy2 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳
${usedPrefix}buyall2 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳`)

/*let d = `
💎 𝙲𝙾𝙼𝙿𝚁𝙰𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙲𝙾𝙽 𝙴𝚇𝙿 💎
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON GATACOINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`
conn.sendButton(m.chat, d, wm, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu']
], m)
await conn.sendHydrated(m.chat, d, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu']
], m,)*/
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
