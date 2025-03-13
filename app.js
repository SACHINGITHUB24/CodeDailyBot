const express = require('express')
const app = express()
const Telegrambot = require('node-telegram-bot-api')


const token = '7992238831:AAEDUmQuPjqK8vzIOTbVS5OQELhaIJ7JOdo';

const bot = new Telegrambot(token, {polling: true})


bot.onText(/\/start/ , (msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatid, "Welcome to CodeDaily Bot Made By Sachin Mehta");
});

const problem  = {
    Challenge: "Print Hello World",
    Difficulty: "Easy",
    title: "Hello World",
    Explain: "Print Hello World"
}




bot.onText(/\/challenge/,(msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];
 
    bot.sendMessage(chatid,problem.Challenge);
    bot.sendMessage(chatid,problem.Difficulty);
    bot.sendMessage(chatid,problem.title);
    bot.sendMessage(chatid,problem.Explain);
   
})


bot.on('Hello CodeDaily',(msg) => {
    const chatId = msg.chat.id;


    bot.sendMessage(chatId, 'Hello! Welcome to CodeDaily Bot');
})