let handler = async function (m, { conn, text, command, usedPrefix }) {
let miEstado
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let user = global.db.data.users[m.sender]
let name = await conn.getName(m.sender)
let emoji = [ 
'😀', '😃', '😄', '😁', '😆', '🥹', '😅', '😂' ,'🤣', '🥲',
'☺️', '😊' ,'😇', '🙂', '🙃', '😉', '😌' ,'😍', '🥰', '😘', 
'😗', '😙' ,'😚', '😋', '😛', '😝', '😜' ,'🤪', '🤨', '🧐', 
'🤓', '😎' ,'🥸', '🤩', '🥳', '😏', '😒' ,'😞', '😔', '😟',
'😕', '🙁' ,'☹️', '😣', '😖', '😫', '😩' , '🥺', '😢', '😭',
'😤', '😠' ,'😡', '🤬', '🤯', '😳', '🥵' ,'🥶', '😶‍🌫️', '😱',
'😨', '😰' ,'😥', '😓', '🤗', '🤔', '🫣' ,'🤭', '🫢', '🫡',
'🤫', '🫠' ,'🤥', '😶', '🫥', '😐', '🫤' ,'😑', '😬', '🙄',
'😯', '😦' ,'😧', '😮', '😲', '🥱', '😴' ,'🤤', '😪', '😮‍💨',
'😵', '😵‍💫' ,'🤐', '🥴', '🤢', '🤮', '🤧' ,'😷', '🤒', '🤕',
'🤑', '🤠' ,'😈', '👿', '🤡' 
]

let significado = [
'Animado/a', 'Contento/a', 'Feliz', 'Sonriente', 'Risueño/a', 'Orgulloso/a', 'Desenmascarado/a', 'Divertido/a' ,'Gracioso/a', 'Apenado/a',
'Amistoso/a', 'Amable' ,'Inocente', 'Cordial', 'Sarcastico/a', 'Coqueto/a' ,'Aliviado/a', 'Enamorado/a', 'Cariñoso/a', 'Afectuoso/a',
'Amoroso/a', 'Tierno/a', 'Empalagoso/a', 'Gustoso/a' ,'Bromista', 'Disgustado/a', 'Travieso/a', 'Loco/a', 'Desconfiado/a', 'Curioso/a', 
'Estudioso/a', 'Valiente' ,'Disfrazado/a', 'Entusiasmado/a', 'Festivo/a', 'Provocativo/a', 'Decepcionado/a' ,'Deprimido/a', 'Desanimado/a', 'Temeroso/a', 
'Inseguro/a', 'Desconsolado/a' ,'Infeliz', 'Angustiado/a', 'Estresado/a', 'Cansado/a', 'Frustrado/a' ,'Tierno/a', 'Dolorido/a', 'Lloroso/a',
'Exasperado/a', 'Irritado/a' ,'Enojado/a', 'Furioso/a', 'Asombrado/a', 'Sonrojado/a', 'Caluroso/a' ,'Frío/a', 'Timido/a ', 'Asustado/a',
'Preocupado/a', 'Aterrorizado/a' ,'Inquieto/a', 'Debil', 'Apoyado/a', 'Pensativo/a', 'Fascinado/a' ,'Pícaro/a', 'Avergonzado/a', 'Respetado/a',
'Misterioso/a', 'Impaciente' ,'Mentiroso/a', 'Indiferente', 'Introvertido/a', 'Inexpresivo/a', 'Confuso/a' ,'Aburrido/a', 'Incómodo/a', 'Fastidiado/a',
'Maravillado/a', 'Atónito/a' ,'Intranquilo/a', 'Sorprendido/a', 'Impactado/a', 'Fatigado/a', 'Dormido/a' ,'Apetitoso/a', 'Ilusionado/a', 'Resoplido/a',
'Mareado/a', 'Hipnotizado/a' ,'Silencioso/a', 'Espontáneo/a', 'Náuseas', 'Asqueado/a', 'Resfriado/a' ,'Protegido/a', 'Enfermizo/a', 'Lastimado/a',
'Afortunado/a', 'Actor/Actriz' ,'Malvado/a', 'Diabólico/a', 'Payasesco/a'
]

let sections = Object.keys(emoji, significado).map((v, index) => ({ title: `🤔 𝙲𝙾́𝙼𝙾 𝙴𝚂𝚃𝙰́ 𝙷𝙾𝚈?`,
rows: [{ title: `» ${emoji[v]}${emoji[v]}${emoji[v]}${emoji[v]}`, description: `${1 + index}. ${significado[v]}`, rowId: usedPrefix + command + ' ' + text + significado[v] + ' ' + emoji[v], }], }))

const listMessage = {
text: `❖ ${user.registered === true ? user.name : name}\n👋 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝚂𝚄 𝙴𝚂𝚃𝙰𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤗\n❖ 𝚂𝚄 𝙴𝚂𝚃𝙰𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻: ${typeof user.miestado === 'string' ? user.miestado : 'Estado no asignado'}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "👉 𝐌𝐈 𝐄𝐒𝐓𝐀𝐃𝐎 👈",
sections
} 

if (command == 'miestado') { 
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
miEstado = text.trim()
user.miestado = miEstado
if (text) return conn.sendButton(m.chat, eg + `𝙶𝙴𝙽𝙸𝙰𝙻!! 𝚂𝙴 𝙷𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄𝙽 𝙴𝚂𝚃𝙰𝙳𝙾 🥳\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n` + `❖ 𝚂𝚄 𝙴𝚂𝚃𝙰𝙳𝙾: ${user.miestado}`, wm, null, [[`MENU`, usedPrefix + 'menu']], m)
miEstado = 0
}}
handler.command = ['miestado'] 
export default handler
