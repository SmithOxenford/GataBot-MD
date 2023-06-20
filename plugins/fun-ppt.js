let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    //let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
    let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
    // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
    let time = global.db.data.users[m.sender].wait + 40000
    let textos = `𝐏𝐈𝐄𝐃𝐑𝐀, 𝐏𝐀𝐏𝐄𝐋, 𝐎 𝐓𝐈𝐉𝐄𝐑𝐀\n\n𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝚂𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 :\n${usedPrefix + command} 𝙿𝙸𝙴𝙳𝚁𝙰\n${usedPrefix + command} 𝙿𝙰𝙿𝙴𝙻\n${usedPrefix + command} 𝚃𝙸𝙹𝙴𝚁𝙰\n\n𝚄𝚂𝙴 𝙴𝙽 𝙼𝙸𝙽𝚄́𝚂𝙲𝚄𝙻𝙰𝚂 😁\n\n${wm}`
    if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `🕓 𝙴𝚂𝙿𝙴𝚁𝙰 ${Math.floor((time - new Date()) / 1000)} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙿𝙾𝙳𝙴𝚁 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁 💖`, fkontak, m)
    if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
    var astro = Math.random()
    if (astro < 0.34) {
    astro = 'piedra' 
    } else if (astro > 0.34 && astro < 0.67) {
    astro = 'tijera' 
    } else {
    astro = 'papel'
    } 
    if (text == astro) {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 2
    
     await conn.reply(m.chat, `╭━━━━[ 🤝 𝐄𝐌𝐏𝐀𝐓𝐄! 🤝 ]━━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💸 𝙱𝙾𝙽𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 𝙀𝙈𝙋𝘼𝙏𝙀! 🤝 ]━━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💸 𝙱𝙾𝙽𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)*/
      
    } else if (text == 'papel') {
    if (astro == 'piedra') {
    //global.db.data.users[m.sender].uang += 1000
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 100
    
    await conn.reply(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)*/
      
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money -= 500
    await conn.reply(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)*/
      
    }
    } else if (text == 'tijera') {
    if (astro == 'papel') {
    //global.db.data.users[m.sender].uang += 125
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 175
    await conn.reply(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)*/
      
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money -= 95
    await conn.reply(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)  */
      
    }
    } else if (text == 'tijera') {
    if (astro == 'papel') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 225
    //global.db.data.users[m.sender].uang += 1000
    await conn.reply(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)  */
      
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money -= 90
    await conn.reply(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)    */
      
    }
    } else if (text == 'papel') {
    if (astro == 'piedra') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 75
    //global.db.data.users[m.sender].uang += 1000
    await conn.reply(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)   */
      
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money -= 240
    await conn.reply(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)    */
      
    }
    } else if (text == 'piedra') {
    if (astro == 'tijera') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money += 300
    //global.db.data.users[m.sender].uang += 1000
    await conn.reply(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ 🎉 𝐇𝐀𝐒 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉 ]━━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)     */
      
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money = global.db.data.users[who].money
    let money0 = global.db.data.users[m.sender].money -= 210
    await conn.reply(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : ${money} Makanakycoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, fkontak, m)
    /*conn.sendHydrated(m.chat, `╭━━━━[ ☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️ ]━━⬣\n┃${name} 𝚅𝙾𝚂 : ${text}\n┃🤖 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : $${[money0].getRandom()} Makanakycoins_\n┃💵 𝚂𝚄 𝙳𝙸𝙽𝙴𝚁𝙾 : $${money} Makanakycoins_\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
    ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
    ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
    ], m,)*/
    }}
    global.db.data.users[m.sender].wait = new Date * 1
    }
    handler.help = ['ppt']
    handler.tags = ['games']
    handler.command = /^(ppt)$/i
    export default handler
    
    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]}