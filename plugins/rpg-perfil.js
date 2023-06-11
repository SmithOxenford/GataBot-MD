import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = ''
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) { 

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `┃ 𝙽𝙾𝙼𝙱𝚁𝙴 ${name} ${user.registered === true ? 'ᴳᴬᴬᴬ' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙽𝚄𝙼𝙴𝚁𝙾 ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙴𝙽𝙻𝙰𝙲𝙴 wa.me/${who.split`@`[0]}${registered ?'\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 𝙴𝙳𝙰𝙳 ' + age + ' *años*' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 *${limit}* 𝙳𝙴 𝚄𝚂𝙾𝚂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾(𝙰) ${registered ? '✅': '❎'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 ${prem ? '✅' : '❎'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴
┃ *${sn}*`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkontak, false, { mentions: [who]})
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
