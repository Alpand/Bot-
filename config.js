import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6282389924037', 'VynaaValerie', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6282389924037'
global.packname = 'Made With'
global.author = '© Vynaa Valerie'
global.namebot = 'Clara - MD'
global.wm = '© Clara - MD'
global.stickpack = 'Made With'
global.stickauth = '© Clara - MD'
global.fotonya = 'https://telegra.ph/file/7a72c74871ac2fb87b8df.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/vynaa_valerie'
global.sgh = 'https://github.com/VynaaValerie'
global.sgc = 'https://whatsapp.com/channel/0029VaHPYh6LNSa81M9Xcq1K'
// Payment
global.dana = '082389924037'
// Info Wait
global.wait = '_Wait a moment_....'
global.eror = './vn/eror.mp3'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})