import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://neko-love.xyz/api/v1/slap')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} 𝙻𝙴 𝙳𝙸𝙾́ 𝚄𝙽𝙰 𝙱𝙾𝙵𝙴𝚃𝙰𝙳𝙰 👋 𝙰 ${m.mentionedJid.map((user)=>(user === m.sender)? '𝙰𝙻𝙶𝚄𝙸𝙴𝙽 ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.help = ['slap']
handler.tags = ['General']
handler.command = /^slap|bofetada|manotada|abofetear/i
export default handler
