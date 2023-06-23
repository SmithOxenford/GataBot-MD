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
ⷮ _${json.question}_

• 𝐓𝐈𝐄𝐌𝐏𝐎 : ${(timeout / 1000).toFixed(2)} _segundos_
• 𝐁𝐎𝐍𝐎 : +${poin} _EXP_
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `𝚂𝙴 𝙰𝙲𝙰𝙱𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 😔\n𝐑𝐄𝐒𝐏𝐔𝐄𝐒𝐓𝐀 : _${json.response}_`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i

export default handler
