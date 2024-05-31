const TelegramApi = require('node-telegram-bot-api')
const token = '7488790532:AAHkweKMNbEg_iOWZJaJEBZPWDMh3hLP5Tk'

const bot = new TelegramApi(token, { polling: true })
const kb = require('./keyboard-button')
const keyboard = require('./keyboard')

const start = async () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Початкове привітання' },
		{ command: '/info', description: 'Інформація про користувача' },
	])

	bot.on('message', async msg => {
		const chatId = msg.chat.id
		const text = msg.text

		if (text === '/start') {
			await bot.sendSticker(
				chatId,
				'https://media.stickerswiki.app/full_stitch/743914.512.webp'
			)
			return bot.sendMessage(chatId, `Вітаю, ${msg.from.first_name}`, {
				reply_markup: {
					keyboard: keyboard.home,
				},
			})
		}

		if (text === '/info') {
			return bot.sendMessage(chatId, `Ваш юзер нейм @${msg.from.username}`)
		}

		switch (text) {
			case kb.home.mkl:
				await bot.sendMessage(chatId, 'Оберіть один із пунктів', {
					reply_markup: { keyboard: keyboard.mk },
				})
				break
			default:
				await bot.sendMessage(chatId, 'Я тебе не розумію, спробуй ще раз!)')
				break
		}
	})
}

start()
