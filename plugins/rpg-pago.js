import fetch from 'node-fetch' //IGNOREN ESTE CÓDIGO JAJAJ
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let users = m.sender.split`@`[0]
if ( users == 573136855110 || users == 584121083781 || users == 50689823726 || users == 51914725037 || users == 525626976877 || users == 5491173694367 || users == 527751211863 || users == 51992865231) {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let limit = `${pickRandom([15, 23, 29, 36, 42, 50, 59, 65, 70, 83])}` * 1
let limitpremium = `${pickRandom([45, 59, 70, 88, 100, 120, 135, 143, 149, 150])}` * 1

let emas = `${pickRandom([5, 8, 12, 16, 19, 22, 25, 27, 29, 30])}` * 1
let emaspremium = `${pickRandom([14, 16, 18, 22, 27, 29, 33, 36, 38, 40])}` * 1

let joincount = `${pickRandom([5, 9, 15, 16, 25, 28, 30])}` * 1
let joincountpremium = `${pickRandom([12, 19, 25, 34, 44, 50])}` * 1

let eleksirb = `${pickRandom([20, 30, 39, 50, 55, 59, 60])}` * 1
let eleksirbpremium = `${pickRandom([35, 55, 80, 120, 150, 170])}` * 1

let gold = `${pickRandom([4, 7, 9, 14, 18])}` * 1
let goldpremium = `${pickRandom([9, 18, 26, 38, 45])}` * 1

let berlian = `${pickRandom([5, 7, 9, 11, 15, 19, 26, 28, 29, 30])}` * 1
let berlianpremium = `${pickRandom([16, 22, 31, 39, 42, 53, 65, 67, 69, 70])}` * 1

let kardus = `${pickRandom([5, 8, 10, 17, 25, 39, 46, 48, 49, 50])}` * 1
let karduspremium = `${pickRandom([17, 30, 49, 55, 58, 59, 73, 79, 81, 89])}` * 1

let pet = `${pickRandom([4, 4, 4, 6, 6, 7, 7, 2, 2, 2])}` * 1
let petpremium = `${pickRandom([7, 7, 7, 12, 12, 12, 18, 18, 18, 20])}` * 1

let gardenboxs = `${pickRandom([3, 3, 3, 3, 4, 4, 2, 2, 2, 5])}` * 1
let gardenboxspremium = `${pickRandom([6, 6, 8, 8, 10, 10, 12, 12, 12, 15])}` * 1

let legendary = `${pickRandom([2, 2, 2, 2, 2, 3, 3, 4, 4, 4])}` * 1
let legendarypremium = `${pickRandom([4, 4, 4, 6, 6, 6, 7, 7, 9, 10])}` * 1
 
const recompensas = {
  limit: premium ? limitpremium : limit,
  emas: premium ? emaspremium : emas,
  joincount: premium ? joincountpremium : joincount,
  eleksirb: premium ? eleksirbpremium : eleksirb,
  gold: premium ? goldpremium : gold,
  berlian: premium ? berlianpremium : berlian,
  kardus: premium ? karduspremium : kardus,
  pet: premium ? petpremium : pet,
  gardenboxs: premium ? gardenboxspremium : gardenboxs,
  mythic: premium ? legendarypremium : legendary,
}

let time = user.lastpago + 432000000 //432000000 5 dias
if (new Date - user.lastpago < 432000000) return await conn.sendButton(m.chat, `💰 𝚂𝚄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙿𝙰𝙶𝙾 𝙴𝚂 𝙴𝙽 ...`, wm + `\n\n𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 :\n${clockString(time - new Date() * 1)}`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`}
let text = `
╭━━💰━💰━💰━━⬣
┃ ✅ 𝐏𝐀𝐆𝐎 𝐀𝐔𝐓𝐎𝐑𝐈𝐙𝐀𝐃𝐎
┃ ✅ 𝐏𝐀𝐆𝐎 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐃𝐎
╰━━💰━💰━💰━━⬣`

await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, gata.getRandom(), [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m, enlace)  
user.lastpago = new Date * 1
}else{
m.reply('```𝚄𝚂𝚃𝙴𝙳 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙰𝚄𝚃𝙾𝚁𝙸𝚉𝙰𝙲𝙸𝙾́𝙽 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾.```')}
}
handler.command = ['pgg'] 
handler.level = 10
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃⇢ ', ye, ' 🗓️ 𝙰𝙽̃𝙾𝚂 :\n', '┃⇢ ', mo, ' ⛅ 𝙼𝙴𝚂 :\n', '┃⇢ ', d, ' ☀️ 𝙳𝙸́𝙰𝚂 :\n', '┃⇢ ', h, ' ⏰ 𝙷𝙾𝚁𝙰𝚂  :\n', '┃⇢ ', m, ' 🕐 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 :\n', '┃⇢ ', s, ' ⏱️ 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 :'].map(v => v.toString().padStart(2, 0)).join('')
}
