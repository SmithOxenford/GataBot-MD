let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m) 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ${lenguajeGB['smsMalused']()}\n*${usedPrefix + command}* 59355555555`
if (text.includes('+')) throw  `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚃𝙾𝙳𝙾 𝙹𝚄𝙽𝚃𝙾 𝚂𝙸𝙽 𝙴𝙻 *+*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `ʜᴏʟᴀ﹗ ᴍᴇ ᴘʀᴇsᴇɴᴛ, sᴏʏ ᴍᴀᴋᴀɴᴀᴋʏ 🤖 ʏ sᴏʏ ᴜɴ ʙᴏᴛ ᴘᴀʀᴀ ᴡʜᴀᴛsᴀᴘᴘ, ᴜɴᴀ ᴘᴇʀsᴏɴᴀ ᴅᴇʟ ɢʀᴜᴘᴏ ᴜᴛɪʟɪᴢᴏ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ᴀɴ̃ᴀᴅɪʀᴛᴇ ᴀʟ ɢʀᴜᴘᴏ, ᴘᴇʀᴏ ɴᴏ ᴘᴜᴅᴇ ᴀɢʀᴇɢᴀʀᴛᴇ, ᴀsɪ ϙᴜᴇ ᴛᴇ ᴍᴀɴᴅᴏ ʟᴀ ɪɴᴠɪᴛᴀᴄɪᴏɴ ᴘᴀʀᴀ ϙᴜᴇ ᴛᴇ ᴀɢʀᴇɢᴜᴇs, ᴛᴇ ᴇsᴘᴇʀᴀᴍᴏs﹗\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`*@${who.split`@`[0]}*\n*Enviando invitacion a su privado...*`) 

}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
//import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
/*const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m) 
try {
let _participants = participants.map(user => user.jid)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [
v,
await conn.onWhatsApp(v + '@s.whatsapp.net')
])
)).filter(v => v[1]).map(v => v[0] + '@c.us')
let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `${lenguajeGB['smsAddB1']()}`
m.reply(teks, null, {
mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply(`${lenguajeGB['smsAddB2']()}`)}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler*/
