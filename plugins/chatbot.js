// by https://github.com/elrebelde21/The-LoliBot-MD
 
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^e$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`𝚀𝚄𝙴 𝙱𝚄𝙴𝙽𝙾 𝚂𝙰𝙱𝙴 𝙻𝙰 𝙻𝙴𝚃𝚁𝙰 𝙴 😮`, `𝙴𝙴𝙴𝙴𝙴`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^destruirbot|autodestruirbot$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙼𝙴 𝚃𝚁𝙰𝚃𝙰 𝙼𝚄𝚈 𝙼𝙰𝙻 😭`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`𝙽𝙾 𝙿𝚄𝙴𝙳𝙾, 𝙴𝚂𝚃𝙰 𝙲𝙾𝙽𝚃𝚁𝙰 𝙻𝙰 𝙿𝙾𝙻𝙸𝚃𝙸𝙲𝙰 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.☹️`, `𝚄𝙵𝙵 𝙼𝙸𝚁𝙴𝙽 𝙰𝚄𝙽 𝙿𝙰𝙹𝙴𝚁𝙾`, `𝙿𝙰𝙶𝙰𝙼𝙴 𝚈 𝙿𝙰𝚂𝙾 𝙼𝙸 𝙿𝙰𝙲𝙺 😏🥵`, `𝚀𝚄𝙴 😳`, `𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙿𝙸𝙹𝙰 𝙳𝙸𝙲𝙴 🤣`, `𝙿𝙰𝚂𝙰 𝙴𝙻 𝙿𝙰𝙲𝙺 𝙳𝙴 𝚃𝚄 𝙷𝙴𝚁𝙼𝙰𝙽𝙰 😏`, `𝙼𝙸𝚁𝙴𝙽 𝚄𝙽𝙰 𝙶𝙸𝙻𝙸𝙿𝙾𝙻𝙻𝙰 🤣`, `𝚂𝙸𝚄𝚄𝚄 𝚂𝙴𝚇𝙾 𝚂𝙴𝚇𝙾 𝚂𝙴𝚇𝙾 😈`, '𝙲𝙰𝙻𝙻𝙴𝚃𝙴 𝙿𝚄𝚃𝙸𝚃𝙾 😐'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^reglas|normas|Reglas|regla|norma$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┅〘 ⚠️ 𝐎𝐁𝐄𝐃𝐄𝐂𝐄 𝐋𝐀𝐒 𝐑𝐄𝐆𝐋𝐀𝐒 ⚠️ 〙
➽❌ 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙻𝙻𝙰𝙼𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃
➽❌ 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃
➽❌ 𝙽𝙾 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃
➽❌ 𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙾𝚂 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂
╰═┅ৡৢ✦═╡ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ╞═┅ৡৢ✦═╯`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^¿que es un bot?|Que es un bot|Que Es Un Bot|que es un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆ ¿𝐐𝐔𝐄 𝐄𝐒 𝐔𝐍 𝐁𝐎𝐓 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏? ☆
┆——————«•»——————
┆ 𝙴𝚂 𝚄𝙽𝙰 𝙸𝙽𝚃𝙴𝙻𝙸𝙶𝙴𝙽𝙲𝙸𝙰 
┆ 𝙰𝚁𝚃𝙸𝙵𝙸𝙲𝙸𝙰𝙻 𝚀𝚄𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝚃𝙰𝚁𝙴𝙰𝚂
┆ 𝚀𝚄𝙴 𝙻𝙴 𝙸𝙽𝙳𝙸𝚀𝚄𝙴 𝙲𝙾𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂, 
┆ 𝙴𝙽 𝙴𝙻 𝙲𝙰𝚂𝙾 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿, 
┆ 𝙿𝚄𝙴𝙳𝙴 𝙲𝚁𝙴𝙰𝚁 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂, 
┆ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙼𝚄𝚂𝙸𝙲𝙰, 𝚅𝙸𝙳𝙴𝙾𝚂,
┆ 𝚈 𝙼𝚄𝙲𝙷𝙾 𝙼𝙰𝚂, 𝙴𝚂𝚃𝙾 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 
┆ 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝚉𝙰𝙳𝙰, 𝙾 𝚂𝙴𝙰 𝚀𝚄𝙴 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 
┆ 𝙽𝙾 𝙸𝙽𝚃𝙴𝚁𝙵𝙸𝙴𝚁𝙴 𝙴𝙽 𝙴𝙻 𝙿𝚁𝙾𝙲𝙴𝚂𝙾 
┆ 
╰━━⊰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ⊱━━━დ`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

