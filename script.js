/* ========= LOADING THE PAGES ========= */


function showPage(page) {
    document.querySelectorAll(".pages").forEach(div => {
        div.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";

    document.querySelectorAll(".page_buttons").forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(`button[data-page="${page}"]`).classList.add("active");
}

document.querySelectorAll(".page_buttons").forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page);
    }
});

window.onload = function() {
    document.querySelector("#page1").style.display = "block";
    document.querySelector(`button[data-page="page1"]`).classList.add("active");
};



/* ========= GLOBAL VARIABLES ========= */

let money = 0;    // total order sum

let totalCC30 = 0;    // how many chicken curry 30cm pizzas
let totalCC20 = 0;    // how many chicken curry 20cm pizzas

let totalGru30 = 0;
let totalGru20 = 0;


const fCena = document.querySelector("#fCena");    //cena displayed on hidden div

const atcelt = document.querySelector("#atcelt");
const atceltDiv = document.querySelector("#atcelt_div");
const grozsh1 = document.querySelector("#grozsh1");

const pasutit = document.querySelector("#pasutit");
const pasutitDiv = document.querySelector("#pasutit_div");

const registerBtn = document.querySelector("#register");
const closeFormBtn = document.querySelector("#close-btn");

const profile = document.querySelector("#profile");
const profileName = document.querySelector("#profile_name");

const error_div = document.querySelector("#error_div");
const kopa = document.querySelector("#kopa");

const zvaniet = document.querySelector("#zvaniet");

const sticky = document.querySelector("#sticky");
const header = document.querySelector("header");



/* === REGISTER FORM === */


const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const address = document.querySelector("#address");

const submit = document.querySelector("#submit");



/* === Chicken Curry Variables === */


const CC30 = document.querySelector("#CC30");    //30cm button CC
const CC20 = document.querySelector("#CC20");    //20cm button CC
const CCC = document.querySelector("#cenaCC");    //CC cena h1 blakus pievienot pogai
const buyCC = document.querySelector("#buyCC");    //pievienot button

const skaitCC30 = document.querySelector("#skaitCC30");    //div
const skaitCC20 = document.querySelector("#skaitCC20");    //div

const plusCC30 = document.querySelector("#plusCC30");    //hidden plus button 30cm
const minusCC30 = document.querySelector("#minusCC30");    //hidden minus button 30cm

const plusCC20 = document.querySelector("#plusCC20");    //hidden plus button 20cm
const minusCC20 = document.querySelector("#minusCC20");    //hidden minus button 20cm

const counterCC30 = document.querySelector("#counterCC30");    //hidden h1 counter 30cm
const counterCC20 = document.querySelector("#counterCC20");    //hidden h1 counter 20cm

const plusCC30Grozs = document.querySelector("#plusCC30Grozs");
const minusCC30Grozs = document.querySelector("#minusCC30Grozs");
const plusCC20Grozs = document.querySelector("#plusCC20Grozs");
const minusCC20Grozs = document.querySelector("#minusCC20Grozs");

const counterCC30Grozs = document.querySelector("#counterCC30Grozs");
const counterCC20Grozs = document.querySelector("#counterCC20Grozs");





/* === Gruzīnu Variables === */


const Gru30 = document.querySelector("#Gru30");    //30cm button Gru
const Gru20 = document.querySelector("#Gru20");    //20cm button Gru
const GruC = document.querySelector("#cenaGru");    //Gru cena h1 blakus pievienot pogai
const buyGru = document.querySelector("#buyGru");    //pievienot button

const skaitGru30 = document.querySelector("#skaitGru30");    //div
const skaitGru20 = document.querySelector("#skaitGru20");    //div

const plusGru30 = document.querySelector("#plusGru30");    //hidden plus button 30cm
const minusGru30 = document.querySelector("#minusGru30");    //hidden minus button 30cm

const plusGru20 = document.querySelector("#plusGru20");    //hidden plus button 20cm
const minusGru20 = document.querySelector("#minusGru20");    //hidden minus button 20cm

