const express = require('express')
const app = express()
const Telegrambot = require('node-telegram-bot-api')
const axios  = require('axios');
const cheerio  = require('cheerio');





const token = '7992238831:AAEDUmQuPjqK8vzIOTbVS5OQELhaIJ7JOdo';

const bot = new Telegrambot(token, { polling: true })





bot.onText(/\/start/, (msg, match) => {
	const chatid = msg.chat.id; 
	const resp = match[1];
  

	bot.sendMessage(chatid, "Welcome to CodeDaily Bot Made By Sachin Mehta \n\n 🚀 CodeDaily Update 🚀 \n\n Hello, Coders! 👋 \n\n We’re currently working on an exciting new bot to make learning programming fun and engaging through memes! 🎉 \n\n For now, CodeDaily is on pause, but we’ll be back with something even better! Stay tuned and get ready for an amazing coding experience! \n\n 🔹 Follow for updates \n\n 🔹 Stay curious, keep coding! \n\n 🔹 We Will Shortly update for our new Bot  \n\n — The CodeDaily Team ");
});



bot.onText(/\/challenge/, async (msg) => {
    const chatid = msg.chat.id;

    bot.sendMessage(chatid, "🚀 CodeDaily Update 🚀 \n\n Hello, Coders! 👋 \n\n We’re currently working on an exciting new bot to make learning programming fun and engaging through memes! 🎉 \n\n For now, CodeDaily is on pause, but we’ll be back with something even better! Stay tuned and get ready for an amazing coding experience! \n\n 🔹 Follow for updates \n\n 🔹 Stay curious, keep coding! \n\n 🔹 We Will Shortly update for our new Bot  \n\n — The CodeDaily Team ")

});

bot.onText(/\/bytesizedconcepts/, async (msg) => {
    chatid = msg.chat.id;

    bot.sendMessage(chatid,"🚀 CodeDaily Update 🚀 \n\n Hello, Coders! 👋 \n\n We’re currently working on an exciting new bot to make learning programming fun and engaging through memes! 🎉 \n\n For now, CodeDaily is on pause, but we’ll be back with something even better! Stay tuned and get ready for an amazing coding experience! \n\n 🔹 Follow for updates \n\n 🔹 Stay curious, keep coding! \n\n 🔹 We Will Shortly update for our new Bot \n\n — The CodeDaily Team ")
})




bot.on('Hello CodeDaily', (msg) => {
	const chatId = msg.chat.id;


	bot.sendMessage(chatId, 'Hello! Welcome to CodeDaily Bot');
})