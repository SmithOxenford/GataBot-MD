import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + '', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰 `, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `${fg}𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾́ 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 ☹️, 𝙳𝙴𝙱𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 🤗`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}𝚄𝚂𝚃𝙴𝙳 𝙼𝙸𝚂𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙿𝙰𝚁𝙴𝙹𝙰 🙂`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}𝚈𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝚂𝙴𝚁 𝚃𝚄 𝙿𝙰𝚁𝙴𝙹𝙰 😹`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙲𝙴𝙿𝚃𝙰𝚁 𝚂𝙸 𝙽𝙰𝙳𝙸𝙴 𝚂𝙴 𝙷𝙰 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝙳𝙾, 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝚃𝙴 𝙲𝙾𝙽 *${tu}* 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙳𝙸𝙶𝙰 𝚂𝙸 𝚃𝙴 𝙰𝙲𝙴𝙿𝚃𝙰 𝙾 𝚃𝙴 𝚁𝙴𝙲𝙷𝙰𝚉𝙰`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.sendButton(m.chat, `🥳 𝙵𝙴𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙸𝙾𝙽𝙴𝚂! *${tu}*\n✅ 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙴𝚂𝚃𝙰𝙽 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾𝙽\n\n𝚀𝚄𝙴 𝙳𝚄𝚁𝙴 𝙿𝙾𝚁 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 𝚂𝚄 𝙰𝙼𝙾𝚁 𝚈 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳 💖😁` + wm, img5, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(aceptar|acepto|accept)$/i
handler.group = true
export default handler
