import util from 'util'
import path from 'path' 
function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `🌈 𝐓𝐎𝐏 𝟏𝟎 𝐆𝐀𝐘𝐒 / 𝐋𝐄𝐒𝐁𝐈𝐀𝐍𝐀𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 🌈
    
_1.- 🏳️‍🌈 ${user(a)}_ 🏳️‍🌈
_2.- 🪂 ${user(b)}_ 🪂
_3.- 🪁 ${user(c)}_ 🪁
_4.- 🏳️‍🌈 ${user(d)}_ 🏳️‍🌈
_5.- 🪂 ${user(e)}_ 🪂
_6.- 🪁 ${user(f)}_ 🪁
_7.- 🏳️‍🌈 ${user(g)}_ 🏳️‍🌈
_8.- 🪂 ${user(h)}_ 🪂
_9.- 🪁 ${user(i)}_ 🪁
_10.- 🏳️‍🌈 ${user(j)}_ 🏳️‍🌈`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {

//m.reply(conn.sendHydrated(m.chat, `*SON MUY GAYS!!* 🌈`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m))
   
//contextInfo: { 
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'topotakus') {
let vn = './media/otaku.mp3'
let top = `🌸 𝐓𝐎𝐏 𝟏𝟎 𝐎𝐓𝐀𝐊𝐔𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 🌸
    
_1.- 💮 ${user(a)}_ 💮
_2.- 🌷 ${user(b)}_ 🌷
_3.- 💮 ${user(c)}_ 💮
_4.- 🌷 ${user(d)}_ 🌷
*_5.- 💮 ${user(e)}_ 💮
_6.- 🌷 ${user(f)}_ 🌷
_7.- 💮 ${user(g)}_ 💮
_8.- 🌷 ${user(h)}_ 🌷
_9.- 💮 ${user(i)}_ 💮
_10.- 🌷 ${user(j)}_ 🌷`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {
//conn.sendHydrated(m.chat, top, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m, null, {
//contextInfo: {
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
   
if (command == 'topintegrantes') {
let top = `💎 𝐓𝐎𝐏 𝟏𝟎 𝐋@𝐒 𝐌𝐄𝐉𝐎𝐑𝐄𝐒 𝐈𝐍𝐓𝐄𝐆𝐑𝐀𝐍𝐓𝐄𝐒 👑
    
_1.- 💎 ${user(a)}_ 💎
_2.- 👑 ${user(b)}_ 👑
_3.- 💎 ${user(c)}_ 💎
_4.- 👑 ${user(d)}_ 👑
_5.- 💎 ${user(e)}_ 💎
_6.- 👑 ${user(f)}_ 👑
_7.- 💎 ${user(g)}_ 💎
_8.- 👑 ${user(h)}_ 👑
_9.- 💎 ${user(i)}_ 💎
_10.- 👑 ${user(j)}_ 👑`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topintegrante') {
let top = `💎 𝐓𝐎𝐏 𝟏𝟎 𝐋@𝐒 𝐌𝐄𝐉𝐎𝐑𝐄𝐒 𝐈𝐍𝐓𝐄𝐆𝐑𝐀𝐍𝐓𝐄𝐒 👑
    
_1.- 💎 ${user(a)}_ 💎
_2.- 👑 ${user(b)}_ 👑
_3.- 💎 ${user(c)}_ 💎
_4.- 👑 ${user(d)}_ 👑
_5.- 💎 ${user(e)}_ 💎
_6.- 👑 ${user(f)}_ 👑
_7.- 💎 ${user(g)}_ 💎
_8.- 👑 ${user(h)}_ 👑
_9.- 💎 ${user(i)}_ 💎
_10.- 👑 ${user(j)}_ 👑`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplagrasa') {
let top = `𝐔𝐰𝐮 𝐓𝐎𝐏 𝟏𝟎 𝐋𝐀 𝐆𝐑𝐀𝐒𝐀 𝐔𝐰𝐮
    
_1.- Bv ${user(a)} Bv_
_2.- :v ${user(b)} :v_
_3.- :D ${user(c)} :D_
_4.- Owo ${user(d)} Owo_
_5.- U.u ${user(e)} U.u_
_6.- >:v ${user(f)} >:v_
_7.- :'v ${user(g)} :'v_
_8.- ._. ${user(h)} ._._
_9.- :V ${user(i)} :V_
_10.- XD ${user(j)} XD_`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topgrasa') {
let top = `𝐔𝐰𝐮 𝐓𝐎𝐏 𝟏𝟎 𝐋𝐀 𝐆𝐑𝐀𝐒𝐀 𝐔𝐰𝐮
    
_1.- Bv ${user(a)} Bv_
_2.- :v ${user(b)} :v_
_3.- :D ${user(c)} :D_
_4.- Owo ${user(d)} Owo_
_5.- U.u ${user(e)} U.u_
_6.- >:v ${user(f)} >:v_
_7.- :'v ${user(g)} :'v_
_8.- ._. ${user(h)} ._._
_9.- :V ${user(i)} :V_
_10.- XD ${user(j)} XD_`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafrescos') {
let top = `👊 𝐓𝐎𝐏 𝟏𝟎 𝐏𝐀𝐍𝐀𝐅𝐑𝐄𝐒𝐂𝐎𝐒 👊
    
_1.- 🤑 ${user(a)}_ 🤑
_2.- 🤙 ${user(b)}_ 🤙
_3.- 😎 ${user(c)}_ 😎
_4.- 👌 ${user(d)}_ 👌
_5.- 🧐 ${user(e)}_ 🧐
_6.- 😃 ${user(f)}_ 😃
_7.- 😋 ${user(g)}_ 😋
_8.- 🤜 ${user(h)}_ 🤜
_9.- 💪 ${user(i)}_ 💪
_10.- 😉 ${user(j)}_ 😉`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppanafresco') {
let top = `👊 𝐓𝐎𝐏 𝟏𝟎 𝐏𝐀𝐍𝐀𝐅𝐑𝐄𝐒𝐂𝐎𝐒 👊
    
_1.- 🤑 ${user(a)}_ 🤑
_2.- 🤙 ${user(b)}_ 🤙
_3.- 😎 ${user(c)}_ 😎
_4.- 👌 ${user(d)}_ 👌
_5.- 🧐 ${user(e)}_ 🧐
_6.- 😃 ${user(f)}_ 😃
_7.- 😋 ${user(g)}_ 😋
_8.- 🤜 ${user(h)}_ 🤜
_9.- 💪 ${user(i)}_ 💪
_10.- 😉 ${user(j)}_ 😉`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshiposters') {
let top = `😱 𝐓𝐎𝐏 𝟏𝟎 𝐒𝐇𝐈𝐏𝐎𝐒𝐓𝐄𝐑𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😱 
    
_1.- 😈 ${user(a)}_ 😈
_2.- 🤙 ${user(b)}_ 🤙
_3.- 🥶 ${user(c)}_ 🥶
_4.- 🤑 ${user(d)}_ 🤑
_5.- 🥵 ${user(e)}_ 🥵
_6.- 🤝 ${user(f)}_ 🤝
_7.- 😟 ${user(g)}_ 😟
_8.- 😨 ${user(h)}_ 😨
_9.- 😇 ${user(i)}_ 😇
_10.- 🤠 ${user(j)}_ 🤠`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshipost') {
let top = `😱 𝐓𝐎𝐏 𝟏𝟎 𝐒𝐇𝐈𝐏𝐎𝐒𝐓𝐄𝐑𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😱  
    
_1.- 😈 ${user(a)}_ 😈
_2.- 🤙 ${user(b)}_ 🤙
_3.- 🥶 ${user(c)}_ 🥶
_4.- 🤑 ${user(d)}_ 🤑
_5.- 🥵 ${user(e)}_ 🥵
_6.- 🤝 ${user(f)}_ 🤝
_7.- 😟 ${user(g)}_ 😟
_8.- 😨 ${user(h)}_ 😨
_9.- 😇 ${user(i)}_ 😇
_10.- 🤠 ${user(j)}_ 🤠`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppajer@s') {
let top = `😏 𝐓𝐎𝐏 𝐋@𝐒 𝐌𝐀𝐒 𝐏𝐀𝐉𝐄𝐑𝐎𝐒/𝐀𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 💦
    
_1.- 🥵 ${user(a)}_ 💦
_2.- 🥵 ${user(b)}_ 💦
_3.- 🥵 ${user(c)}_ 💦
_4.- 🥵 ${user(d)}_ 💦
_5.- 🥵 ${user(e)}_ 💦
_6.- 🥵 ${user(f)}_ 💦
_7.- 🥵 ${user(g)}_ 💦
_8.- 🥵 ${user(h)}_ 💦
_9.- 🥵 ${user(i)}_ 💦
_10.- 🥵 ${user(j)}_ 💦`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplind@s') {
let top = `😳 𝐓𝐎𝐏 𝐋@𝐒 𝐌𝐀𝐒 𝐋𝐈𝐍𝐃@𝐒 𝐘 𝐒𝐄𝐗𝐈𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😳
    
_1.- ✨ ${user(a)}_ ✨
_2.- ✨ ${user(b)}_ ✨
_3.- ✨ ${user(c)}_ ✨
_4.- ✨ ${user(d)}_ ✨
_5.- ✨ ${user(e)}_ ✨
_6.- ✨ ${user(f)}_ ✨
_7.- ✨ ${user(g)}_ ✨
_8.- ✨ ${user(h)}_ ✨
_9.- ✨ ${user(i)}_ ✨
_10.- ✨ ${user(j)}_ ✨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplindos') {
let top = `😳 𝐓𝐎𝐏 𝐋@𝐒 𝐌𝐀𝐒 𝐋𝐈𝐍𝐃@𝐒 𝐘 𝐒𝐄𝐗𝐈𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😳
    
_1.- ✨ ${user(a)}_ ✨
_2.- ✨ ${user(b)}_ ✨
_3.- ✨ ${user(c)}_ ✨
_4.- ✨ ${user(d)}_ ✨
_5.- ✨ ${user(e)}_ ✨
_6.- ✨ ${user(f)}_ ✨
_7.- ✨ ${user(g)}_ ✨
_8.- ✨ ${user(h)}_ ✨
_9.- ✨ ${user(i)}_ ✨
_10.- ✨ ${user(j)}_ ✨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topput@s') {
let top = `😏𝐓𝐎𝐏 𝐋@𝐒 𝐌𝐀𝐒 𝐏𝐔𝐓@𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 𝐒𝐎𝐍🔥 
    
*_1.- 👉 ${user(a)}_* 👌
*_2.- 👉 ${user(b)}_* 👌
*_3.- 👉 ${user(c)}_* 👌
*_4.- 👉 ${user(d)}_* 👌
*_5.- 👉 ${user(e)}_* 👌
*_6.- 👉 ${user(f)}_* 👌
*_7.- 👉 ${user(g)}_* 👌
*_8.- 👉 ${user(h)}_* 👌
*_9.- 👉 ${user(i)}_* 👌
*_10.- 👉 ${user(j)}_* 👌`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamosos') {
let top = `🌟 𝐓𝐎𝐏 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐅𝐀𝐌𝐎𝐒𝐀𝐒 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 🌟
    
_1.- 🛫 ${user(a)}_ 🛫
_2.- 🥂 ${user(b)}_ 🥂
_3.- 🤩 ${user(c)}_ 🤩
_4.- 🛫 ${user(d)}_ 🛫
_5.- 🥂 ${user(e)}_ 🥂
_6.- 🤩 ${user(f)}_ 🤩
_7.- 🛫 ${user(g)}_ 🛫
_8.- 🥂 ${user(h)}_ 🥂
_9.- 🤩 ${user(i)}_ 🤩
_10.- 🛫 ${user(j)}_ 🛫`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamos@s') {
let top = `🌟 𝐓𝐎𝐏 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐒 𝐅𝐀𝐌𝐎𝐒𝐀𝐒 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 🌟
    
_1.- 🛫 ${user(a)}_ 🛫
_2.- 🥂 ${user(b)}_ 🥂
_3.- 🤩 ${user(c)}_ 🤩
_4.- 🛫 ${user(d)}_ 🛫
_5.- 🥂 ${user(e)}_ 🥂
_6.- 🤩 ${user(f)}_ 🤩
_7.- 🛫 ${user(g)}_ 🛫
_8.- 🥂 ${user(h)}_ 🥂
_9.- 🤩 ${user(i)}_ 🤩
_10.- 🛫 ${user(j)}_ 🛫`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topparejas') {
let top = `😍 𝐓𝐎𝐏 𝐋𝐀𝐒 𝟓 𝐌𝐀𝐑𝐀𝐕𝐈𝐋𝐋𝐎𝐒𝐀𝐒 𝐏𝐀𝐑𝐄𝐉𝐀𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😍
    
_1.- ${user(a)} 💘 ${user(b)}_
𝚀𝚄𝙴 𝙷𝙴𝚁𝙼𝙾𝚂𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💖, 𝙼𝙴 𝙸𝙽𝙸𝚅𝚃𝙰𝙽 𝙰 𝚂𝚄 𝙱𝙾𝙳𝙰 🛐

_2.- ${user(c)} 💘 ${user(d)}_  
🌹 𝚄𝚂𝚃𝙴𝙳𝙴𝚂 𝙼𝙴𝚁𝙴𝙲𝙴𝙽 𝙻𝙾 𝙼𝙴𝙹𝙾𝚁 𝙳𝙴𝙻 𝙼𝚄𝙽𝙳𝙾 💞

_3.- ${user(e)} 💘 ${user(f)}_
𝚃𝙰𝙽 𝙴𝙽𝙰𝙼𝙾𝚁𝙰𝙳𝙾𝚂 😍, 𝙿𝙰𝚁𝙰 𝙲𝚄𝙰𝙽𝙳𝙾 𝚄𝙽𝙰 𝙵𝙰𝙼𝙸𝙻𝙸𝙰 🥰

_4.- ${user(g)} 💘 ${user(h)}_
💗 𝙳𝙴𝙲𝚁𝙴𝚃𝙾 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳𝙴𝚂 𝚂𝙾𝙽 𝙻𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 𝙳𝙴𝙻 𝙰𝙽̃𝙾 💗 

_5.- ${user(i)} 💘 ${user(j)}_
𝙶𝙴𝙽𝙸𝙰𝙻! 💝, 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴 𝙻𝚄𝙽𝙰 𝙳𝙴 𝙼𝙸𝙴𝙻 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'top5parejas') {
let top = `😍 𝐓𝐎𝐏 𝐋𝐀𝐒 𝟓 𝐌𝐀𝐑𝐀𝐕𝐈𝐋𝐋𝐎𝐒𝐀𝐒 𝐏𝐀𝐑𝐄𝐉𝐀𝐒 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 😍
    
_1.- ${user(a)} 💘 ${user(b)}_
𝚀𝚄𝙴 𝙷𝙴𝚁𝙼𝙾𝚂𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💖, 𝙼𝙴 𝙸𝙽𝙸𝚅𝚃𝙰𝙽 𝙰 𝚂𝚄 𝙱𝙾𝙳𝙰 🛐

_2.- ${user(c)} 💘 ${user(d)}_  
🌹 𝚄𝚂𝚃𝙴𝙳𝙴𝚂 𝙼𝙴𝚁𝙴𝙲𝙴𝙽 𝙻𝙾 𝙼𝙴𝙹𝙾𝚁 𝙳𝙴𝙻 𝙼𝚄𝙽𝙳𝙾 💞

_3.- ${user(e)} 💘 ${user(f)}_
𝚃𝙰𝙽 𝙴𝙽𝙰𝙼𝙾𝚁𝙰𝙳𝙾𝚂 😍, 𝙿𝙰𝚁𝙰 𝙲𝚄𝙰𝙽𝙳𝙾 𝚄𝙽𝙰 𝙵𝙰𝙼𝙸𝙻𝙸𝙰 🥰

_4.- ${user(g)} 💘 ${user(h)}_
💗 𝙳𝙴𝙲𝚁𝙴𝚃𝙾 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳𝙴𝚂 𝚂𝙾𝙽 𝙻𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 𝙳𝙴𝙻 𝙰𝙽̃𝙾 💗 

_5.- ${user(i)} 💘 ${user(j)}_
𝙶𝙴𝙽𝙸𝙰𝙻! 💝, 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴 𝙻𝚄𝙽𝙰 𝙳𝙴 𝙼𝙸𝙴𝙻 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
  
}
handler.help = handler.command = ['topgays', 'topotakus', 'topintegrantes', 'topintegrante', 'toplagrasa', 'topgrasa', 'toppanafrescos', 'toppanafresco', 'topshiposters', 'topshipost', 'toppajer@s', 'toplindos', 'toplind@s', 'topput@s', 'topfamosos', 'topfamos@s', 'topparejas', 'top5parejas' ]
handler.tags = ['games']
handler.group = true
export default handler  
