let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💙 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰 𝙻𝙰𝚂 𝙲𝚄𝙴𝙽𝚃𝙰𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 🥳
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 - 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀
${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝚂𝙸 𝚃𝙸𝙴𝙽𝙴𝙽 𝙳𝚄𝙳𝙰𝚂, 𝚂𝚄𝙶𝙴𝚁𝙴𝙽𝙲𝙸𝙰𝚂, 𝙾 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰𝚂 𝚂𝙾𝙻𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙽 𝙿𝙾𝚁 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 👀.`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
