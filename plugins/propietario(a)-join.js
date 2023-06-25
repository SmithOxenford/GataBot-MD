let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}🙌 𝙳𝙴𝙱𝙴 𝙳𝙴 𝚂𝙴𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴\n𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾.\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*#unete ${nn}*\n\n_#join ${nnn}_`

if ( isMods || isOwner || m.fromMe) {
m.reply(`𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 🤖 𝚂𝙴 𝙷𝙰 𝚄𝙽𝙸𝙳𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾! ✅`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐔𝐃 𝐏𝐀𝐑𝐀 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎\n╰══•───────────────•══╯\n\n👤 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐍𝐓𝐄\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n🔮 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎\n ' + link, jid)

m.reply(`${ag}✅ 𝚂𝚄 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴 𝙴𝙽𝚅𝙸𝙾́ 𝙰 𝙼𝙸́ 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾(𝙰)\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ 𝚂𝚄 𝙶𝚁𝚄𝙿𝙾 𝚂𝙴𝚁𝙰́ 𝙴𝚅𝙰𝙻𝚄𝙰𝙳𝙾 𝚈 𝚀𝚄𝙴𝙳𝙰𝚁𝙰́ 𝙰 𝙳𝙴𝙲𝙸𝚂𝙸𝙾́𝙽 𝙳𝙴 𝙼𝙸́ 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾(𝙰) 𝚂𝙸 ${gt} 𝚂𝙴 𝚄𝙽𝙴 𝙾 𝙽𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚂𝚄 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝚂𝙴𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝙳𝙰 𝙿𝙾𝚁 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙲𝙰𝚄𝚂𝙰𝚂 :*\n1️⃣ 𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂𝚃𝙰́ 𝚂𝙰𝚃𝚄𝚁𝙰𝙳𝙾.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ 𝙴𝙻 𝙱𝙾𝚃 𝙵𝚄𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙽𝙾 𝙲𝚄𝙼𝙿𝙻𝙴 𝙲𝙾𝙽 𝙻𝙰𝚂 𝙽𝙾𝚁𝙼𝙰𝚃𝙸𝚅𝙰𝚂 𝙳𝙴 ${gt}\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝚂𝙴 𝚁𝙴𝚂𝚃𝙰𝙱𝙻𝙴𝙲𝙸𝙾́.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ 𝙽𝙾 𝚂𝙴 𝙰𝙶𝚁𝙴𝙶𝙰 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 𝚂𝙴𝙶𝚄́𝙽 𝙼𝙸 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾(𝙰).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 𝙻𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙿𝚄𝙴𝙳𝙴 𝚃𝙰𝚁𝙳𝙰𝚁 𝙷𝙾𝚁𝙰𝚂 𝙴𝙽 𝚂𝙴𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙰. 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚃𝙴𝙽𝙴𝚁 𝙿𝙰𝙲𝙸𝙴𝙽𝙲𝙸𝙰. 𝙶𝚁𝙰𝙲𝙸𝙰𝚂`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
