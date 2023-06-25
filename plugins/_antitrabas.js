//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `¡𝙴𝙻 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 @${m.sender.split("@")[0]} 𝙰𝙲𝙰𝙱𝙰 𝙳𝙴 𝙴𝙽𝚅𝙸𝙰𝚁 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝚀𝚄𝙴 𝙲𝙾𝙽𝚃𝙸𝙴𝙽𝙴 𝙼𝚄𝙲𝙷𝙾𝚂 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂! 😐`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `[ ! ] 𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙲𝙾𝙽𝚃𝙸𝙴𝙽𝙴 𝙼𝚄𝙲𝙷𝙾𝚂 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂 [ ! ]\n`, `${isBotAdmin ? '' : '𝙽𝙾 𝚂𝙾𝚈 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙷𝙰𝙲𝙴𝚁 𝙽𝙰𝙳𝙰 😐'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'[ ᴀᴘᴀɢᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ ]'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝙼𝙰𝚁𝙲𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾 ✓\n${"\n".repeat(400)}\n• 𝐄𝐋 𝐍𝐔́𝐌𝐄𝐑𝐎 : wa.me/${m.sender.split("@")[0]}\n• 𝐀𝐋𝐈́𝐀𝐒 : ${name}\n𝙰𝙲𝙰𝙱𝙰 𝙳𝙴 𝙴𝙽𝚅𝙸𝙰𝚁 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝚀𝚄𝙴 𝙲𝙾𝙽𝚃𝙸𝙴𝙽𝙴 𝙼𝚄𝙲𝙷𝙾𝚂 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝙾𝙲𝙰𝚂𝙸𝙾𝙽𝙰𝚁 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝙽 𝙻𝙾𝚂 𝙳𝙸𝚂𝙿𝙾𝚂𝙸𝚃𝙸𝚅𝙾𝚂 👿`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙰𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽, 𝙼𝙸 𝙳𝚄𝙴𝙽̃𝙾 𝚃𝙸𝙴𝙽𝙴 𝚀𝚄𝙴 𝙴𝙽𝙲𝙴𝙽𝙳𝙴𝚁 𝙴𝙻 𝙼𝙾𝙳𝙾 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾!')
    }
    return !0
} 
