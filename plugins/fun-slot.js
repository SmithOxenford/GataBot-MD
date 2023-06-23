/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg} 𝙳𝙴𝙱𝙴 𝙳𝙴 𝚄𝚂𝙰𝚁 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 :

𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : 
*${usedPrefix + command}* 50`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁 𝙰𝙿𝙾𝚂𝚃𝙰𝙽𝙳𝙾* 🎰\n\n*𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 ${msToTime(time - new Date())} 𝙏𝙊 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝘽𝙀𝙏𝙏𝙄𝙉𝙂* 💰`

if (apuesta < 10) throw `${lenguajeGB['smsAvisoAG']()}𝙳𝙴𝙱𝙴 𝙳𝙴 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝚄𝙽 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝟷0 😁`

if (users.exp < apuesta) {
throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝙰𝙻𝙲𝙰𝙽𝚉𝙰 𝙿𝙰𝚁𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝙴𝚇𝙿, 𝙻𝙴 𝚁𝙴𝙲𝙾𝙼𝙸𝙴𝙽𝙳𝙾 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂! 🤗`    
}
if (command == 'slot1') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁 𝙰𝙿𝙾𝚂𝚃𝙰𝙽𝙳𝙾 𝙴𝚇𝙿 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ 𝐐𝐔𝐄 𝐏𝐑𝐎! 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎 +${apuesta + apuesta} _EXP_`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 ¡𝙲𝙰𝚂𝙸!, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁\n𝐁𝐎𝐍𝐎 𝐃𝐄 : +50 _EXP_`
users.exp += 50
} else {
end = `😿 ¡𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ❌ -${apuesta} _EXP_`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `🎰 | 𝐑𝐀𝐍𝐔𝐑𝐀𝐒 | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |  𝐒𝐋𝐎𝐓𝐒  | 🎰

${end}`
await conn.reply(m.chat, s, m)}
/*await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/


if (users.money < apuesta)  { 
throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝙰𝙻𝙲𝙰𝙽𝚉𝙰 𝙿𝙰𝚁𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂, 𝙻𝙴 𝚁𝙴𝙲𝙾𝙼𝙸𝙴𝙽𝙳𝙾 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂! 🤗`    
}
if (command == 'slot2') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁 𝙰𝙿𝙾𝚂𝚃𝙰𝙽𝙳𝙾 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🐈", "🐓", "🐙"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ 𝐐𝐔𝐄 𝐏𝐑𝐎! 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎 +${apuesta + apuesta} _MakanakyCoins_`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 ¡𝙲𝙰𝚂𝙸!, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁\n𝐁𝐎𝐍𝐎 𝐃𝐄 : +30 _MakanakyCoins_`
users.money += 30
} else {
end = `😿 ¡𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ❌ -${apuesta} _MakanakyCoins_`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | 𝐑𝐀𝐍𝐔𝐑𝐀𝐒 | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |  𝐒𝐋𝐎𝐓𝐒  | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}
/*await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝐄𝐗𝐏', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

    
if (users.limit < apuesta) {  
throw `${lenguajeGB['smsAvisoFG']()}𝙽𝙾 𝙰𝙻𝙲𝙰𝙽𝚉𝙰 𝙿𝙰𝚁𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂, 𝙻𝙴 𝚁𝙴𝙲𝙾𝙼𝙸𝙴𝙽𝙳𝙾 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝚁𝙴𝙲𝚄𝚁𝚂𝙾𝚂! 🤗`    
}
if (command == 'slot3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁 𝙰𝙿𝙾𝚂𝚃𝙰𝙽𝙳𝙾 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 🎰`
users.lastslot = new Date * 1
    
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ 𝐐𝐔𝐄 𝐏𝐑𝐎! 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎 +${apuesta + apuesta} _Diamantes_`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 ¡𝙲𝙰𝚂𝙸!, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁\n𝐁𝐎𝐍𝐎 𝐃𝐄 : +2 _Diamantes_`
users.limit += 2
} else {
end = `😿 ¡𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ❌ -${apuesta} _Diamantes_`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
🎰 | 𝐑𝐀𝐍𝐔𝐑𝐀𝐒 | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |  𝐒𝐋𝐎𝐓𝐒  | 🎰\n\n${end}`
await conn.reply(m.chat, sss, m)}
/*await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot3 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝐄𝐗𝐏', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`]
], m,)}*/
        
        
if (command == 'slot') {       
await conn.reply(m.chat, `𝙴𝙻𝙸𝙹𝙰 𝙴𝙽 𝚀𝚄𝙴 𝙰𝙿𝙾𝚂𝚃𝙰𝚁𝙰́ *${apuesta}*\n\n⚡ 𝐄𝐗𝐏:\n${usedPrefix}slot1 ${apuesta}\n\n🤖 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐂𝐎𝐈𝐍𝐒 :\n${usedPrefix}slot2 ${apuesta}\n\n💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 :\n${usedPrefix}slot3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `𝙴𝙻𝙸𝙹𝙰 𝙴𝙽 𝚀𝚄𝙴 𝙰𝙿𝙾𝚂𝚃𝙰𝚁𝙰́ ${apuesta}*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝐄𝐗𝐏', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/
        
if (command == 'apostar') {       
await conn.reply(m.chat, `𝙴𝙻𝙸𝙹𝙰 𝙴𝙽 𝚀𝚄𝙴 𝙰𝙿𝙾𝚂𝚃𝙰𝚁𝙰́ *${apuesta}*\n\n⚡ 𝐄𝐗𝐏:\n${usedPrefix}slot1 ${apuesta}\n🤖 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘𝐂𝐎𝐈𝐍𝐒 :\n${usedPrefix}slot2 ${apuesta}\n💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 :\n${usedPrefix}slot3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `𝙴𝙻𝙸𝙹𝙰 𝙴𝙽 𝚀𝚄𝙴 𝙰𝙿𝙾𝚂𝚃𝙰𝚁𝙰́ ${apuesta}*\n\n*Choose what you will*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝐄𝐗𝐏', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 ', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}
