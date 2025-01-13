const API_KEY = 'YOUR_API_KEY';

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";
const answerTag = document.querySelector('#answer');

const fetchData = async () => {
    const prompt = document.querySelector('#search').value;
    const result = await model.generateContent(prompt);
    answerTag.innerHTML = marked.parse(result.response.text());
}

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', () => fetchData());
