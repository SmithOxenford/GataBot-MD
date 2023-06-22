import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
//let com = `${usedPrefix}`
//let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   



const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
} 
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let mentionedJid = [who]
  let username = conn.getName(who)  
  
if (command == 'multijuegos') { 
  global.db.data.users[m.sender].limit += 1

              //let gata = `${pickRandom([`𝙋𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧!!`,`𝙎𝙞𝙜𝙪𝙚 𝙟𝙪𝙜𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙜𝙖𝙣𝙖𝙧 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨!!`,`𝙎𝙖𝙗𝙞𝙖𝙨 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧? 𝘼𝙝𝙤𝙧𝙖 𝙮𝙖 𝙡𝙤 𝙨𝙖𝙗𝙚𝙨!!`])}`
            //let s = `Bienvenido al Multijuegos Aleeatorios`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙈𝙖𝙠𝙖𝙣𝙖𝙠𝙮𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/SmithOxenford/MakanakyBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/adri2.pc/'}},
{index: 3, quickReplyButton: {displayText: '𝙄𝙣𝙞𝙘𝙞𝙖𝙧 ✨', id: '.juegos'}},
{index: 4, quickReplyButton: {displayText: '𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 🎡', id: '#juegosmenu'}},
{index: 5, quickReplyButton: {displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', id: '#menu'}},
]
 
let t = {
text: global.wm,
footer: `𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾(𝙰) ${username}\n𝙹𝚄𝙴𝙶𝙰 𝚄𝙽𝙰 𝙶𝚁𝙰𝙽 𝚅𝙰𝚁𝙸𝙴𝙳𝙰𝙳 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾𝚂!! 😁`,
templateButtons: templateButtonsReplyMessage
  }
conn.sendMessage(m.chat, t, m)
}
  
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].money += 5
    let gata = `${pickRandom([`𝙿𝚄𝙴𝙳𝙴𝚂 𝙶𝙰𝙽𝙰𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙰𝙻 𝙹𝚄𝙶𝙰𝚁!! 😏`,`𝚂𝙸𝙶𝚄𝙴 𝙹𝚄𝙶𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝙶𝙰𝙽𝙰 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂!! 😁`,`𝚂𝙰𝙱𝙸́𝙰𝚂 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝙶𝙰𝙽𝙰𝚁 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 𝙰𝙻 𝙹𝚄𝙶𝙰𝚁? 𝙰𝙷𝙾𝚁𝙰 𝚈𝙰 𝙻𝙾 𝚂𝙰𝙱𝙴𝚂!! 🤗`])}`
             let c = `${usedPrefix}`
              let juegos = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}topgays`,`${c}topotakus`,`${c}mates medium`,`${c}mates noob`])}`
               let juegos2 = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}formarpareja`,`${c}ppt tijeras`,`${c}ppt piedra`])}`
                let juegos3 = `${pickRandom([`${c}gay`,`${c}ppt papel`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                 let emojis1 = `${pickRandom([`🦁`,`🐮`,`🦖`,`👻`,`🐈`,`🐆`,`🐅`,`🐒`])}`
                  let emojis2 = `${pickRandom([`💟`,`☮️`,`☪️`,`☯️`,`🕉️`,`☸️`,`✡️`,`🔯`])}`
                   let emojis3 = `${pickRandom([`🛸`,`🚁`,`🚀`,`🧠`,`✈️`,`🚤`,`🚢`,`🚗`])}`
              

              let ss = await `𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 | 𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀𝐍𝐂𝐇𝐄𝐙`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙈𝙖𝙠𝙖𝙣𝙖𝙠𝙮𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/SmithOxenford/MakanakyBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/adri2.pc//'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
 
let tt = {
text: ss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, tt, m)
} 
    
  
 if (command == 'juegos') {
   global.db.data.users[m.sender].money += 10
   let gata = `${pickRandom([`𝙳𝙴𝙼𝚄𝙴𝚂𝚃𝚁𝙰 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝙻𝙻𝙴𝙶𝙰𝚁 𝙰𝙻 𝚃𝙾𝙿 𝟷!! 😏`,`𝙼𝙸𝙴𝙽𝚃𝚁𝙰𝚂 𝙼𝙰́𝚂 𝙹𝚄𝙴𝙶𝙰𝚂 𝚃𝚄 𝚁𝙰𝙽𝙶𝙾 𝚂𝚄𝙱𝙸𝚁𝙰́!! 😁`,`𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰 𝙴𝙽 𝙴𝙻 𝙼𝙾𝙳𝙾 𝙼𝚄𝙻𝚃𝙸𝙹𝚄𝙴𝙶𝙾𝚂 𝚈 𝙶𝙰𝙽𝙰 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰𝚂!! 🤗`])}`
            let c = `${usedPrefix}`
             let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
              let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
               let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                let emojis1 = `${pickRandom([`😃`,`😳`,`🤑`,`🤠`,`🤭`,`😇`,`😋`,`🥴`])}`
                 let emojis2 = `${pickRandom([`🕵🏻‍♀️`,`🕵🏽‍♀️`,`🕵🏻‍♂️`,`🕵🏾‍♂️`,`👩🏿‍⚕️`,`🧑🏿‍⚕️`,`👩🏻‍⚕️`,`🧑🏻‍⚕️`,`👩🏼‍⚕️`,`🧑🏼‍⚕️`,`👩🏻‍🍳`,`🧑🏽‍🍳`,`👩🏾‍🍳`,`🧑🏿‍🍳`,`👩🏻‍🎓`,`👩🏼‍🎓`,`🧑🏾‍🎓`,`🧑🏻‍🎓`,`👩🏿‍🚀`,`🧑🏾‍🚀`,`👩🏽‍🚀`,`🧑🏽‍🚀`,`👩🏻‍⚖️`,`🧑🏻‍⚖️`,`👩🏽‍⚖️`,`🧑🏾‍⚖️`,`👩🏼‍⚖️`,`🧑🏼‍⚖️`,`🧙🏾‍♀️`,`🧙🏾‍♂️`,`🧙🏻‍♀️`,`🧙🏻‍♂️`,`🧚🏻‍♀️`,`🧚🏻‍♂️`,`🧚🏿‍♀️`,`🧚🏿‍♂️`,`🧚🏽‍♀️`,`🧚🏽‍♂️`,`🧞‍♀️`,`🧞‍♂️`,`👩🏻‍🎨`,`👩🏼‍🎨`,`👩🏿‍🎨`,`🧑🏻‍🎨`,`🧑🏼‍🎨`,`🧑🏿‍🎨`])}`
                  let emojis3 = `${pickRandom([`🍑`,`🍒`,`🍕`,`🍡`,`🍨`,`🥧`,`🍜`,`🍛`,`🍫`,`🫒`,`🍆`,`🍩`,`🍪`,`🍿`])}`

           let sss = await `𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 | 𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀𝐍𝐂𝐇𝐄𝐙`

 const templateButtonsReplyMessage = [
  {index: 1, urlButton: {displayText: '𝙈𝙖𝙠𝙖𝙣𝙖𝙠𝙮𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/SmithOxenford/MakanakyBot-MD'}},
  {index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/adri2.pc//'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let ttt = {
text: sss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, ttt, m)
}
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].exp += 20
    let gata = `${pickRandom([`𝙴𝙻𝙸𝙹𝙴 𝚃𝚄 𝙴𝙼𝙾𝙹𝙸 𝙵𝙰𝚅𝙾𝚁𝙸𝚃𝙾 𝙿𝙰𝚁𝙰 𝙹𝚄𝙶𝙰𝚁!! 😁`,`𝙰𝙳𝙸𝚅𝙸𝙽𝙰 𝙴𝙻 𝙿𝚁𝙾́𝚇𝙸𝙼𝙾 𝙹𝚄𝙴𝙶𝙾!! 😁`,`𝙰𝙳𝙸𝚅𝙸𝙽𝙰 𝙴𝙻 𝙿𝚁𝙾́𝚇𝙸𝙼𝙾 𝙹𝚄𝙴𝙶𝙾!! 😏`,`𝙼𝙸𝙽𝙸𝙹𝚄𝙴𝙶𝙾𝚂 𝙴𝚂𝚃𝙰́𝙽 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙴𝙽 𝚂𝙴𝚁 𝙹𝚄𝙶𝙰𝙳𝙾𝚂!! 🤗`])}`
                 let c = `${usedPrefix}`
                  let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
                   let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                    let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                     let emojis1 = `${pickRandom([`🎄`,`🌲`,`🌴`,`🌱`,`🌿`,`☘️`,`🍀`,`🍃`,`🍂`,`🍁`,`🍄`,`🌷`,`🌹`,`💐`,`🌼`,`🌻`,`🌺`,`🌸`])}`
                      let emojis2 = `${pickRandom([`❤️`,`🧡`,`💛`,`💚`,`💙`,`💜`,`🖤`,`💔`,`❤️‍🔥`,`❤️‍🩹`,`❣️`,`💕`,`💞`,`💓`,`💗`,`💖`,`💘`,`💝`])}`
                       let emojis3 = `${pickRandom([`🥊`,`🥋`,`🎣`,`🎊`,`🎉`,`🎈`,`✨`,`⭐`,`💫`,`🌟`,`🌈`,`🔥`,`💥`,`☃️`,`❄️`,`⛱️`,`🗿`,`🔮`])}`
         
                 let ssss = await `𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 | 𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀𝐍𝐂𝐇𝐄𝐙`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let tttt = {
text: ssss,
footer: `${gata}`,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
  
  
      
   if (command == 'juegos') { 
      global.db.data.users[m.sender].exp += 20
     let gata = `${pickRandom([`𝙲𝙰𝚁𝙶𝙰 𝙼𝙰́𝚂 𝙹𝚄𝙴𝙶𝙾𝚂 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙱𝙾𝚃𝙾́𝙽 𝙼𝙰́𝚂 𝙹𝚄𝙴𝙶𝙾𝚂!! 🤗`,`𝙳𝙸𝙽𝙰́𝙼𝙸𝙲𝙰𝚂, 𝚁𝙴𝚃𝙾𝚂, 𝙰𝙿𝚄𝙴𝚂𝚃𝙰𝚂, 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 𝚈 𝙼𝚄𝙲𝙷𝙾 𝙼𝙰́𝚂!! 🤑`])}`
                 let c = `${usedPrefix}`
                  let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                   let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                    let emojis1 = `${pickRandom([`🏳️`,`🏴`,`🏴‍☠️`,`🏁`,`🚩`,`🏳️‍🌈`,`🏳‍⚧`,`🇧🇷`,`🇨🇱`,`🇦🇷`,`🇧🇴`,`🇻🇪`,`🇭🇳`,`🇺🇾`,`🇨🇴`,`🇵🇪`,`🇵🇦`,`🇳🇮`,`🇬🇹`,`🇨🇺`,`🇨🇷`,`🇭🇹`,`🇩🇴`,`🇲🇽`,`🇸🇻`,`🇬🇾`,`🇺🇸`,`🇨🇦`,`🇱🇨`,`🇪🇨`])}`
                     let emojis2 = `${pickRandom([`🌁`,`🌉`,`🌌`,`🌃`,`🏙️`,`🌆`,`🌇`,`🎆`,`🎇`,`🌠`,`🌄`,`🌅`,`🏞️`,`🎑`,`🗾`,`🏜️`,`🏝️`,`🏖️`,`🗼`,`🗽`,`🗺️`,`🏗️`])}`
         
                 let ssss = await `𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 | 𝐀𝐃𝐑𝐈𝐀𝐍𝐎 𝐒𝐀𝐍𝐂𝐇𝐄𝐙`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos2}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos3}},
{index: 5, quickReplyButton: {displayText: '🎁 𝙈𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙍𝙚𝙨𝙩𝙖𝙧𝙩', id: '#juegos'}},
]
let tttt = {
text: ssss,
footer: gata,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
 }
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['multijuegos', 'juegos']
handler.group = true
//handler.exp = 200
//handler.money = 200
export default handler
                              
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
