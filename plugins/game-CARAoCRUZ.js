 //BY: VIRUZZ-OFC

 let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let time = global.db.data.users[m.sender].wait + 40000
    let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
    if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `🕓 𝙴𝚂𝙿𝙴𝚁𝙰 ${Math.floor((time - new Date()) / 1000)} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙿𝙾𝙳𝙴𝚁 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙹𝚄𝙶𝙰𝚁 🥳`, fkontak, m)
    if (!args[0]) throw await m.reply(`\`\`\`🙂 𝐂𝐀𝐑𝐀 𝐎 𝐂𝐑𝐔𝐙 ✝️\n\n👉 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙻𝙴𝙶𝙸𝚁 𝙻𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝚄𝚂𝙰𝙳𝙾 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 :\n\n*${usedPrefix + command}* _cara_\n*${usedPrefix + command}* _cruz_\n\n${wm}\`\`\``)
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
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money0 = global.db.data.users[m.sender].money -= 300
    //global.db.data.users[m.sender].exp -= 300
    m.reply(`╭━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    }
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    let money0 = global.db.data.users[m.sender].money += 500
    //global.db.data.users[m.sender].exp += 1000
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    }
    }else if (text == 'cruz') {
    if (astro == 'cruz') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    }} else if (text == 'cruz') {
    if (astro == 'cruz') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who)  
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 400
    m.reply(`╭━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    }
    } else if (text == 'cara') {
    if (astro == 'cara') {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp += 1000
    let money0 = global.db.data.users[m.sender].money += 500
    m.reply(`╭━━[🎉 𝐇𝐀 𝐆𝐀𝐍𝐀𝐃𝐎! 🎉]━━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃💰 𝙿𝚁𝙴𝙼𝙸𝙾 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(who) 
    //global.db.data.users[m.sender].exp -= 300
    let money0 = global.db.data.users[m.sender].money -= 300
    m.reply(`╭━━[☹️ 𝐇𝐀 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! ☹️]━━⬣\n┃${name} 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴 : _${text}_\n┃💫 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 : _${astro}_\n┃📈 𝙿𝙴́𝚁𝙳𝙸𝙳𝙰 : _${[money0].getRandom()} MakanakyCoins_\n╰━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━⬣`)
    }
    global.db.data.users[m.sender].wait = new Date * 1
    }}
    handler.help = ['suerte']
    handler.tags = ['games']
    handler.command = /^(suerte)$/i
    export default handler
    
    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]}