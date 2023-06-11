import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚂𝚄 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙰 😁\n🤖 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n${usedPrefix + command} 𝙴𝙻/𝙴𝙻𝙻𝙰 𝙼𝙴 𝚀𝚄𝙸𝙴𝚁𝙴?`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
if (json.success)
  
m.reply(`╭━〔 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 〕━⬣  
👻 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰: 
🧐 ${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:
😏 : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 

//conn.sendHydrated(m.chat, pre, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command} ${text}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m, null, m.mentionedJid ? {
//mentions: m.mentionedJid } : {}) 
}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
