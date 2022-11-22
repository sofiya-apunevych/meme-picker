const myEmojis = ["👩🏼‍💻", "☕️", "📚", "🏞", "⛸", "🐶", "🐱"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})





let secretEm = document.getElementById("secret")
let jobEm = document.getElementById("job")
let friendEm = document.getElementById("friend")

let rutineBtn = document.getElementById("rutine-btn")

let person = {
    secretEmoji: "👶 👮 🕵️‍♀️",
    jobEmoji: "👨‍🔧 👩‍🔬",
    friendEmoji: "👨🏻‍🦱 👩🏻‍🦰",
};

localStorage.setItem("profile", JSON.stringify(person));

let storageProfileString = localStorage.getItem("profile");
console.log("String saved in LocalStorage", storageProfileString);

let savedPerson = JSON.parse(storageProfileString);
console.log("Person object:", savedPerson);
console.log("Person's name:", savedPerson.friendEmoji);


secretEm.addEventListener("click", function(){
    emojiContainer.innerText = ""
    emojiContainer.innerText = savedPerson.secretEmoji
})

jobEm.addEventListener("click", function(){
    emojiContainer.innerText = ""
    emojiContainer.innerText = savedPerson.jobEmoji
})

friendEm.addEventListener("click", function(){
    emojiContainer.innerText = ""
   emojiContainer.innerText = savedPerson.friendEmoji 
})

rutineBtn.addEventListener("click", function(){
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
    
})