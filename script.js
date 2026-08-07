const { animate, hover, scroll } = Motion;
const titlegit = document.getElementById("title-git") // Lead title text to github repo
const newpass = document.getElementById("create-pass")
const passmodal = document.getElementById("passmodal")
const username = document.getElementById("username")
const password = document.getElementById("password")
const saveuser = document.getElementById("savepass")
const itsaved = document.getElementById("itsaved")
const nopass = document.getElementById("nopass")

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
    if (password.value === "") {
        alert("please set a password")
    } else {
            const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    accounts.push({
        username: username.value,
        password: password.value,
        createdAt: Date.now() // Unix timestamp
    });

    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log("Saved!");
    itsaved.hidden = false;
    passmodal.hidden = true;
    setTimeout(() => {
        itsaved.hidden = true;
        location.reload();
    }, 5000);
}
});
// Create password
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

if (accounts.length === 0) {
    nopass.textContent = "You have 0 passwords saved";
} else {
    nopass.textContent = `You have ${accounts.length} passwords saved. They are:`;
}
// View saved password


// View saved password

// <ANIMATIONS-BEGIN-HERE>
// <ANIMATIONS-END-HERE>