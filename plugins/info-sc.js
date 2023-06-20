
let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys")).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `🫶 ${md}\n\n*⏰ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:\n \t${pad(days)} 𝙳𝙸𝙰𝚂 \t ${pad(hours)} 𝙷𝙾𝚁𝙰𝚂 ${pad(minutes)} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 ${pad(seconds)} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 \t\n@adri2.sp`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi Sis',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: 'https://github.com/SmithOxenford/MakanakyBot-MD',
thumbnail: fs.readFileSync('./src/avatar_contact.png')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
		//	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(runtime|sc|activo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


export default handler
