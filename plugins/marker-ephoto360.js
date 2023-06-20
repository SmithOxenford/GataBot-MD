//https://violetics.pw/api/ephoto360

let handler = async (m, { conn, args, command }) => { 
    let response = args.join(' ').split('|')
    if (!args[0]) throw `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙲𝚁𝙴𝙰𝚁 𝙴𝙻 𝙻𝙾𝙶𝙾 🤗`
    let img = './media/menus/Menu3.jpg'  
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
    
    try {    
    if (command == 'logocorazon') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == '3dtext') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/3dtext-effect3?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'angels') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/angels-wings?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'batshalloween') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/bats-halloween?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'bear2') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/bear2?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'boom') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/boom-comic?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'graffiticartoon') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/cartoon-graffiti?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'girlgamer') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/cute-girl-gamer?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'firework') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/firework-effect?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'cardchristmas') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/card-christmas?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'flowercard') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/flower-card?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
    
    if (command == 'gold') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/gold-effect?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'handlove') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/hand-love?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'heartcup') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/heart-cup?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'heartflashlight') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'birthdaycake') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)} 

    if (command == 'birthdaycake2') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake10?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'birthdaycake3') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/birthday-cake2?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'facebooksilverplay') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/facebook-silver-play-button?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'facebooksilverplay2') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/facebook-gold-play-button?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'neonsantin') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/neon-satin?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'womenday') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/women-day?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
    
    if (command == 'summerysand') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/summerysand?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)} 
    
    if (command == 'wetglass') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/wet-glass?apikey=${Key360}&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if (command == 'mylove') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/my-love?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
        
    if (command == 'pikachu') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/pikachu?apikey=${Key360}&text=${response[0]}` 
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
      
    if (command == 'logochristmas') {
    await conn.reply(m.chat, `${eg}𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝚄 𝙻𝙾𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰́ 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 😁\n\n`, fkontak,  m)
    let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}
      
    } catch {
    conn.reply(m.chat, `${fg}𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇 𝙑𝙐𝙀𝙇𝘼𝙑𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍\n\n𝙎𝙊𝙈𝙀𝙏𝙃𝙄𝙉𝙂 𝙒𝙀𝙉𝙏 𝙒𝙍𝙊𝙉𝙂 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`, fkontak, m)    
    }}
    handler.command = /^logocorazon|logochristmas|flowercard|cardchristmas|3dtext|angels|wetglass|sumerysand|womenday|batshalloween|neonsantin|facebooksilverplay|facebooksilverplay2|bear2|birthdaycake|birthdaycake2|birthdaycake3|boom|graffiticartoon|girlgamer|mylove|pikachu|firework|gold|handlove|heartcup|heartflashlight/i
    export default handler
