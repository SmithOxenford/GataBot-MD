import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    money: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`).filter(v => v).join('\n').trim()
let cart = `🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐍 ⇢ ${premium ? '✅' : '❌'}\n${wm}\n\n👝 ⇢ ${name}\n${recursos}\n\n𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙼𝙰́𝚂 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂 𝚅𝙸𝚂𝙸𝚃𝙴 𝙴𝙻 𝙸𝙽𝚅𝙴𝙽𝚃𝙰𝚁𝙸𝙾`
await conn.sendFile(m.chat, gata, 'gata.jpg', cart, fkontak )
/*await conn.sendButton(m.chat, `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, `👝 ⇢ ${name}\n` + recursos + `\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTARIO*\n*TO SEE MORE RESOURCES VISIT THE INVENTORY*`, img5, [
['𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 | 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧𝙮 🎒', '/inventario'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace) */ 
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
