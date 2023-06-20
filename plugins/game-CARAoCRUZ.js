 //BY: VIRUZZ-OFC

 let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let time = global.db.data.users[m.sender].wait + 40000
    let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
    if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 𝙀𝙎𝙋𝙀𝙍𝘼 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙋𝙊𝘿𝙀𝙍 𝙑𝙊𝙇𝙑𝙀𝙍  𝘼 𝙅𝙐𝙂𝘼𝙍*\n\n*𝙒𝘼𝙄𝙏 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝘾𝙊𝙉𝘿𝙎 𝘽𝙀𝙁𝙊𝙍𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙋𝙇𝘼𝙔 𝘼𝙂𝘼𝙄𝙉*`, fkontak, m)
    if (!args[0]) throw await m.reply(`\`\`\`CARA O CRUZ\n\nPUEDES ELEGIR LA OPCION USADO LOS COMANDO\n\n${usedPrefix + command}cara\n${usedPrefix + command}cruz\n\n${wm}\`\`\``)
    //conn.sendHydrated(m.chat, '*Cara o Cruz*\n\nPuedes eleguir la opción con los botones o usa los comandos:\n.suerte cruz\n.suerte cara\n\n usar en minúsculas',wm, pp, null, null, null, null, [['Cara', `${usedPrefix + command} cara`],['Cruz', `${usedPrefix + command} cruz`]], m)
    var astro = Math.random()
    if (astro < 0.50) {//34
        astro = 'cara'
    } else if (astro > 0.50){//34
    astro = 'cruz' 
    }
    if (text == astro) {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 2
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money0 = global.db.data.users[m.sender].money -= 300
    //global.db.data.users[m.sender].exp -= 300
    m.reply(`╭━━━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    }
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money0 = global.db.data.users[m.sender].money += 500
    //global.db.data.users[m.sender].exp += 1000
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    }
    }else if (text == 'cruz') {
    if (astro == 'cruz') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    }} else if (text == 'cruz') {
    if (astro == 'cruz') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who)  
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 400
    m.reply(`╭━━━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    }
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : ${text}\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : ${astro}\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : ${[money0].getRandom()} MakanakyCoins\n╰━━━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣`)
    }
    global.db.data.users[m.sender].wait = new Date * 1
    }}
    handler.help = ['suerte']
    handler.tags = ['games']
    handler.command = /^(suerte)$/i
    export default handler
    
    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]}