let handler  = async (m, { conn, usedPrefix, command }) => {
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

let picture = './media/menus/Menu1.jpg'
let gata = `𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 
𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚃𝙴 𝙲𝙾𝙽 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚂𝚄 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾́𝙽 🤗`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler