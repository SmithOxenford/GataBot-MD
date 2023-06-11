let handler = async (m, { conn, usedPrefix, text }) => {
    if (conn.user.jid !== global.conn.user.jid) throw false
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '〔 𝐃𝐈𝐅𝐔𝐒𝐈𝐎𝐍 𝐀 𝐒𝐔𝐁 𝐁𝐎𝐓𝐒 〕\n\n' + teks)
    for (let id of users) {
      await delay(1500)
      await conn.copyNForward(id, content, true)
    }
    conn.reply(m.chat, `𝙳𝙸𝙵𝚄𝚂𝙸𝙾𝙽 𝙴𝙽𝚅𝙸𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰 ${users.length} 𝚂𝚄𝙱 𝙱𝙾𝚃𝚂
    
  ${users.map(v => 'Wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}estado`).join('\n')}
  \n𝚂𝙴 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙴𝙽𝚅𝙸𝙾 𝙴𝙽 ${users.length * 1.5} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙰𝙿𝚁𝙾𝚇𝙸𝙼𝙰𝙳𝙰𝙼𝙴𝙽𝚃𝙴`.trim(), m)
  }
  handler.command = /^bcbot$/i
  handler.owner = true
  
  export default handler
  
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(4001)
  
  const delay = time => new Promise(res => setTimeout(res, time))