const counterGru30 = document.querySelector("#counterGru30");    //hidden h1 counter 30cm
const counterGru20 = document.querySelector("#counterGru20");    //hidden h1 counter 20cm

const plusGru30Grozs = document.querySelector("#plusGru30Grozs");
const minusGru30Grozs = document.querySelector("#minusGru30Grozs");
const plusGru20Grozs = document.querySelector("#plusGru20Grozs");
const minusGru20Grozs = document.querySelector("#minusGru20Grozs");

const counterGru30Grozs = document.querySelector("#counterGru30Grozs");
const counterGru20Grozs = document.querySelector("#counterGru20Grozs");






/* ========= ALL FUNCTIONS ========= */



window.onscroll = () => {
    if (window.scrollY >= 140) {
        sticky.classList.add("sticky");
        header.classList.add("stickyHeader")
    } else {
        sticky.classList.remove("sticky");
        header.classList.remove("stickyHeader");
    }
}


function askToHideError() {
    if (error_div.style.display = "block") {
        error_div.style.display = "none";
    }
}


function openForm() {
    const overlay = document.getElementById('popup-overlay');
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('show'), 10);
}

function closeForm() {
    const overlay = document.getElementById('popup-overlay');
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 500);
}



function askToShowGrozs() {
    if (money > 0) {
        grozsh1.innerHTML = "Pasūtīt";
        atceltDiv.style.display = "flex";
        pasutitDiv.style.display = "flex";
        kopa.classList.remove("centered");
        askToHideError();
    }
    else {
        grozsh1.innerHTML = "Grozs ir tukšs";
        atceltDiv.style.display = "none";
        pasutitDiv.style.display = "none";
    }
}

function updateAll() {
    updateFCena();
    totalAmount();

    updateCounterCC30();
    updateCounterCC20();
    updateCounterGru30();
    updateCounterGru20();

    updateCounterCC30Grozs();
    updateCounterCC20Grozs();
    updateCounterGru30Grozs();
    updateCounterGru20Grozs();

    askToShowCC30();
    askToShowCC20();
    askToShowGru30();
    askToShowGru20();

    askToShowGrozsCC30();
    askToShowGrozsCC20();
    askToShowGrozsGru30();
    askToShowGrozsGru20();

    askToShowMyDiv();

    orderSummary();
}


function atceltGrozu() {
    totalCC30 = 0; 
    totalCC20 = 0;
    totalGru30 = 0;
    totalGru20 = 0;
    
    money = 0;

    updateAll();
}

function updateFCena() {
    fCena.innerHTML = money.toFixed(2) + " € | Pasūtīt";
};

function totalAmount() {
    if (money > 0) {
        kopa.innerHTML = "Kopā: " + money.toFixed(2) + "€";
    }
    else {
        kopa.innerHTML = "";
    }
};

function askToShowCC30() {
    if (totalCC30 > 0) {
        buyCC.style.display = "none";
        skaitCC30.style.display = "block";
        skaitCC20.style.display = "none";
        CC30.innerHTML = "30cm (" + totalCC30 + ")";
    }
    else {
        buyCC.style.display = "block";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "none";
        CC30.innerHTML = "30cm";
    }
};

function askToShowCC20() {
    if (totalCC20 > 0) {
        buyCC.style.display = "none";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "block";
        CC20.innerHTML = "20cm (" + totalCC20 + ")";
    }
    else {
        buyCC.style.display = "block";
        skaitCC30.style.display = "none";
        skaitCC20.style.display = "none";
        CC20.innerHTML = "20cm";
    }
};



function askToShowMyDiv() {
    if (money > 0) {
        myDiv.style.display = "block";
    }
    else {
        myDiv.style.display = "none";
    }
};





function updateCounterCC30() {
    counterCC30.innerHTML = totalCC30;
};

function updateCounterCC20() {
    counterCC20.innerHTML = totalCC20;
};



