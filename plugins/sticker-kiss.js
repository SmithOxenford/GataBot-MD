import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} 𝙴𝚂𝚃𝙰́ 𝙱𝙴𝚂𝙰𝙽𝙳𝙾 💋 𝙰 ${m.mentionedJid.map((user)=>(user === m.sender)? '𝙰𝙻𝙶𝚄𝙸𝙴𝙽 ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(kiss|skiss|kis|besos|beso|besar|besando)$/i
export default handler
