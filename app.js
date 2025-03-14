const express = require('express')
const app = express()
const Telegrambot = require('node-telegram-bot-api')
const cron = require('node-cron');


const token = '7992238831:AAEDUmQuPjqK8vzIOTbVS5OQELhaIJ7JOdo';

const bot = new Telegrambot(token, {polling: true})


bot.onText(/\/start/ , (msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatid, "Welcome to CodeDaily Bot Made By Sachin Mehta");
});


const challenges = [

    //Easy Challenges

    "Reverse a String → Write a function to reverse a given string.",
    "Palindrome Check → Check if a given string is a palindrome.",
    "Sum of Digits → Calculate the sum of digits in a number.",
    "Factorial Calculator → Find the factorial of a given number.",
    "FizzBuzz → Print numbers from 1 to 100 with 'Fizz' for multiples of 3, 'Buzz' for 5, and 'FizzBuzz' for both.",
    "Find Maximum in Array → Find the largest number in an array.",
    "Count Vowels → Count the number of vowels in a given string.",
    "Leap Year Checker → Determine if a given year is a leap year.",
    "Reverse an Array → Reverse the elements of an array without using .reverse().",
    "Power of Two → Check if a number is a power of 2.",


    //Medium Challenges

    "Two Sum Problem → Find two numbers in an array that add up to a given target.",
    "Anagram Check → Check if two strings are anagrams of each other.",
    "Prime Number Finder → Identify all prime numbers within a given range.",
    "First Non-Repeating Character → Find the first non-repeating character in a string.",
    "Word Frequency Counter → Count the frequency of each word in a given text.",
    "Array Rotation → Rotate an array by a given number of steps.",
    "Merge Sorted Arrays → Merge two sorted arrays into one sorted array.",
    "Balanced Brackets → Check if a string has balanced brackets.",
    "Longest Word Finder → Find the longest word in a given sentence.",
    "Second Largest Number → Find the second-largest number in an array.",


    //Hard Challenges

    "Sudoku Solver → Create a function that solves a Sudoku puzzle.",
    "Word Ladder Problem → Find the shortest path between two words by changing one letter at a time.",
    "N-Queens Problem → Place N queens on a chessboard such that no two queens threaten each other.",
    "Generate Permutations → Generate all possible permutations of a string.",
    "Binary Search Tree (BST) Validator → Check if a binary tree is a valid BST.",
]


bot.onText(/\/challenge/,(msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];
    

    const randomchallenege = challenges[Math.floor(Math.random() * challenges.length)]

    

    
    


   bot.sendMessage(chatid, randomchallenege);

    
   
})


cron.schedule(' * 7 19 1-31 1-12 1-7', () => {
    
    const randomchallenege = challenges[Math.floor(Math.random() * challenges.length)]

    const chatid = msg.chat.id;

    bot.sendMessage(chatid, randomchallenege);
   })









bot.on('Hello CodeDaily',(msg) => {
    const chatId = msg.chat.id;


    bot.sendMessage(chatId, 'Hello! Welcome to CodeDaily Bot');
})