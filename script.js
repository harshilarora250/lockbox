const { animate, hover, scroll } = Motion;
const titlegit = document.getElementById("title-git") // Lead title text to github repo
const newpass = document.getElementById("create-pass")
const passmodal = document.getElementById("passmodal")

//Lead title text to github repo
titlegit.addEventListener("click", (e) => {
    window.open("https://github.com/harshilarora250/lockbox/", "_blank");
})
// Lead title text to github repo

// Create password
newpass.addEventListener("click", (e) => {
    passmodal.hidden = false;
})
// Create password



// <ANIMATIONS-BEGIN-HERE>
// <ANIMATIONS-END-HERE>