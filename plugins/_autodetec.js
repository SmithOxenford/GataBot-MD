import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup) return
	let usuario = `@${m.sender.split`@`[0]}`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `📢 ${usuario} 𝙷𝙰𝚂 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙰:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `📢 ${usuario} 𝙷𝙰𝚂 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `📢 ${usuario} 𝙻𝙰 𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `📢 𝙰𝙷𝙾𝚁𝙰 *${m.messageStubParameters[0] == 'on' ? '𝚂𝙾𝙻𝙾 𝙰𝙳𝙼𝙸𝙽𝚂' : '𝚃𝙾𝙳𝙾𝚂'}* 𝙿𝚄𝙴𝙳𝙴𝙽 𝙴𝙳𝙸𝚃𝙰𝚁 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾! 😏`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 *${m.messageStubParameters[0] == 'on' ? '𝙴𝚂𝚃𝙰 𝙲𝙴𝚁𝚁𝙰𝙳𝙾 🔒' : '𝙴𝚂𝚃𝙰 𝙰𝙱𝙸𝙴𝚁𝚃𝙾 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝚂𝙾𝙻𝙾 𝙰𝙳𝙼𝙸𝙽𝚂 𝙿𝚄𝙴𝙳𝙴𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙿𝙸𝙿𝙸𝙿𝙸 😔' : '𝚈𝙰 𝙿𝚄𝙴𝙳𝙴𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝚃𝙾𝙳𝙾𝚂 𝙶𝙰𝙰𝙰 🤑'} `, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾! 🥳\n\n😏 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝙿𝙾𝚁: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝙳𝙴𝙹𝙰 𝙳𝙴 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️\n\n😏 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰 𝙿𝙾𝚁: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `📢 ${usuario} 𝙲𝙰𝙼𝙱𝙸𝙾 𝙻𝙰 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙻𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙴𝚂 𝙰 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `📢 ${usuario} 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙻𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙴𝚂!`, mentions: [m.sender] }, { quoted: fkontak })
	} else {
		console.log({
			messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType], 
		});
	}
}
