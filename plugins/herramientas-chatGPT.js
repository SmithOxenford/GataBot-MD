import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽 𝙾 𝚄𝙽𝙰 𝙾𝚁𝙳𝙴𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃𝙶𝙿𝚃 💋\n\n❏ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 𝐃𝐄 𝐏𝐄𝐓𝐈𝐂𝐈𝐎𝐍𝐄𝐒 𝐘 𝐎𝐑𝐃𝐄𝐍𝐄𝐒 :\n❏ *${usedPrefix + command}* _Recomienda un top 10 de películas de acción_\n❏ *${usedPrefix + command}* _Codigo en JS para un juego de cartas_`    
try {
await conn.sendPresenceUpdate('composing', m.chat)
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `${lenguajeGB['smsAvisoFG']()}𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 ☹️`   
}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler