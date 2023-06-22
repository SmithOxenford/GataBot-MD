const items = [
    'limit', 'exp', 'joincount', 'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('🤑 𝙴𝚂𝚃𝙰𝚂 𝙷𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝚄𝙽𝙰 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰 🤑')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    
    let lol = `💱 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀 💱
    
*${usedPrefix + command}*  _tipo cantidad @tag_

𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :
*${usedPrefix + command}* _exp 30 @59300000000_

╭━━━━━━━━━━━━━━━━━━ ღ
┃ ✅ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒 :
┃──────────────
┃ 𝙻𝙸𝙼𝙸𝚃 = _Diamantes_ 💎
┃ 𝙼𝙾𝙽𝙴𝚈 = _MakanakyCoins_ 🤖
┃ 𝙴𝚇𝙿 = _Experiencia_ ⚡
╰━━━━━━━━━━━━━━━━━━ ღ 
`.trim()
    
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`${ag} 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾`)
    if (!(who in global.db.data.users)) return m.reply(`${fg}𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${who} 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️`)
    if (user[type] * 1 < count) return m.reply(`${fg} 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙻𝙰 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰 𝙳𝙴 ${type}`)
    let mentionedJid = [who]
    let username = conn.getName(who)
    
    let confirm = `
𝙴𝚂𝚃𝙰𝚂 𝙰 𝙿𝚄𝙽𝚃𝙾 𝙳𝙴 𝙷𝙰𝙲𝙴𝚁 𝙴𝚂𝚃𝙰 𝙰𝙲𝙲𝙸𝙾́𝙽 𝙳𝙴 𝚃𝚁𝙰𝙽𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰

💹 *${count} ${type} para* *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

𝙳𝙴𝚂𝙴𝙰𝚂 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝚁? 😁`.trim()
    
    let c = `${wm}\n𝚃𝙸𝙴𝙽𝙴𝚂 𝟼0 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂!!`
    conn.sendButton(m.chat, confirm, c, null, [['𝙎𝙄'], ['𝙉𝙊']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('𝚂𝚄 𝚃𝙸𝙴𝙼𝙿𝙾 𝚂𝙴 𝙷𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾 ☹️'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/𝙉𝙊?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('𝙲𝙰𝙽𝙲𝙴𝙻𝙰𝙳𝙾')
    }
    if (/𝙎𝙄?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀 𝐇𝐄𝐂𝐇𝐀 𝐂𝐎𝐍 𝐄́𝐗𝐈𝐓𝐎 :\n\n*${count} ${type}* 𝙿𝙰𝚁𝙰 @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`⚠️ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙸𝚁 ${count} ${type} 𝙿𝙰𝚁𝙰 *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp', 'dar', 'enviar', 'transferir'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
