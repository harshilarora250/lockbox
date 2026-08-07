const { animate, hover, scroll } = Motion;


// ================================
// ELEMENTS
// ================================

const titlegit = document.getElementById("title-git");
const newpass = document.getElementById("create-pass");
const passmodal = document.getElementById("passmodal");
const username = document.getElementById("username");
const password = document.getElementById("password");
const saveuser = document.getElementById("savepass");
const itsaved = document.getElementById("itsaved");
const nopass = document.getElementById("nopass");
const passwordContainer = document.getElementById("savedpass");


// ================================
// GITHUB
// ================================

titlegit.addEventListener("click", () => {
    window.open(
        "https://github.com/harshilarora250/lockbox/",
        "_blank"
    );
});


// ================================
// OPEN CREATE PASSWORD MODAL
// ================================

newpass.addEventListener("click", () => {
    passmodal.hidden = false;
});


// ================================
// SAVE PASSWORD
// ================================

saveuser.addEventListener("click", () => {

    // Check password
    if (password.value === "") {
        alert("Please set a password");
        return;
    }

    // Get existing accounts
    const accounts =
        JSON.parse(localStorage.getItem("accounts")) || [];

    // Create new account
    const account = {
        username: username.value,
        password: password.value,
        createdAt: Date.now()
    };

    // Add account
    accounts.push(account);

    // Save to localStorage
    localStorage.setItem(
        "accounts",
        JSON.stringify(accounts)
    );

    console.log("Saved account:", account);
    console.log("All accounts:", accounts);

    // Show saving message
    itsaved.hidden = false;

    // Hide modal
    passmodal.hidden = true;

    // Clear inputs
    username.value = "";
    password.value = "";

    // Reload
    setTimeout(() => {
        location.reload();
    }, 1000);
});


// ================================
// DISPLAY SAVED PASSWORDS
// ================================

const accounts =
    JSON.parse(localStorage.getItem("accounts")) || [];

console.log("Accounts from localStorage:", accounts);


// No passwords
if (accounts.length === 0) {

    nopass.textContent =
        "You have 0 passwords saved.";

}


// There are passwords
else {

    nopass.textContent =
        `You have ${accounts.length} password${accounts.length === 1 ? "" : "s"} saved.`;

    accounts.forEach((account) => {

        // Create card
        const passwordCard =
            document.createElement("div");

        passwordCard.classList.add("password-card");

        // Put account information inside card
        passwordCard.innerHTML = `
            <h3>Username: ${account.username}</h3>
            <p>Password: ${account.password}</p>
            <p>Website: ${account.website}</p>
        `;

        // Add card to page
        passwordContainer.appendChild(passwordCard);

    });
}