import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${week}, ${date}\`\`\`
⎔ ${lenguajeGB['smsTotalUsers']()} ➺ _${Object.keys(global.db.data.users).length}_ 
⎔ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 » ${rtotalreg}/${totalreg}
⎔ ${lenguajeGB['smsTime']()} ➺ _${time}_    
⎔ ${lenguajeGB['smsUptime']()} ➺ _${uptime}_ 
⎔ ${lenguajeGB['smsVersion']()} ➺ _${vs}_
⎔ ${lenguajeGB['smsMode']()} ➺ _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
⎔ ${lenguajeGB['smsBanChats']()} ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
⎔ ${lenguajeGB['smsBanUsers']()} ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_

✨ ◜𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎◞ ✨
⊜ 𝚃𝙸𝙿𝙾 𝙳𝙴 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 *»* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
⊜ 𝙼𝙸 𝙴𝚂𝚃𝙰𝙳𝙾 *»* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
⊜ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 *»* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
⊜ ${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} » ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}

⊜ ${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} » ${role}
⊜ ${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} » ${emoji} || ${user.exp - min}/${xp}
⊜ ${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
⊜ 𝙿𝙰𝚂𝙰𝚃𝙸𝙴𝙼𝙿𝙾(𝚂) ➺ ${user.pasatiempo === 0 ? '_Sin Registro_' : user.pasatiempo + '\n'}

⊜ 𝙴𝚇𝙿𝙴𝚁𝙴𝙽𝙲𝙸𝙰 *➟* ${exp} ⚡
⊜ 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 *➟* ${limit} 💎
⊜ 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂 *➟* ${money} 🤖
⊜ 𝚃𝙾𝙺𝙴𝙽𝚂 *➟* ${joincount} 🪙 
${readMore}
*╭━*〔 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐁𝐎𝐓 〕*⬣*
┃💫➺ _${usedPrefix}cuentasgb_
┃💫➺ _${usedPrefix}grupos_
┃💫➺ _${usedPrefix}donar | donate_
┃💫➺ _${usedPrefix}listagrupos | grouplist_
┃💫➺ _${usedPrefix}estado | status_
┃💫➺ _${usedPrefix}infobot_
┃💫➺ _${usedPrefix}instalarbot | installbot_
┃💫➺ _${usedPrefix}creadora | owner_
┃💫➺ _${usedPrefix}velocidad | ping_
┃💫➺ _Bot_ 
┃💫➺ _términos y condiciones_
*╰━━━━━━━━━━━━⬣*

*╭━*〔 𝐅𝐔𝐍𝐂𝐈𝐎́𝐍 𝐒𝐔𝐁 𝐁𝐎𝐓 🤖 〕*━⬣*
┃ ¡𝚈𝙰 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚃𝚄
┃ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💻 _${usedPrefix}serbot | jadibot_
┃💻 _${usedPrefix}bots | listjadibots_
┃💻 _${usedPrefix}detener | stop_
┃💻 _${usedPrefix}bcbot_
*╰━━━━━━━━━━━━⬣*

*╭━*〔 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 〕*━⬣*
┃ ¡𝚁𝙴𝙿𝙾𝚁𝚃𝙰 𝙲𝙾𝙽 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙷𝙰𝙱𝙴𝚁
┃ 𝙵𝙰𝙻𝙻𝙰𝚂 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽𝙰𝚁!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💌 _${usedPrefix}reporte *texto*_
┃ 💌 _${usedPrefix}report *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━*〔 𝐔́𝐍𝐄𝐓𝐄 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎 〕*━⬣*
┃ ¡𝚄𝙽𝙴 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}botemporal *enlace* *cantidad*_
┃🪅 _${usedPrefix}addbot *enlace* *cantidad*_
*╰━━━━━━━━━━━━⬣*

*╭━*〔 𝐒𝐄𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️ 〕*━⬣*
┃ ¡𝙲𝙾𝙽𝚅𝙸𝙴𝚁𝚃𝙴𝚃𝙴 𝙴𝙽 𝚄𝙽(𝙰) 
┃ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾(𝙰) 𝙿𝚁𝙴𝙼𝙸𝚄𝙼!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium | listprem_
┃🎟️ _${usedPrefix}pase premium_
┃🎟️ _${usedPrefix}pass premium_
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝐉𝐔𝐄𝐆𝐎𝐒 - 𝐌𝐔𝐋𝐓𝐈 𝐉𝐔𝐄𝐆𝐎𝐒 🎡 〕━⬣*
┃🎡➺ _${usedPrefix}mates | matemáticas | math_
┃🎡➺ _${usedPrefix}suerte *cara* | *cruz*_
┃🎡➺ _${usedPrefix}ppt *piedra : papel : tijera*_
┃🎡➺ _${usedPrefix}tictactoe | ttt *sala*_
┃🎡➺ _${usedPrefix}deltictactoe | delttt_
┃🎡➺ _${usedPrefix}topgays_
┃🎡➺ _${usedPrefix}topotakus_
┃🎡➺ _${usedPrefix}toppajer@s_
┃🎡➺ _${usedPrefix}topput@s_
┃🎡➺ _${usedPrefix}topintegrantes | topintegrante_
┃🎡➺ _${usedPrefix}toplagrasa | topgrasa_
┃🎡➺ _${usedPrefix}toppanafrescos | toppanafresco_
┃🎡➺ _${usedPrefix}topshiposters | topshipost_
┃🎡➺ _${usedPrefix}toplindos | toplind@s_
┃🎡➺ _${usedPrefix}topfamosos | topfamos@s_
┃🎡➺ _${usedPrefix}topparejas | top5parejas_
┃🎡➺ _${usedPrefix}gay | gay *@tag*_
┃🎡➺ _${usedPrefix}gay2 *nombre : @tag*_
┃🎡➺ _${usedPrefix}lesbiana *nombre : @tag*_
┃🎡➺ _${usedPrefix}manca *nombre : @tag*_
┃🎡➺ _${usedPrefix}manco *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajero *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajera *nombre : @tag*_
┃🎡➺ _${usedPrefix}puto *nombre : @tag*_
┃🎡➺ _${usedPrefix}puta *nombre : @tag*_
┃🎡➺ _${usedPrefix}rata *nombre : @tag*_
┃🎡➺ _${usedPrefix}love *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxear *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxxeame_
┃🎡➺ _${usedPrefix}pregunta *texto*_
┃🎡➺ _${usedPrefix}apostar | slot *cantidad*_
┃🎡➺ _${usedPrefix}formarpareja_
┃🎡➺ _${usedPrefix}dado_
┃🎡➺ _${usedPrefix}verdad_
┃🎡➺ _${usedPrefix}reto_
┃🎡➺ _${usedPrefix}multijuegos_
┃🎡➺ _${usedPrefix}juegos_
*╰━━━━━━━━━━━━⬣*

*╭━*〔 𝐈𝐀 🤖 〕*━⬣*
┃ ¡𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙾𝙲𝙰𝚂𝙸𝙾𝙽 𝙳𝙴
┃ 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝚁 𝙲𝙾𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 𝙱𝙾𝚃!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _${usedPrefix}simi | okgoogle *texto*_
┃🪄➺ _${usedPrefix}alexa | siri | cortana *texto*_
┃🪄➺ _${usedPrefix}simsimi | bixby *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━*[ 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 - 𝐂𝐇𝐀𝐓𝐒 ⚙️ ]*━━━⬣*
┃ ¡𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰 𝚂𝙸 𝙴𝚁𝙴𝚂 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾(𝙰)
┃ 𝚈/𝙾 𝙰𝙳𝙼𝙸𝙽!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝐆𝐑𝐔𝐏𝐎 - 𝐑𝐄𝐒𝐔𝐌𝐄𝐍 🧾 〕━⬣*
┃ ¡𝙰𝙷𝙾𝚁𝙰 𝙿𝚄𝙴𝙳𝙴 𝚅𝙴𝚁 𝙴𝙻 𝚁𝙴𝚂𝚄𝙼𝙴𝙽 
┃ 𝙳𝙴 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧾➺ _${usedPrefix}configuracion_
┃🧾➺ _${usedPrefix}settings_
┃🧾➺ _${usedPrefix}vergrupo_
*╰━━━━━━━━━━━━⬣*

*╭━[ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ]━⬣*
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🚀➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🚀➺ _${usedPrefix}tw |twdl | twitter *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}instagram *link video o imagen*_
┃🚀➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
┃🚀➺ _${usedPrefix}clima *país ciudad*_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}morse codificar *texto*_
┃🚀➺ _${usedPrefix}morse decodificar *morse*_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*

*╭━*[ 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 👤 ]*━⬣*
┃ ¡𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙲𝙾𝙽 𝙰𝙻𝙶𝚄𝙸𝙴𝙽
┃ 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙰𝙽𝙾𝙽𝙸𝙼𝙰!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤➺ _${usedPrefix}chatanonimo | anonimochat_
┃👤➺ _${usedPrefix}anonimoch_
┃👤➺ _${usedPrefix}start_
┃👤➺ _${usedPrefix}next_
┃👤➺ _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 - 𝐆𝐑𝐔𝐏𝐎𝐒 🌐 *]━⬣*
┃ ¡𝙼𝙴𝙹𝙾𝚁𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _${usedPrefix}add *numero*_
┃🌐➺ _${usedPrefix}sacar | ban | kick  *@tag*_
┃🌐➺ _${usedPrefix}grupo *abrir : cerrar*_
┃🌐➺ _${usedPrefix}group *open : close*_
┃🌐➺ _${usedPrefix}daradmin | promote *@tag*_
┃🌐➺ _${usedPrefix}quitar | demote *@tag*_
┃🌐➺ _${usedPrefix}banchat_
┃🌐➺ _${usedPrefix}unbanchat_
┃🌐➺ _${usedPrefix}banuser *@tag*_
┃🌐➺ _${usedPrefix}unbanuser *@tag*_
┃🌐➺ _${usedPrefix}admins *texto*_
┃🌐➺ _${usedPrefix}invocar *texto*_
┃🌐➺ _${usedPrefix}tagall *texto*_
┃🌐➺ _${usedPrefix}hidetag *texto*_
┃🌐➺ _${usedPrefix}infogrupo | infogroup_
┃🌐➺ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┃🌐➺ _${usedPrefix}advertencia *@tag*_
┃🌐➺ _${usedPrefix}deladvertencia *@tag*_
┃🌐➺ _${usedPrefix}delwarn *@tag*_
┃🌐➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃🌐➺ _${usedPrefix}sivotar | upvote_
┃🌐➺ _${usedPrefix}novotar | devote_
┃🌐➺ _${usedPrefix}vervotos | cekvoto_
┃🌐➺ _${usedPrefix}delvoto | deletevoto_
┃🌐➺ _${usedPrefix}enlace | link_
┃🌐➺ _${usedPrefix}newnombre | nuevonombre *texto*_
┃🌐➺ _${usedPrefix}newdesc | descripcion *texto*_
┃🌐➺ _${usedPrefix}setwelcome | bienvenida *texto*_
┃🌐➺ _${usedPrefix}setbye | despedida *texto*_
┃🌐➺ _${usedPrefix}nuevoenlace | resetlink_
┃🌐➺ _${usedPrefix}on_
┃🌐➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐏𝐀𝐑𝐄𝐉𝐀𝐒 💞 *]━━⬣*
┃ ¡𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝚃𝙴 𝙲𝙾𝙽 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 
┃ 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰𝙽 𝙿𝙰𝚁𝙴𝙹𝙰𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❤️➺ _${usedPrefix}listaparejas | listship_
┃❤️➺ _${usedPrefix}mipareja | mylove_
┃❤️➺ _${usedPrefix}pareja | couple *@tag*_
┃❤️➺ _${usedPrefix}aceptar | accept *@tag*_
┃❤️➺ _${usedPrefix}rechazar | decline *@tag*_
┃❤️➺ _${usedPrefix}terminar | finish *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐕𝐎𝐓𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐄𝐍 𝐆𝐑𝐔𝐏𝐎𝐒 📧 *]━⬣*
┃ ¡𝙰𝙷𝙾𝚁𝙰 𝙿𝚄𝙴𝙳𝙴𝚂 𝙷𝙰𝙲𝙴𝚁
┃ 𝚅𝙾𝚃𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃📧➺ _${usedPrefix}sivotar | upvote_
┃📧➺ _${usedPrefix}novotar | devote_
┃📧➺ _${usedPrefix}vervotos | cekvoto_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 🔞 *]━━⬣*
┃ ¡𝚅𝙸𝚂𝙸𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴 
┃ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙿𝙰𝚁𝙰 𝙰𝙳𝚄𝙻𝚃𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 🛰️ ]*━⬣*
┃ ¡𝙲𝙾𝙽𝚅𝙸𝙴𝚁𝚃𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴𝙽 𝙸𝙼𝙰𝙶𝙴𝙽 
┃ 𝙲𝚁𝙴𝙰 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️➺ _${usedPrefix}toimg | img | jpg *sticker*_
┃🛰️➺ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃🛰️➺ _${usedPrefix}tovn | vn *video o audio*_
┃🛰️➺ _${usedPrefix}tovideo *audio*_
┃🛰️➺ _${usedPrefix}tourl *video, imagen*_
┃🛰️➺ _${usedPrefix}toenlace  *video, imagen o audio*_
┃🛰️➺ _${usedPrefix}tts es *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐋𝐎𝐆𝐎𝐒 🔆 *]━━⬣*
┃ !𝙲𝚁𝙴𝙰 𝙻𝙾𝙶𝙾𝚂 𝙾 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰
┃ 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙻𝙾𝙶𝙾!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔆 _${usedPrefix}logos *efecto texto*_
┃🌅 _${usedPrefix}menulogos2_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 ⛺ *]━━⬣*
┃⛺ _${usedPrefix}simpcard *@tag*_
┃⛺ _${usedPrefix}hornycard *@tag*_
┃⛺ _${usedPrefix}lolice *@tag*_
┃⛺ _${usedPrefix}ytcomment *texto*_
┃⛺ _${usedPrefix}itssostupid_
┃⛺ _${usedPrefix}pixelar_
┃⛺ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐑𝐀𝐍𝐃𝐎𝐌 | 𝐀𝐍𝐈𝐌𝐄 🧩 *]━⬣*
┃🧩 _${usedPrefix}chica_
┃🧩 _${usedPrefix}chico_
┃🧩 _${usedPrefix}cristianoronaldo_
┃🧩 _${usedPrefix}messi_
┃🧩 _${usedPrefix}meme_
┃🧩 _${usedPrefix}meme2_
┃🧩 _${usedPrefix}itzy_
┃🧩 _${usedPrefix}blackpink_
┃🧩 _${usedPrefix}kpop *blackpink : exo : bts*_
┃🧩 _${usedPrefix}lolivid_
┃🧩 _${usedPrefix}loli_
┃🧩 _${usedPrefix}navidad_
┃🧩 _${usedPrefix}ppcouple_
┃🧩 _${usedPrefix}neko_
┃🧩 _${usedPrefix}waifu_
┃🧩 _${usedPrefix}akira_
┃🧩 _${usedPrefix}akiyama_
┃🧩 _${usedPrefix}anna_
┃🧩 _${usedPrefix}asuna_
┃🧩 _${usedPrefix}ayuzawa_
┃🧩 _${usedPrefix}boruto_
┃🧩 _${usedPrefix}chiho_
┃🧩 _${usedPrefix}chitoge_
┃🧩 _${usedPrefix}deidara_
┃🧩 _${usedPrefix}erza_
┃🧩 _${usedPrefix}elaina_
┃🧩 _${usedPrefix}eba_
┃🧩 _${usedPrefix}emilia_
┃🧩 _${usedPrefix}hestia_
┃🧩 _${usedPrefix}hinata_
┃🧩 _${usedPrefix}inori_
┃🧩 _${usedPrefix}isuzu_
┃🧩 _${usedPrefix}itachi_
┃🧩 _${usedPrefix}itori_
┃🧩 _${usedPrefix}kaga_
┃🧩 _${usedPrefix}kagura_
┃🧩 _${usedPrefix}kaori_
┃🧩 _${usedPrefix}keneki_
┃🧩 _${usedPrefix}kotori_
┃🧩 _${usedPrefix}kurumi_
┃🧩 _${usedPrefix}madara_
┃🧩 _${usedPrefix}mikasa_
┃🧩 _${usedPrefix}miku_
┃🧩 _${usedPrefix}minato_
┃🧩 _${usedPrefix}naruto_
┃🧩 _${usedPrefix}nezuko_
┃🧩 _${usedPrefix}sagiri_
┃🧩 _${usedPrefix}sasuke_
┃🧩 _${usedPrefix}sakura_
┃🧩 _${usedPrefix}cosplay_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐀𝐑 𝐀𝐔𝐃𝐈𝐎 🧰 *]━⬣*
┃ ¡𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂
┃ 𝙰𝙻 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰 _${usedPrefix}bass_
┃🧰 _${usedPrefix}blown_
┃🧰 _${usedPrefix}deep_
┃🧰 _${usedPrefix}earrape_
┃🧰 _${usedPrefix}fast_
┃🧰 _${usedPrefix}fat_
┃🧰 _${usedPrefix}nightcore_
┃🧰 _${usedPrefix}reverse_
┃🧰 _${usedPrefix}robot_
┃🧰 _${usedPrefix}slow_
┃🧰 _${usedPrefix}smooth_
┃🧰 _${usedPrefix}tupai_
*╰━━━━━━━━━━━━⬣*

*╭━━[* 𝐁𝐔́𝐒𝐐𝐔𝐄𝐃𝐀𝐒 🔍 *]━━⬣*
┃ ¡𝙱𝚄𝚂𝙲𝙰 𝙻𝙾 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙲𝙾𝙽 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙱𝙾𝚃!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍➺ _${usedPrefix}animeinfo *texto*_
┃🔍➺ _${usedPrefix}mangainfo *texto*_
┃🔍➺ _${usedPrefix}google *texto*_
┃🔍➺ _${usedPrefix}letra | lirik *texto*_
┃🔍➺ _${usedPrefix}ytsearch | yts *texto*_
┃🔍➺ _${usedPrefix}wiki | wikipedia *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐀𝐔𝐃𝐈𝐎𝐒 🔊 *]━━⬣*
┃ ¡𝚅𝙸𝚂𝙸𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 
┃ 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝙳𝙴 𝚄𝙽𝙰 𝙶𝚁𝙰𝙽 𝚅𝙰𝚁𝙸𝙴𝙳𝙰𝙳!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _${usedPrefix}audios_
*╰━━━━━━━━━━━━⬣*

*╭━━[* 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🛠️ *]━━⬣*
┃🛠️ _${usedPrefix}afk *motivo*_
┃🛠️ _${usedPrefix}acortar *url*_
┃🛠️ _${usedPrefix}calc *operacion math*_
┃🛠️ _${usedPrefix}del *respondre a mensaje del Bot*_
┃🛠️ _${usedPrefix}qrcode *texto*_
┃🛠️ _${usedPrefix}readmore *texto1|texto2*_
┃🛠️ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃🛠️ _${usedPrefix}styletext *texto*_
┃🛠️ _${usedPrefix}traducir *texto*_
┃🛠️➺ _${usedPrefix}morse codificar *texto*_
┃🛠️➺ _${usedPrefix}morse decodificar *morse*_
┃🛠️➺ _${usedPrefix}encuesta | poll *Motivo*_
┃🛠️➺ _${usedPrefix}horario_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐅𝐔𝐍𝐂𝐈𝐎́𝐍 𝐑𝐏𝐆 *]━━⬣*
┃ ¡𝙲𝙾𝙼𝙿𝚁𝙰 𝙰𝙳𝚀𝚄𝙸𝙴𝚁𝙴 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂 
┃ 𝙼𝙴𝙹𝙾𝚁𝙰 𝚃𝚄 𝙽𝙸𝚅𝙴𝙻 𝚈 𝚁𝙰𝙽𝙶𝙾!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚗️➺ _${usedPrefix}botemporal *enlace* *cantidad*_
┃⚗️➺ _${usedPrefix}addbot *enlace* *cantidad*_
┃⚗️➺ _${usedPrefix}pase premium_
┃⚗️➺ _${usedPrefix}pass premium_
┃⚗️➺ _${usedPrefix}listapremium | listprem_
┃⚗️➺ _${usedPrefix}transfer *tipo cantidad @tag*_
┃⚗️➺ _${usedPrefix}dar *tipo cantidad @tag*_
┃⚗️➺ _${usedPrefix}enviar *tipo cantidad @tag*_
┃⚗️➺ _${usedPrefix}balance_
┃⚗️➺ _${usedPrefix}cartera | wallet_
┃⚗️➺ _${usedPrefix}experiencia | exp_
┃⚗️➺ _${usedPrefix}top | lb | leaderboard_
┃⚗️➺ _${usedPrefix}nivel | level | lvl_
┃⚗️➺ _${usedPrefix}rol | rango_
┃⚗️➺ _${usedPrefix}inventario | inventory_
┃⚗️➺ _${usedPrefix}aventura | adventure_
┃⚗️➺ _${usedPrefix}caza | cazar | hunt_
┃⚗️➺ _${usedPrefix}pescar | fishing_
┃⚗️➺ _${usedPrefix}animales_
┃⚗️➺ _${usedPrefix}alimentos_
┃⚗️➺ _${usedPrefix}curar | heal_
┃⚗️➺ _${usedPrefix}buy_
┃⚗️➺ _${usedPrefix}sell_
┃⚗️➺ _${usedPrefix}verificar | registrar_
┃⚗️➺ _${usedPrefix}perfil | profile_
┃⚗️➺ _${usedPrefix}myns_
┃⚗️➺ _${usedPrefix}unreg *numero de serie*_
┃⚗️➺ _${usedPrefix}minardiamantes | minargemas_
┃⚗️➺ _${usedPrefix}minarcoins_
┃⚗️➺ _${usedPrefix}minarexperiencia | minarexp_
┃⚗️➺ _${usedPrefix}minar *:* minar2 *:* minar3_
┃⚗️➺ _${usedPrefix}reclamar | regalo | claim_
┃⚗️➺ _${usedPrefix}cadahora | hourly_
┃⚗️➺ _${usedPrefix}cadasemana | semanal | weekly_
┃⚗️➺ _${usedPrefix}cadames | mes | monthly_
┃⚗️➺ _${usedPrefix}cofre | abrircofre | coffer_
┃⚗️➺ _${usedPrefix}trabajar | work_
*╰━━━━━━━━━━━━⬣*

*╭━━━[* 𝐓𝐎𝐏 𝐄𝐍 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐁𝐎𝐓 *]━━⬣*
┃ ¡𝙰𝚅𝙴𝚁𝙸𝙶𝚄𝙰 𝙴𝙽 𝚀𝚄𝙴 𝚃𝙾𝙿 𝚃𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top | lb | leaderboard_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐘 𝐅𝐈𝐋𝐓𝐑𝐎𝐒 *]━⬣*
┃ ¡𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙾 
┃ 𝙲𝚁𝙴𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙲𝙾𝙽 𝙵𝙸𝙻𝚃𝚁𝙾𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _${usedPrefix}sticker | s *imagen o video*_
┃🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
┃🎐 _${usedPrefix}emojimix *😺+😆*_
┃🎐 _${usedPrefix}scircle | círculo *imagen*_
┃🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
┃🎐 _${usedPrefix}attp *texto*_
┃🎐 _${usedPrefix}attp2 *texto*_
┃🎐 _${usedPrefix}ttp *texto*_
┃🎐 _${usedPrefix}ttp2 *texto*_
┃🎐 _${usedPrefix}ttp3 *texto*_
┃🎐 _${usedPrefix}ttp4 *texto*_
┃🎐 _${usedPrefix}ttp5 *texto*_
┃🎐 _${usedPrefix}ttp6 *texto*_
┃🎐 _${usedPrefix}dado_
┃🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
┃🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┃🎐 _${usedPrefix}cs *:* cs2_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐀𝐑 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 *]━⬣*
┃ ¡𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💡 _${usedPrefix}wm *packname|author*_
┃💡 _${usedPrefix}wm *texto1|texto2*_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐈𝐍𝐀́𝐌𝐈𝐂𝐎𝐒 *]━⬣*
┃ ¡𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝙰𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂
┃ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝙽𝙳𝙾 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┃⛱️ _${usedPrefix}bofetada | slap *@tag*_
┃⛱️ _${usedPrefix}golpear *@tag*_
┃⛱️ _${usedPrefix}besar | kiss *@tag*_
┃⛱️ _${usedPrefix}alimentar | food *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[* 𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎/𝐀 *]━⬣*
┃ ¡𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙰𝙳𝚁𝙸𝙰𝙽𝙾!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎 _${usedPrefix}join *enlace*_
┃💎 _${usedPrefix}unete *enlace*_
┃💎➺ _${usedPrefix}dardiamantes *cantidad*_
┃💎➺ _${usedPrefix}darxp *cantidad*_
┃💎➺ _${usedPrefix}darcoins *cantidad*_
┃💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}idioma | language_
┃💎➺ _${usedPrefix}cajafuerte_
┃💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
┃💎➺ _${usedPrefix}comunicarpv *texto*_
┃💎➺ _${usedPrefix}broadcastgc *texto*_
┃💎➺ _${usedPrefix}comunicargrupos *texto*_
┃💎➺ _${usedPrefix}borrartmp | cleartmp_
┃💎➺ _${usedPrefix}delexp *@tag*_
┃💎➺ _${usedPrefix}delmakanakycoins *@tag*_
┃💎➺ _${usedPrefix}deldiamantes *@tag*_
┃💎➺ _${usedPrefix}reiniciar | restart_
┃💎➺ _${usedPrefix}ctualizar | update_
┃💎➺ _${usedPrefix}addprem | +prem *@tag*_
┃💎➺ _${usedPrefix}delprem | -prem *@tag*_
┃💎➺ _${usedPrefix}listapremium | listprem_
┃💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
┃💎➺ _${usedPrefix}añadirmakanakycoins *@tag cantidad*_
*╰━━━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
