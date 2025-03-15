const express = require('express')
const app = express()
const Telegrambot = require('node-telegram-bot-api')


const token = '7992238831:AAEDUmQuPjqK8vzIOTbVS5OQELhaIJ7JOdo';

const bot = new Telegrambot(token, { polling: true })

// const chatIDStorage = [];


bot.onText(/\/start/, (msg, match) => {
	const chatid = msg.chat.id;
	const resp = match[1];

	// if(!chatIDStorage.includes(chatid)){
	//     chatIDStorage.push(chatid);
	// }


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


bot.onText(/\/challenge/, (msg, match) => {
	const chatid = msg.chat.id;
	const resp = match[1];


	const randomchallenege = challenges[Math.floor(Math.random() * challenges.length)]


	bot.sendMessage(chatid, randomchallenege)

})


// const codingtips = [

// 	"Write meaningful variable names; avoid x, y, and temp unless necessary",
//     "Break large functions into smaller, reusable ones",
//     "Add comments only where logic isn’t obvious",
//     "Follow consistent indentation to improve readability",
//     "Use version control like Git from day one",
//     "Write test cases for critical parts of your code",
// 	"Don’t repeat code; apply DRY(Don't Repeat Yourself) principles",
//     "Use meaningful commit messages",
//     "Avoid hardcoding values; use constants or configuration files",
//     "Write code as if someone else will maintain it",


// 	"Use enumerate() instead of manually managing indices",
//     "Use list comprehensions for cleaner and faster looping",
//     "Prefer f-strings over concatenation for better readability",
//     "Avoid using mutable default arguments in functions",
//     "Use with statements when handling files for automatic closure",
//     "Catch specific exceptions rather than using except: alone",
//     "Use zip() to iterate over multiple lists in parallel",
//     "Leverage the set() data type for faster membership checks",
//     "Use try/except blocks strategically; don’t hide all errors",
//     "Install black or flake8 for automatic code formatting",



// 	"Use === instead of == to avoid type coercion issues",
//     "Use const and let instead of var for better scope control",
//     "Use async/await instead of .then() for better readability",
//     "Avoid modifying the global scope directly",
//     "Debounce user input in search boxes for better performance",
//     "Use Object.freeze() to create immutable objects",
//     "Use Array.map() and Array.filter() instead of loops",
//     "Use console.error() for error logs rather than console.log()",
//     "Use the ?? (nullish coalescing) operator for default values",
//     "Use try/catch in async functions to prevent uncaught errors.",






// 	"Use semantic tags (<article>, <section>, etc.) for accessibility",
// 	"Add alt attributes to all <img> tags for SEO and accessibility",
// 	"Avoid inline styles; use CSS classes instead",
// 	"Use rem for consistent font sizing across devices",
// 	"Minimize CSS nesting to reduce complexity",
// 	"Optimize images for faster load times",
// 	"Leverage CSS Grid and Flexbox for responsive layouts",
// 	"Use position: sticky; for persistent navigation bars",
// 	"Add aria-label attributes for better screen reader support",
// 	"Use media queries to improve mobile responsiveness",


	

// 	"Use proper indexing for faster database queries",
//     "Sanitize all user inputs to prevent SQL injection attacks",
//     "Implement proper error handling in API endpoints",
//     "Use environment variables for storing API keys and passwords",
//     "Use pagination for large data sets in APIs",
//     "Log errors to a file or monitoring tool for debugging",
//     "Close database connections properly to prevent memory leaks",
//     "Use caching (e.g., Redis) to improve performance",
//     "Use prepared statements to prevent SQL injection",
//     "Backup your database regularly to avoid data loss",


// ]

// bot.onText(/\codingtips/, (msg, match) => {
// 	const chatid = msg.chat.id;
// 	const resp = match[1];

// 	const randomcodingtip = codingtips[Math.floor(Math.random() * codingtips.length)]

// 	bot.sendMessage(chatid, randomcodingtip)
// })



bot.on('Hello CodeDaily', (msg) => {
	const chatId = msg.chat.id;


	bot.sendMessage(chatId, 'Hello! Welcome to CodeDaily Bot');
})