let handler = async(m, { conn, command }) => {

let text = `📚 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 @${m.sender.split`@`[0]} 𝙷𝙰 𝙴𝙼𝙿𝙴𝚉𝙰𝙳𝙾 𝚄𝙽𝙰 𝚁𝙴𝚄𝙽𝙸𝙾́𝙽 𝚈 𝙿𝙾𝚁 𝙴𝚂𝙾 𝚂𝙴 𝚃𝙴 𝙷𝙰 𝙼𝙰𝙽𝙳𝙰𝙳𝙾 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙳𝙸𝚁𝙸𝙶𝙸𝚁𝚂𝙴 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚂𝚃𝙰𝙵𝙵 𝙻𝙾 𝙼𝙰́𝚂 𝙿𝚁𝙾𝙽𝚃𝙾 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚈𝙰 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝚃𝚁𝙰𝚃𝙰𝚁𝚂𝙴 𝙳𝙴 𝚄𝙽 𝙰𝚂𝚄𝙽𝚃𝙾 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴.

𝐒𝐓𝐀𝐅𝐅`
m.reply('🗓️ 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝚁𝙴𝚄𝙽𝙸𝙾́𝙽 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙾𝚆𝙽𝙴𝚁𝚂')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
