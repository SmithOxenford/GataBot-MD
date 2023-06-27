let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['ϙᴜᴇ ᴘʀᴏ 😎 ʜᴀs ᴍɪɴᴀᴅᴏ',
'🌟✨ ɢᴇɴɪᴀʟ! ᴏʙᴛɪᴇɴᴇs',
'ᴡᴏᴡ! ᴇʀᴇs ᴜɴ(ᴀ) ɢʀᴀɴ ᴍɪɴᴇʀᴏ(ᴀ) ⛏️ ᴏʙᴛɪᴇɴᴇs',
'ʜᴀs ᴍɪɴᴀᴅᴏ! ⛏️',
'😲 ʟᴏɢʀᴀsᴛᴇ ᴍɪɴᴀʀ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ',
'ᴛᴜs ɪɴɢʀᴇsᴏs sᴜʙɪʀᴀɴ ɢʀᴀᴄɪᴀs ᴀ ϙᴜᴇ ᴍɪɴᴀsᴛᴇ',
'⛏️⛏️⛏️⛏️⛏️ ᴍɪɴᴀɴᴅᴏ',
'🤩 sɪɪ! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs',
'ʟᴀ ᴍɪɴᴀʀɪᴀ ᴇsᴛᴀ ᴅᴇ ᴛᴜ ʟᴀᴅᴏ, ᴘᴏʀ ᴇʟʟᴏ ᴏʙᴛɪᴇɴᴇs',
'😻 ʟᴀ sᴜᴇʀᴛᴇ ᴅᴇ ᴍɪɴᴀʀ',
'♻️ ᴛᴜ ᴍɪsɪᴏɴ sᴇ ʜᴀ ᴄᴜᴍᴘʟɪᴅᴏ, ʟᴏɢʀᴀsᴛᴇ ᴍɪɴᴀʀ',
'⛏️ ʟᴀ ᴍɪɴᴇʀɪᴀ ᴛᴇ ʜᴀ ʙᴇɴᴇғɪᴄɪᴀᴅᴏ ᴄᴏɴ',
'🛣️ ʜᴀs ᴇɴᴄᴏɴᴛʀᴀᴅᴏ ᴜɴ ʟᴜɢᴀʀ ʏ ᴘᴏʀ ᴍɪɴᴀʀ ᴅɪᴄʜᴏ ʟᴜɢᴀʀ ᴏʙᴛɪᴇɴᴇs',
'👾 ɢʀᴀᴄɪᴀs ᴀ ϙᴜᴇ ʜᴀs ᴍɪɴᴀᴅᴏ ᴛᴜs ɪɴɢʀᴇsᴏs sᴜᴍᴀɴ',
'ғᴇʟɪᴄɪᴅᴀᴅᴇs! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs','⛏️⛏️⛏️ ᴏʙᴛɪᴇɴᴇs'])}`

let pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6'

let kyubi = `${pickRandom([0, 1, 3, 1, 2])}` * 1
let kyubipremium = `${pickRandom([2, 3, 5, 9, 10, 7])}` * 1

let diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1
let diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1

let tiketcoin = `${pickRandom([1, 0, 0, 1, 0, 0, 2])}` * 1
let tiketcoinpremium = `${pickRandom([2, 3, 4, 5, 2, 3, 3])}` * 1

const recompensas = {	
  kyubi: premium ? kyubipremium : kyubi,
  diamond: premium ? diamondpremium : diamond,
  tiketcoin: premium ? tiketcoinpremium : tiketcoin,
}
//let xp = Math.floor(Math.random() * 2000)
let limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1
let limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1

let time = user.lastdiamantes + 900000 //15 min
if (new Date - user.lastdiamantes < 900000) return await conn.reply(m.chat, `⏱️ 𝚅𝚄𝙴𝙻𝚅𝙰 𝙴𝙽 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁 𝙼𝙸𝙽𝙰𝙽𝙳𝙾 ${global.rpgshopp.emoticon('limit')}⛏️`, fkontak,  m)
user.limit += premium ? limitpremium : limit  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `${premium ? '🎟️ 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 𝐏𝐑𝐄𝐌𝐈𝐔𝐌' : '🆓 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 𝐆𝐑𝐀𝐓𝐈𝐒'}\n${minar}\n${limit} ${global.rpgshop.emoticon('limit')}\n\n🍁 𝐁𝐎𝐍𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 🍁\n\n${texto}\n\n🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌 ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, pp, 'gata.jpg', gat, fkontak)
/*conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`],
['𝙈𝙞𝙣𝙖𝙧 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨 🐈', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `.menu`]
], m,)*/
user.lastdiamantes = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
