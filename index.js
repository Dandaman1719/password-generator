let btnPassword = document.getElementById("btn-generate-pw")
let btnPasswordLengthDec = document.getElementById("btn-pw-length-dec")
let btnPasswordLengthInc = document.getElementById("btn-pw-length-inc")
let passwordLengthEl = document.getElementById("password-length")
let newPasswordsEl = document.querySelectorAll('.new-password')

// Password length as a number 

let passwordLength = 20

// List of all possible characters

let allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[]<>,./"

// button event listeners

btnPasswordLengthDec.addEventListener("click" , function() {
  passwordLength -= 1
  passwordLengthEl.value = passwordLength
})

btnPasswordLengthInc.addEventListener("click" , function() {
  passwordLength += 1 
  passwordLengthEl.value = passwordLength
})

btnPassword.addEventListener("click" , generatePassword)

// Function to generate new passwords

function generatePassword() {
  for (const password of newPasswordsEl) {
    
    // empty string 

    let newPassword = " "

    // Choose a random character from the allChars string and add it to newPassword

    for (let i = 0; i < passwordLength; i++) {
      newPassword += allChars[Math.floor( Math.random() * allChars.length)]
    }

    // Set each password element value to newPassword, then reset newPassword for the next loop

    password.value = newPassword
    newPassword = ""
  }
}

    // Set each password element & add ability to do a 1-click copy to clipboard

    for (const password of newPasswordsEl) {
      password.addEventListener("click" , function() {
        password.select()
        document.execCommand("Copy")
        alert("Password copied to clipboard!")
      })
    }
