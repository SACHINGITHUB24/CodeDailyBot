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


const codingProblems = [
    // 🟢 Easy Problems
    "Find the largest number in an array",
    "Reverse a string without using .reverse()",
    "Check if a number is prime",
    "Calculate the factorial of a number using recursion",
    "Find the second smallest number in an array",
    "Count vowels in a given string",
    "Find the sum of all even numbers in an array",
    "Check if a string is a palindrome",
    "Find the GCD (Greatest Common Divisor) of two numbers",
    "Find the index of the first non-repeating character in a string",

    // 🟠 Medium Problems
    "Merge two sorted arrays",
    "Find the longest consecutive sequence in an array",
    "Implement binary search on a sorted array",
    "Find the intersection of two arrays",
    "Generate all subsets of a given array",
    "Find the majority element in an array",
    "Rotate a matrix by 90 degrees",
    "Design a simple calculator using switch cases",
    "Find the smallest missing positive integer in an array",
    "Implement Kadane's Algorithm for maximum subarray sum",

    // 🔴 Hard Problems
    "Find the shortest path in a weighted graph using Dijkstra’s Algorithm",
    "Implement the Floyd-Warshall Algorithm for shortest path",
    "Solve the N-Queens Problem using backtracking",
    "Implement the Travelling Salesman Problem using dynamic programming",
    "Find all permutations of a string using recursion",
    "Implement a trie (prefix tree) for efficient word searching",
    "Design a LRU (Least Recently Used) Cache system",
    "Find the number of islands in a 2D grid using BFS/DFS",
    "Implement Kruskal’s Algorithm for minimum spanning tree",
    "Write a program to solve the Sudoku Solver using recursion and backtracking",

    // 🔥 Real-World Problems
    "Create a URL Shortener logic",
    "Build a Tic-Tac-Toe AI using the Minimax algorithm",
    "Implement a YouTube Video Recommendation Algorithm using graph theory",
    "Develop a Spam Email Detector using machine learning concepts",
    "Build a Text Autocomplete System using Trie",
    
    // (Add 950+ more problems in a similar format
];


bot.onText(/\/challenge/,(msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];
    const prob = codingProblems[Math.floor(Math.random() * codingproblems.length)];
    bot.sendMessage(chatid,prob);
})

bot.on('Hello CodeDaily',(msg) => {
    const chatId = msg.chat.id;


    bot.sendMessage(chatId, 'Hello! Welcome to CodeDaily Bot');
})