import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
   let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   
  if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝚃𝙸𝚃𝚄𝙻𝙾\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎 :\n*${usedPrefix + command}* _Billie Eilish - Bellyache_`
  try {
    var vid = (await youtubeSearch(text)).video[0]
    var { title, 
          description, 
          thumbnail, 
          videoId, 
          durationH, 
          durationS,
          viewH,
          publishedTime
                         } = vid
    var url = 'https://www.youtube.com/watch?v=' + videoId

   let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video`

    let web = `https://yt.btch.bz/downloadAudio?URL=${url}&videoName=video`
    var tmb = thumbnail
if (command == 'play') {	
    var captionvid = `𓆩 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 𓆪

ও 𝐓𝐈𝐓𝐔𝐋𝐎 :
» *_${title}_* 
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 : 
» _${description}_
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 :
» ${timestamp}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐕𝐈𝐒𝐓𝐀𝐒 :
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐔𝐑𝐋 :
» _${url}_

𓆩 𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 𓆪`
    var pesan = await conn.sendMessage(m.chat, {
    text: captionvid,
    contextInfo: {
    externalAdReply: {
    title: "𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋",
    body: "𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖",
    thumbnailUrl: tmb ,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}})

    conn.sendMessage(m.chat, { audio: { url: web }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: title,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: m })
}
if (command == 'play2') {
var captionvid = `𓆩 𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 𓆪

ও 𝐓𝐈𝐓𝐔𝐋𝐎 :
» *_${title}_* 
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 : 
» _${description}_
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 :
» ${timestamp}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐕𝐈𝐒𝐓𝐀𝐒 :
» ${viewH}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝐔𝐑𝐋 :
» _${url}_

𓆩 𝐓𝐇𝐄 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 𓆪`
    var pesan = await conn.sendMessage(m.chat, {
      text: captionvid,
      contextInfo: {
        externalAdReply: {
          title: "𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋",
          body: "𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖",
          thumbnailUrl: tmb ,
          sourceUrl: vide,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    })
  conn.sendMessage(m.chat, {
      video: {
        url: vide,
        mimetype: 'video/mp4',
        caption: `╭━❰ 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋 ❱━⬣\n┃ 💜 𝐓𝐈𝐓𝐔𝐋𝐎 :\n┃ *_${title}_*\n╰━━━━━❰ ${vs} ❱━━━━⬣`,  
        attributes: [
          {
            name: 'controls',
            value: 'true'
          },
          {
            name: 'autoplay',
            value: 'true'
          }
        ]
      }
    }, { quoted: m })
    }
} catch {
try {
    conn.reply(m.chat, `⚠️ 𝙴𝚁𝚁𝙾𝚁/𝙵𝙰𝙻𝙻𝙾 ⚠️\n𝚂𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙳𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝚂𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 𝙿𝙾𝚁 𝙴𝙻 𝙾𝚃𝚁𝙾 𝚂𝙴𝚁𝚅𝙴𝚁, 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐀𝐐𝐔𝐈́ 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎! 💋',
body: '𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖',         
previewType: 0, thumbnail: fs.readFileSync(""),
sourceUrl: ``}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)
} catch {  
}}} 
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
handler.exp = 0
handler.limit = 1
export default handler
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}
async function delay(ms) {
   await new Promise(resolve => setTimeout(resolve, ms));
}