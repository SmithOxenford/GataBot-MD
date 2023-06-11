import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙷𝙰𝚈 𝙰𝙲𝙴𝚁𝚃𝙸𝙹𝙾𝚂 𝚂𝙸𝙽 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.question}*

• 𝚃𝙸𝙴𝙼𝙿𝙾: ${(timeout / 1000).toFixed(2)} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂
• 𝙱𝙾𝙽𝙾: +${poin} Exp
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `𝚂𝙴 𝙰𝙲𝙰𝙱𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 😔\n𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰: ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i

export default handler
