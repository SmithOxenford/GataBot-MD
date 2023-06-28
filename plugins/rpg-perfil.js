import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = './media/menus/Menu1.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`┃ 𝐍𝐎𝐌𝐁𝐑𝐄 : 
┃ ${name} ${user.registered === true ? '' : 'ᴳᴬᴬᴬ'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐍𝐔́𝐌𝐄𝐑𝐎 : 
┃ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐄𝐍𝐋𝐀𝐂𝐄 : 
┃ wa.me/${who.split`@`[0]}${registered ?'\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 𝐄𝐃𝐀𝐃 ' + age + 'Años' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 : 
┃ ${limit} de usos
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎(𝐀) : 
┃ _${registered ? 'Registrado ✅': 'No Registrado ❎'}_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 : 
┃ _${prem ? 'Si Premium ✅' : 'No Premium ❎'}_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝐍𝐔́𝐌𝐄𝐑𝐎 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄 :
┃ ${sn}`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', str, fkontak, false, { contextInfo: { mentionedJid }}) 
  }
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
