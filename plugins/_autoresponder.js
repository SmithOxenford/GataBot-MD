import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝚃𝙷𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 𝙱𝙾𝚃', body: '𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰𝙽𝙲𝙷𝙴𝚉', sourceUrl: ``, thumbnail: imagen2}}})}
    
return !0 }
export default handler
