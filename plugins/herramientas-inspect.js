import * as baileys from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🤗`
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
	if (pp) return conn.sendMessage(m.chat, { image: { url: pp }, caption: txt }, { quoted: m })
	let groupinfo = `*┏━━━━━━━━━━━━━━━┓*
┃☂️ ⫹⫺ 𝐈𝐃 : ${data.id}
┃🧪 ⫹⫺ 𝐍𝐎𝐌𝐁𝐑𝐄 : ${data.subject}
┃📅 ⫹⫺ 𝐂𝐑𝐄𝐀𝐃𝐎 : ${data.creation}
┃👑 ⫹⫺ 𝐎𝐖𝐍𝐄𝐑 : ${data.owner}
┃👇 ⫹⫺ 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾́𝙽 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙰́𝙽 𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝙲𝙸𝙾́𝙽 👇
*┗━━━━━━━━━━━━━━━┛*`
	await conn.reply(m.chat, groupinfo, m)
	await conn.reply(m.chat, `${data.desc}`, m)
}
handler.command = /^(inspect)$/i
handler.register = true
handler.level = 3
export default handler

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] :
			// group.attrs.s_o ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.s_o).split('@')[0] :
			group.attrs.id.includes('-') ? 'wa.me/' + group.attrs.id.split('-')[0] : '',
		desc
	}
	return metadata
}

/*import * as baileys from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw '*⚠️ Ingrese el link de un grupo*'
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
		let groupinfo = `
*┏━━━━━━━━━━━━━━━┓*
*┃☂️ ⫹⫺ ID:* ${data.id}◞
*┃🧪 ⫹⫺ Nombre:* ${data.subject}
*┃📅 ⫹⫺ Creado:* ${data.creation}
*┃👑 ⫹⫺ Owner:* ${data.owner}
*┗━━━━━━━━━━━━━━━┛*
`
	await conn.reply(m.chat, groupinfo, m)
	const botones = [
{index: 1, urlButton: {displayText: `Copiar Descripción 🍓`, url: `https://www.whatsapp.com/otp/copy/${data.desc}`}},
]
await conn.sendMessage(m.chat, { text: `*┏━━━━━━━━━━━━━━┓*\n┃¿Desa copiar la desc? •🌷\n*┗━━━━━━━━━━━━━━┛*`, templateButtons: botones, footer: wm })
}
handler.command = /^(inspect)$/i

export default handler
handler.owner = false

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}*/
