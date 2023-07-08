let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.isGroup) throw 'Este comando solo puede ser ejecutado en grupos.'
  
  let time = global.db.data.users[m.sender].lastrob + 7200000
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️ ESPERA ${msToTime(time - new Date())}\n NO PUEDES USAR EL COMANDO HASTA DENTRO DE ${msToTime(7200000)}`
  
  let [pesan, jumlah] = text.split('|')
  if (!pesan) throw `INGRESA EL TEXTO QUE DESEAS SPAMEAR 😁\n❊ *${usedPrefix + command}* _texto | cantidad_\nEJEMPLO:\n❊ *${usedPrefix + command}* _Hola a todos|35_`
  
  if (jumlah && isNaN(jumlah)) throw `EL NÚMERO DE MENSAJES DEBE SER UN NÚMERO ENTERO\n❊ *${usedPrefix + command}* _texto | cantidad_\nEJEMPLO:\n❊ *${usedPrefix + command}* _Hola a todos|35_`
  
  await delay(10000)
  let groupList = await conn.getAllGroups()
  let fixedJumlah = jumlah ? jumlah * 1 : 10
  if (fixedJumlah > 10) throw `${fg} MÁXIMO 10 MENSAJES POR SPAM 😁`
  
  await delay(10000)
  await m.reply(`${eg}INICIANDO SPAM EN *${groupList.length}* GRUPOS`)
  await delay(10000)
  
  for (let group of groupList) {
    await delay(10000)
    if (group.id !== 0) conn.sendMessage(group.id, pesan.trim(), 'chat')
  }
  
  global.db.data.users[m.sender].lastrob = new Date() * 1
}

handler.help = ['spamgrupos <texto>|<cantidad>']
handler.tags = ['General']
handler.command = /^spam(grupos)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
handler.limit = 60

export default handler

const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds
  
  return hours + " Hora(s) " + minutes + " Minuto(s) " + seconds + " Segundo(s)"
}
