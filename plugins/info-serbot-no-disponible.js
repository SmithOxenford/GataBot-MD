import fs from 'fs'
//import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let pp = 'https://i.imgur.com/WwxBm8o.jpg' //'./media/menus/Menu1.jpg'
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//try {
//pp = await conn.getProfilePicture(who)
//} catch (e) {

//} finally { }
  await m.reply(`╰⊱⚠️⊱ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 ⊱⚠️⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let text = `
𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 *#jadibot #bots #serbot #subbot #getcode*. 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 𝙴𝙽 ${gt}`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖',
body: '𝙽𝙾 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 ❌',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})  
  
  let info = `𝚈𝙰 𝚀𝚄𝙴 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴 𝙴𝙻 *#serbot*, 𝙰𝙷𝙾𝚁𝙰 𝙿𝙾𝙳𝚁𝙰́𝚂 𝚄𝙽𝙸𝚁 𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 𝙰 𝚃𝚄́ 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾\n*#botemporal o #bottemporal*
  `.trim()
  
  await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentasgb'],
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)
  
  //await conn.sendButton(m.chat, `Infórmate sobre las Novedades y recuerda tener la última versión.\nFind out about what's new and remember to have the latest version.`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', /${command}], ['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 2 🔄', /${command}]], m)
}
handler.command = /^(yafunka:3)/i
export default handler
