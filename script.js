const { animate, hover, scroll } = Motion;
const titlegit = document.getElementById("title-git") // Lead title text to github repo
const newpass = document.getElementById("create-pass")
const passmodal = document.getElementById("passmodal")
const username = document.getElementById("username")
const password = document.getElementById("password")
const saveuser = document.getElementById("savepass")

//Lead title text to github repo
titlegit.addEventListener("click", (e) => {
    window.open("https://github.com/harshilarora250/lockbox/", "_blank");
})
// Lead title text to github repo

// Create password
newpass.addEventListener("click", (e) => {
    passmodal.hidden = false;
})

saveuser.addEventListener("click", () => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    accounts.push({
        username: username.value,
        password: password.value,
        createdAt: Date.now() // Unix timestamp
    });

    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log("Saved!");
    location.reload();
});

// Create password



// <ANIMATIONS-BEGIN-HERE>
// <ANIMATIONS-END-HERE>