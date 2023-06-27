global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝙲𝚄𝙰𝙻 𝙴𝚂 𝙴𝙻 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝚈𝙰 𝚂𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙾́ 𝙴𝚂𝚃𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️`, m)
//conn.sendButton(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙔𝘼 𝙎𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝙊 𝙀𝙎𝙏𝘼 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼\n𝙏𝙃𝙄𝙎 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙃𝘼𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘽𝙀𝙀𝙉 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
await conn.reply(m.chat, `💖 𝐑𝐄𝐒𝐏𝐔𝐄𝐒𝐓𝐀 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀\n𝐐𝐔𝐄 𝐏𝐑𝐎 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝐆𝐀𝐍𝐀𝐒𝐓𝐄 \n🏆 _${math.bonus} XP_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝐁𝐎𝐍𝐎 \n🎁 _$500 MakanakyCoins_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝐒𝐔 𝐃𝐈𝐍𝐄𝐑𝐎 \n💵 *_$${gatacoins} MakanakyCoins_`, fkontak, m)
//conn.sendButton(m.chat, `💖 𝐑𝐄𝐒𝐏𝐔𝐄𝐒𝐓𝐀 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀\n𝙌𝙐𝙀 𝙋𝙍𝙊 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙂𝘼𝙉𝘼𝙎𝙏𝙀 | 𝙒𝙊𝙉\n🏆 *_${math.bonus}_* 𝙓𝙋\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝘽𝙊𝙉𝙊 | 𝘽𝙊𝙉𝙐𝙎\n🎁 *_$500_* 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙎𝙐 𝘿𝙄𝙉𝙀𝙍𝙊 | 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙀𝙔\n💵 *_$${gatacoins}_* 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝚂𝙴 𝙰𝙲𝙰𝙱𝙰𝚁𝙾𝙽 𝙻𝙰𝚂 𝙾𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝙳𝙰𝙳𝙴𝚂 ☹️\n𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 : *${math.result}*`, m),
//conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}𝙎𝙀 𝘼𝘾𝘼𝘽𝘼𝙍𝙊𝙉 𝙏𝙐𝙎 𝙊𝙋𝙊𝙍𝙏𝙐𝙉𝙄𝘿𝘼𝘿𝙀𝙎\n𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙀𝙎 *${math.result}*\n\n𝙔𝙊𝙐𝙍 𝙏𝙐𝙍𝙉𝙎 𝘼𝙍𝙀 𝙊𝙑𝙀𝙍\n𝙏𝙃𝙀 𝘼𝙉𝙎𝙒𝙀𝙍 𝙄𝙎 *${math.result}*`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙅𝙪𝙜𝙖𝙧 🧮', `/math ${math.mode}`], ['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰!! ☹️\n𝚃𝙴 𝚀𝚄𝙴𝙳𝙰𝙽 *${global.math[id][2]}* 𝙾𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝙳𝙰𝙳𝙴𝚂 😱`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