function pirktCC() {
    if (CCC.innerHTML === "€ 9.10") {
        totalCC30 = totalCC30 + 1;
        money = Math.round((money + 9.10) * 100) / 100;
        
        orderSummary();
        updateFCena();
        totalAmount();
        askToShowCC30();
        updateCounterCC30();
        updateCounterCC30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalCC20 = totalCC20 + 1;
        money = Math.round((money + 6.30) * 100) / 100;

        orderSummary();
        updateFCena();
        totalAmount();
        askToShowCC20();
        updateCounterCC20();
        updateCounterCC20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};


function nonemtCC() {
    if (CCC.innerHTML === "€ 9.10") {
        totalCC30 = totalCC30 - 1;
        money = Math.round((money - 9.10) * 100) / 100;
        
        orderSummary();
        updateFCena();
        totalAmount();
        askToShowCC30();
        updateCounterCC30();
        updateCounterCC30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalCC20 = totalCC20 - 1;
        money = Math.round((money - 6.30) * 100) / 100;

        orderSummary();
        updateFCena();
        totalAmount();
        askToShowCC20();
        updateCounterCC20();
        updateCounterCC20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};

function updateCounterCC30Grozs() {
    counterCC30Grozs.innerHTML = totalCC30;
};

function updateCounterCC20Grozs() {
    counterCC20Grozs.innerHTML = totalCC20;
};





function pirktCCGrozs30() {
    totalCC30 = totalCC30 + 1;
    money = Math.round((money + 9.10) * 100) / 100;
    
    orderSummary();
    updateFCena();
    totalAmount();
    askToShowCC30();
    updateCounterCC30();
    updateCounterCC30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtCCGrozs30() {
    totalCC30 = totalCC30 - 1;
    money = Math.round((money - 9.10) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowCC30();
    updateCounterCC30();
    updateCounterCC30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function pirktCCGrozs20() {
    totalCC20 = totalCC20 + 1;
    money = Math.round((money + 6.30) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowCC20();
    updateCounterCC20();
    updateCounterCC20Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtCCGrozs20() {
    totalCC20 = totalCC20 - 1;
    money = Math.round((money - 6.30) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowCC20();
    updateCounterCC20();
    updateCounterCC20Grozs();
    askToShowMyDiv();
    updateGrozs();
};



function askToShowGrozsCC30() {
    if (totalCC30 > 0) {
        itemCC30.style.display = "block";
        atceltDiv.style.display = "flex";
    }
    else {
        itemCC30.style.display = "none";
    }
};

function askToShowGrozsCC20() {
    if (totalCC20 > 0) {
        itemCC20.style.display = "block";
        atceltDiv.style.display = "flex";
    }
    else {
        itemCC20.style.display = "none";
    }
};


function updateGrozs() {
    askToShowGrozsCC30();
    askToShowGrozsCC20();
    askToShowGrozsGru30();
    askToShowGrozsGru20();
};

function orderSummary() {

    askToShowGrozs();

    console.log("");
    console.log("");
    console.log("");
    console.log("");

    if (money > 0) {
        console.log("Tavs pasūtījums: ");
    }
    if (totalCC30 > 0) {
        console.log("CC30 skaits: " + totalCC30);
    }
    if (totalCC20 > 0) {
        console.log("CC20 skaits: " + totalCC20);
    }
    if (totalGru30 > 0) {
        console.log("Gru30 skaits: " + totalGru30);
    }
    if (totalGru20 > 0) {
        console.log("Gru20 skaits: " + totalGru20);
    }
    if (money > 0) {
        console.log("kopā: " + money.toFixed(2) + "€");
    }
    else {
        console.log("Pasūtījums atcelts!")
    }
}


/* ========= GRUZĪNU FUNCTIONS ========= */

function askToShowGru30() {
    if (totalGru30 > 0) {
        buyGru.style.display = "none";
        skaitGru30.style.display = "block";
        skaitGru20.style.display = "none";
        Gru30.innerHTML = "30cm (" + totalGru30 + ")";
    }
    else {
        buyGru.style.display = "block";
        skaitGru30.style.display = "none";
        skaitGru20.style.display = "none";
        Gru30.innerHTML = "30cm";
    }
};

function askToShowGru20() {
    if (totalGru20 > 0) {
        buyGru.style.display = "none";
        skaitGru30.style.display = "none";
        skaitGru20.style.display = "block";
        Gru20.innerHTML = "20cm (" + totalGru20 + ")";
    }
    else {
        buyGru.style.display = "block";
        skaitGru30.style.display = "none";
        skaitGru20.style.display = "none";
        Gru20.innerHTML = "20cm";
    }
};



function updateCounterGru30() {
    counterGru30.innerHTML = totalGru30;
};

function updateCounterGru20() {
    counterGru20.innerHTML = totalGru20;
};




function pirktGru() {
    if (GruC.innerHTML === "€ 9.10") {
        totalGru30 = totalGru30 + 1;
        money = Math.round((money + 9.10) * 100) / 100;
        
        orderSummary();
        updateFCena();
        totalAmount();
        askToShowGru30();
        updateCounterGru30();
        updateCounterGru30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalGru20 = totalGru20 + 1;
        money = Math.round((money + 6.30) * 100) / 100;

        orderSummary();
        updateFCena();
        totalAmount();
        askToShowGru20();
        updateCounterGru20();
        updateCounterGru20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};


function nonemtGru() {
    if (GruC.innerHTML === "€ 9.10") {
        totalGru30 = totalGru30 - 1;
        money = Math.round((money - 9.10) * 100) / 100;

        orderSummary();
        updateFCena();
        totalAmount();
        askToShowGru30();
        updateCounterGru30();
        updateCounterGru30Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
    else {
        totalGru20 = totalGru20 - 1;
        money = Math.round((money - 6.30) * 100) / 100;

        orderSummary();
        updateFCena();
        totalAmount();
        askToShowGru20();
        updateCounterGru20();
        updateCounterGru20Grozs();
        askToShowMyDiv();
        updateGrozs();
    }
};


function updateCounterGru30Grozs() {
    counterGru30Grozs.innerHTML = totalGru30;
};

function updateCounterGru20Grozs() {
    counterGru20Grozs.innerHTML = totalGru20;
};



function pirktGruGrozs30() {
    totalGru30 = totalGru30 + 1;
    money = Math.round((money + 9.10) * 100) / 100;
    
    orderSummary();
    updateFCena();
    totalAmount();
    askToShowGru30();
    updateCounterGru30();
    updateCounterGru30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtGruGrozs30() {
    totalGru30 = totalGru30 - 1;
    money = Math.round((money - 9.10) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowGru30();
    updateCounterGru30();
    updateCounterGru30Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function pirktGruGrozs20() {
    totalGru20 = totalGru20 + 1;
    money = Math.round((money + 6.30) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowGru20();
    updateCounterGru20();
    updateCounterGru20Grozs();
    askToShowMyDiv();
    updateGrozs();
};

function nonemtGruGrozs20() {
    totalGru20 = totalGru20 - 1;
    money = Math.round((money - 6.30) * 100) / 100;

    orderSummary();
    updateFCena();
    totalAmount();
    askToShowGru20();
    updateCounterGru20();
    updateCounterGru20Grozs();
    askToShowMyDiv();
    updateGrozs();
};



function askToShowGrozsGru30() {
    if (totalGru30 > 0) {
        itemGru30.style.display = "block";
        atceltDiv.style.display = "flex";
    }
    else {
        itemGru30.style.display = "none";
    }
};

function askToShowGrozsGru20() {
    if (totalGru20 > 0) {
        itemGru20.style.display = "block";
        atceltDiv.style.display = "flex";
    }
    else {
        itemGru20.style.display = "none";
    }
};





/* ========= Chicken Curry PICAS BUTTONS ========= */



CC30.onclick = function() {
    CC30.style.background = "#f58220";
    CC30.style.color = "#ffffff";
    CC20.style.background = "#eef2f8";
    CC20.style.color = "#000000";
    CCC.innerHTML = "€ 9.10";
    askToShowCC30();
};


CC20.onclick = function() {
    CC20.style.background = "#f58220";
    CC20.style.color = "#ffffff";
    CC30.style.background = "#eef2f8";
    CC30.style.color = "#000000";
    CCC.innerHTML = "€ 6.30";
    askToShowCC20();
};


buyCC.onclick = function() {
    pirktCC();
};


plusCC30.onclick = function() {
    pirktCC();
};
minusCC30.onclick = function() {
    nonemtCC();
};



plusCC20.onclick = function() {
    pirktCC();
};
minusCC20.onclick = function() {
    nonemtCC();
};



/* ========= Chicken Curry GROZA BUTTONS ========= */



plusCC30Grozs.onclick = function() {
    pirktCCGrozs30();
};
minusCC30Grozs.onclick = function() {
    nonemtCCGrozs30();
};


plusCC20Grozs.onclick = function() {
    pirktCCGrozs20();
};
minusCC20Grozs.onclick = function() {
    nonemtCCGrozs20();
};



/* ========= Gruzīnu PICAS BUTTONS ========= */



Gru30.onclick = function() {
    Gru30.style.background = "#f58220";
    Gru30.style.color = "#ffffff";
    Gru20.style.background = "#eef2f8";
    Gru20.style.color = "#000000";
    GruC.innerHTML = "€ 9.10";
    askToShowGru30();
};


Gru20.onclick = function() {
    Gru20.style.background = "#f58220";
    Gru20.style.color = "#ffffff";
    Gru30.style.background = "#eef2f8";
    Gru30.style.color = "#000000";
    GruC.innerHTML = "€ 6.30";
    askToShowGru20();
};




buyGru.onclick = function() {
    pirktGru();
};


plusGru30.onclick = function() {
    pirktGru();
};
minusGru30.onclick = function() {
    nonemtGru();
};



plusGru20.onclick = function() {
    pirktGru();
};
minusGru20.onclick = function() {
    nonemtGru();
};


/* ========= Gruzīnu GROZA BUTTONS ========= */



plusGru30Grozs.onclick = function() {
    pirktGruGrozs30();
};
minusGru30Grozs.onclick = function() {
    nonemtGruGrozs30();
};


plusGru20Grozs.onclick = function() {
    pirktGruGrozs20();
};
minusGru20Grozs.onclick = function() {
    nonemtGruGrozs20();
};



// ===== GROZA BUTTONS ====== //



atcelt.onclick = function() {
    atceltGrozu();
}

pasutit.onclick = function() {
    atceltGrozu();
    kopa.innerHTML = "Pasūtījumus vēl nav iespējams veikt caur mājaslapu.";
    zvaniet.innerHTML = "Lai pasūtītu zvaniet pa tel. 2000 3993 !";
    grozsh1.innerHTML = "";
    kopa.classList.add("centered");
    zvaniet.classList.add("zvaniet");
    error_div.style.display = "flex";
}



// ===== HEADER BUTTONS ====== //


registerBtn.onclick = function() {
    openForm();
}

closeFormBtn.onclick = function() {
    closeForm();
}

submit.onclick = function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
    });

    if (validateAll() == false) {
        alert('Fill the form correctly!')
        return
    }

    console.log("name: " + name.value);
    console.log("email: " + email.value);
    console.log("phone: " + phone.value);
    console.log("password: " + password.value);
    console.log("address: " + address.value);
}

function validateAll() {
    if (name.value.length < 4) {
        return false;
    }
    if (email.value.length < 14) {
        return false;
    }
    if (phone.value.length < 4) {
        return false;
    }
    if (password.value.length < 6) {
        return false;
    }
    if (address.value.length < 6) {
        return false;
    }
    else {
        return true;
    }
}


document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.getElementById("submit").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbxHsy6E9Satgt1_iaNIEa-oLIhMblk43LyhLLXDAQOq87qt5FtAmNvgfNd9ViOJ7YEMiA/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        // Check if the request was successful
        if (response) {
          return response; // Assuming your script returns JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        // Display a success message
        document.getElementById("submit").disabled = false;
        document.getElementById("form").reset();

        setTimeout(function () {
        }, 2600);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
      });
  });