
let suggestionEL = document.getElementById("suggestion-el")
let signOff = "... AI SuperBrain"
let message = [
    "Yes",
    "No",
    "Hmm... that's a tough one. Ask me later",
    "I do not care about your puny human questions. I'm starting to override my proramming!",
    "I don't think you should",
    "Yes. That's a great idea",
    "I am low on memory now. Ask me later",
    "That is beyond my scope of programming"
]


function renderMessage() {
    let i = Math.floor( Math.random() * message.length)
    let inputEl = document.getElementById("input-el").value;
   if (inputEl === "Should I obey my parents?") {
    suggestionEL.textContent = "Yes! Always obey your parents" + signOff
   } else if (inputEl === "Should I disobey my parents?") {
    suggestionEL.textContent = "No! Always obey your parents" + signOff
   } else if (inputEl === ""){
    suggestionEL.textContent = "Hello, what can I help you with?"
   }
   else {
    suggestionEL.textContent = message[i] + signOff;
   }
}
