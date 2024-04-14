import { GoogleGenerativeAI } from "@google/generative-ai";
  
// Fetch your API_KEY
const API_KEY = "AIzaSyAkxGhcWPUgepgLJqyqM5aWw6iwEV89M_A";



const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

let userMessage;


const createChatLi = (message, className) => {
    //create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}



// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = userMessage

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  chatbox.appendChild(createChatLi(text, "incoming"));
  chatbox.scrollTo(0,chatbox.scrollHeight);
}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;


    //Append the users message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);
    //display thinking message while waiting for the response
    run();
    chatInput.value = "";
    chatbox.scrollTo(0,chatbox.scrollHeight);
}


chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleChat();
    }
  });
sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click",() => {
    document.body.classList.toggle("show-chatbot")
});
