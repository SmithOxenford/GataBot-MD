import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, participants, usedPrefix }) => {
let users = Object.entries(global.db.data.users).map(([key, value]) => { 
return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
     let sortedRole = users.map(toNumber('role')).sort(sort('role'))
      let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
       let sortedJoincount = users.map(toNumber('joincount')).sort(sort('joincount'))
        let sortedPremium = users.map(toNumber('premium')).sort(sort('premium'))
       
     
      let usersExp = sortedExp.map(enumGetKey)
       let usersLim = sortedLim.map(enumGetKey)
        let usersLevel = sortedLevel.map(enumGetKey)
         let usersRole = sortedRole.map(enumGetKey)
          let usersMoney = sortedMoney.map(enumGetKey)
           let usersJoincount = sortedJoincount.map(enumGetKey)
            let usersPremium = sortedPremium.map(enumGetKey)
           
console.log(participants)
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
let text = `
       🏆 𝐓𝐀𝐁𝐋𝐀 𝐃𝐄 𝐂𝐋𝐀𝐒𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍 🏆
    
💠 𝐓𝐎𝐏 ${len} 𝐗𝐏 ⚡
𝚅𝙾𝚂 : ${usersExp.indexOf(m.sender) + 1} 𝙳𝙴 ${usersExp.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${exp} ⚡`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 ${len} 𝐍𝐈𝐕𝐄𝐋 🔅
𝚅𝙾𝚂 : ${usersLevel.indexOf(m.sender) + 1} 𝙳𝙴 ${usersLevel.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${level} 🔅`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 ${len} 𝐑𝐎𝐋 | 𝐑𝐀𝐍𝐆𝐎 💪
𝚅𝙾𝚂 : ${usersLevel.indexOf(m.sender) + 1} 𝙳𝙴 ${usersLevel.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 ${len} 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️
𝚅𝙾𝚂 : ${usersLevel.indexOf(m.sender) + 1} 𝙳𝙴 ${usersLevel.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedLim.slice(0, len).map(({ jid, premium, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${premium ? `✅` : `❌`} 🎟️`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 ${len} 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 💎
𝚅𝙾𝚂 : ${usersLim.indexOf(m.sender) + 1} 𝙳𝙴 ${usersLim.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${limit} 💎`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 ${len} 𝐓𝐎𝐊𝐄𝐍𝐒 ❤️
𝚅𝙾𝚂 : ${usersJoincount.indexOf(m.sender) + 1} 𝙳𝙴 ${usersJoincount.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedJoincount.slice(0, len).map(({ jid, joincount }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${joincount} ❤️`).join`\n`}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💠 𝐓𝐎𝐏 ${len} 𝐌𝐀𝐊𝐀𝐂𝐀𝐍𝐀𝐊𝐘𝐂𝐎𝐈𝐍𝐒 🤖
𝚅𝙾𝚂 : ${usersMoney.indexOf(m.sender) + 1} 𝙳𝙴 ${usersMoney.length} 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${money} 🤖`).join`\n`}
`.trim()
await m.reply(text, null, { mentions: conn.parseMention(text) })
/*await conn.sendButton(m.chat, wm, text, null, [
['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'], 
['𝙍𝙖𝙣𝙜𝙤𝙨 | 𝙍𝙤𝙡 🚹', '#rol'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, { mentions: conn.parseMention(text) })*/
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
//handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
