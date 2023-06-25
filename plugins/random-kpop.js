import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `𝚄𝚂𝙰𝚁 *_${usedPrefix}kpop_*\n𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 : *_${usedPrefix}kpop_* _[buscar]_\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *_${usedPrefix}kpop_* _bts_\n\n𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒 :\n_blackpink, exo, bts_`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, '𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁, 𝚂𝙸 𝙴𝙻 𝙵𝙰𝙻𝙻𝙾 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰 𝙰𝚅𝙸𝚂𝙰𝚁 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 👑', m)
})
} else {
conn.reply(m.chat, `𝙻𝙾 𝚂𝙴𝙽𝚃𝙸𝙼𝙾𝚂, 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴. 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 *_${usedPrefix}kpop_* 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂`, m)
}}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
export default handler 
