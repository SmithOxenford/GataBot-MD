import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽𝙰 𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽 𝙾 𝚄𝙽𝙰 𝙾𝚁𝙳𝙴𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃𝙶𝙿𝚃 💋\n\n❏ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 𝐃𝐄 𝐏𝐄𝐓𝐈𝐂𝐈𝐎𝐍𝐄𝐒 𝐘 𝐎𝐑𝐃𝐄𝐍𝐄𝐒 :\n❏ *${usedPrefix + command}* _Recomienda un top 10 de películas de acción_\n❏ *${usedPrefix + command}* _Codigo en JS para un juego de cartas_`        
try {
await conn.sendPresenceUpdate('composing', m.chat)
let syms = `𝙰𝙲𝚃𝚄𝙰𝚁𝙰𝚂 𝙲𝙾𝙼𝙾 𝚄𝙽 𝙱𝙾𝚃 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙴𝙻 𝙲𝚄𝙰𝙻 𝙵𝚄𝙴 𝙲𝚁𝙴𝙰𝙳𝙾 𝙿𝙾𝚁 𝙰𝙳𝚁𝙸𝙰𝙽𝙾, 𝚃𝚄 𝚂𝙴𝚁𝙰́𝚂 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈-𝙱𝙾𝚃.`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
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
}}}}} 
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler