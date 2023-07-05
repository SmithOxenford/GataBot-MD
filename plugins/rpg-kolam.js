import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + '', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
//let wm = global.wm 

let peces = `🌊🌊 𝐏𝐈𝐒𝐂𝐈𝐍𝐀𝐒 𝐃𝐄 𝐏𝐄𝐂𝐄𝐒 🌊🌊
👤» *${name}*

╭━━━━━━━━━⬣ 
┃ 🌊 𝐏𝐈𝐒𝐂𝐈𝐍𝐀𝐒 𝐃𝐄 𝐏𝐄𝐂𝐄𝐒 🌊
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃ 🦈 𝚃𝙸𝙱𝚄𝚁𝙾́𝙽 » ${hiu}
┃ 🐟 𝙿𝙴𝚉 » ${ikan}
┃ 🐠 𝙳𝙾𝚁𝚈  » ${dory}
┃ 🐋 𝙾𝚁𝙲𝙰 » ${orca}
┃ 🐳 𝙱𝙰𝙻𝙻𝙴𝙽𝙰 » ${paus}
┃ 🦑 𝙲𝙰𝙻𝙰𝙼𝙰𝚁 » ${cumi}
┃ 🐙 𝙿𝚄𝙻𝙿𝙾 » ${gurita}
┃ 🐡 𝙿𝙴𝚉 𝙶𝙻𝙾𝙱𝙾 » ${buntal}
┃ 🦐 𝙲𝙰𝙼𝙰𝚁𝙾́𝙽 » ${udang}
┃ 🐬 𝙳𝙴𝙻𝙵𝙸́𝙽 » ${lumba}
┃ 🦞 𝙻𝙰𝙽𝙶𝙾𝚂𝚃𝙰 » ${lobster}
┃ 🦀 𝙲𝙰𝙽𝙶𝚁𝙴𝙹𝙾 » ${kepiting}
╰━━━━━━━━━⬣
🎏 𝐓𝐎𝐓𝐀𝐋 : ${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}`.trim()
conn.sendFile(m.chat, img5, 'gata.jpg', peces, m, dos.getRandom())
//await conn.sendButton(m.chat, wm, peces, img5, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, dos.getRandom())
//conn.sendButton(m.chat, peces, `${wm}`, [['Pasar', '#pasar']], m)
}
handler.help = ['kotakikan', 'kolam', 'kolamikan']
handler.tags = ['rpg']
handler.command = /^(picina|piscina|peces|kotak(ikan)?|kolam(ikan)?)$/i
export default handler 
handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
