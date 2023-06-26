let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    let caption = `𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙾𝙽 𝙲𝙾𝙽 𝙴́𝚇𝙸𝚃𝙾 𝙴𝙻 𝚅𝙴𝙽𝙲𝙸𝙼𝙸𝙴𝙽𝚃𝙾 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾`
    conn.sendButton(m.chat, caption, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m)
    
}
handler.help = ['delexpired']
handler.tags = ['owner']
handler.command = /^(delbot|delbottemporal|delbotemporal)$/i
handler.owner = true
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " 𝙳𝙸́𝙰(𝚂) ☀️\n" + hours + " 𝙷𝙾𝚁𝙰(𝚂) ⏳\n" + minutes + " 𝙼𝙸𝙽𝚄𝚃𝙾(𝚂) ⏰\n" + sec + " 𝚂𝙴𝙶𝚄𝙽𝙳𝙾(𝚂) 🕐\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
