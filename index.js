const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passoneEl = document.getElementById("passwordOne")
let passtwoEl = document.getElementById("passwordTwo")

let passwordLength = 12

function generateCharacter(){
    let randomCharacter = characters[Math.floor(Math.random()*characters.length)]
    return randomCharacter
}

function generatePassword(){
    let randomPassword = ""
    for (i = 0; i < passwordLength; i++) {
        randomPassword += generateCharacter()
    }
    return randomPassword
} 

function getPassword (){
passoneEl.textContent = generatePassword ()
passtwoEl.textContent = generatePassword ()
}

