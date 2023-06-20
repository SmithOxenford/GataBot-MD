import moment from 'moment-timezone'

let handler = async (m, { conn }) => {  
const fechaper = moment().tz('America/Lima').format('DD/MM HH:mm')
const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm')
const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm')
const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm')
const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm')
const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm')
const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm')
const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm')
const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm')
const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm')
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm')
const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm')
const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm')
const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm')
const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm')
const fechanew = moment().tz('America/New_York').format('DD/MM HH:mm')
const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm')
const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm')
const fechaafri = moment().tz('Africa/Malabo').format('DD/MM HH:mm')
await conn.sendMessage(m.chat, { text: `\`\`\`
「 🗺️ 𝐙𝐎𝐍𝐀 𝐇𝐎𝐑𝐀𝐑𝐈𝐀 🗺️ 」
⏱️*_Peru_*       : ${fechaper}
⏱️*_Mexico_*     : ${fechamex}
⏱️*_Bolivia_*    : ${fechabol}
⏱️*_Chile_*      : ${fechachi}
⏱️*_Argentina_*  : ${fechaarg}
⏱️*_Colombia_*   : ${fechacol}
⏱️*_Ecuador_*    : ${fechaecu}
⏱️*_Costa_Rica_* : ${fechacosr}
⏱️*_Cuba_*       : ${fechacub}
⏱️*_Guatemala_*  : ${fechagua}
⏱️*_Honduras_*   : ${fechahon}
⏱️*_Nicaragua_*  : ${fechanic}
⏱️*_Panama_*     : ${fechapan}
⏱️*_Uruguay_*    : ${fechauru}
⏱️*_Venezuela_*  : ${fechaven}
⏱️*_Paraguay_*   : ${fechapar}
⏱️*_New York_*   : ${fechanew}
⏱️*_Indonesia_*  : ${fechaasi}
⏱️*_Brasil_*     : ${fechabra}
⏱️*_G.N.Q_*      : ${fechaafri}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
💻 𝚉𝙾𝙽𝙰 𝙷𝙾𝚁𝙰𝚁𝙸𝙰 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 𝙰𝙲𝚃𝚄𝙰𝙻 : \n*[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]*\n*${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}*` }, {quoted: m })
}

handler.help = ['horario']
handler.tags = ['info']
handler.command = /^(horario)$/i

export default handler
