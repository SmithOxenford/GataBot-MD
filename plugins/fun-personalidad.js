let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ingrese un nombre?', m)
	
  let personalidad = `
┏━━°❀❬ 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃 ❭❀°━━┓
*┃*
*┃• 𝙽𝙾𝙼𝙱𝚁𝙴 : ${text}
*┃• 𝙱𝚄𝙴𝙽𝙰 𝙼𝙾𝚁𝙰𝙻 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙼𝙰𝙻𝙰 𝙼𝙾𝚁𝙰𝙻 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 : ${pickRandom(['De buen corazón','Arrogante','Tacaño','Generoso','Humilde','Tímido','Cobarde','Entrometido','Cristal','No binarie XD', 'Pendejo'])}
*┃• 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 : ${pickRandom(['Pesado','De malas','Distraido','De molestoso','Chismoso','Pasa jalandosela','De compras','Viendo anime','Chatea en WhatsApp porque esta soltero','Acostado bueno para nada','De mujeriego','En el celular'])}
*┃• 𝙸𝙽𝚃𝙴𝙻𝙸𝙶𝙴𝙽𝙲𝙸𝙰 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙼𝙾𝚁𝙾𝚂𝙸𝙳𝙰𝙳 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙲𝙾𝚁𝙰𝙹𝙴 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙼𝙸𝙴𝙳𝙾 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙵𝙰𝙼𝙰 : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• 𝙶𝙴́𝙽𝙴𝚁𝙾 : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidad *<nombre>*']
handler.tags = ['fun']
handler.command = /^personalidad/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}