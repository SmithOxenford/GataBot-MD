import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝐒𝐔𝐏𝐄𝐑 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🤖', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `📛 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 📛 \n\n𝚃𝙾𝚃𝙰𝙻  : ${data.length}\n\n╭━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣"
return conn.sendButton(m.chat, txt, `𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙽𝙾 𝙻𝙻𝙰𝙼𝙴, 𝙿𝙰𝚁𝙰 𝙴𝚅𝙸𝚃𝙰𝚁 𝚂𝙴𝚁 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾, 𝙶𝚁𝙰𝙲𝙸𝙰𝚂 🤗\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg}𝙽𝙰𝙳𝙸𝙴 𝙷𝙰 𝚂𝙸𝙳𝙾 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 😁`, wm, gata, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
