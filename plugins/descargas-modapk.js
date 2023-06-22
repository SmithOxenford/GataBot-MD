let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙱𝚄𝚂𝙲𝙰𝚁 🤗`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 ☹️' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: '𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐄𝐋 𝐌𝐎𝐃 𝐀 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑', rows: srh}]
const listMessage = {text: `╭┄〔 🤖 𝐌𝐎𝐃𝐎 𝐀𝐏𝐊 🤖 〕┄⊱ ]\n┆——————«•»——————\n┆- 📟 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 𝐃𝐄 : ${text}\n╰━━⊰ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ⊱━━━დ`, footer: wm, title: null, buttonText: "𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝘼𝙌𝙐𝙄", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁\n 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 : *${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `${lenguajeGB['smsAvisoFG']()} 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾́ 𝙽𝙸𝙽𝙶𝚄𝙽 𝙼𝙾𝙳𝙾 𝙰𝙿𝙺 𝙲𝙾𝙽 𝙴𝚂𝙴 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝙻𝙰 𝙰𝙿𝙸 (𝙿𝙰𝙶𝙸𝙽𝙰) 𝙴𝚂𝚃𝙰 𝙲𝙰𝙸́𝙳𝙰 ☹️`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
handler.limit = 3
handler.register = true
handler.level = 6
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
