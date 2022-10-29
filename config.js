const fs = require('fs')
const chalk = require('chalk')

// MAKASIHLAH KE BANG ZENZ :)
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	botcah: 'https://botcahx.ddns.net/api',
}

// HMM UDAH FREE DECK
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// NAMBAH BOLEH HAPUS JANGAN -_-
global.creator = ['6281807254833']
global.pcrnyacreat = ['6281807254833']
global.ownernomer = "6281807254833"
global.owner = ['6281807254833','6281807254833','6281807254833','6281807254833','6288272480997']
global.thanksto = ['6281807254833','6281807254833','6288272480997','6288272480997']
global.premium = ['6281807254833']
global.packname = 'IBNU-MD'
global.author = 'IBNU OFFICIAL🅥⁩ '
global.author1 = 'IBNU-MD'
global.sessionName = 'Isman'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/isman.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
