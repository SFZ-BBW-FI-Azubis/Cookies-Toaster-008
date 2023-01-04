const btn_buy = document.querySelector("#btn_buy");
const btn_dontbuy = document.querySelector("#btn_dontbuy");

btn_buy.addEventListener("click", () => {
    onBuy();
})

btn_dontbuy.addEventListener("click", () => {
    onDontBuy();
})

function onBuy() {
    document.cookie = "bought=true";
}

function onDontBuy() {
    open("https://youtu.be/dQw4w9WgXcQ");
    btn_dontbuy.style.display = "none";
}


window.addEventListener("load", () => {
<<<<<<< Updated upstream
    let cookies = document.cookie
    const bought = ('; '+document.cookie).split(`; bought=`).pop().split(';')[0];
    if (!cookies) {
        alert("erstes mal amk")
        document.cookie = "visited=true"
    }
    if (cookies) {
        ("moin")
    }
    if(bought){
        alert("bought")
    }
})
=======
  let cookies = document.cookie;
  const bought = ("; " + document.cookie)
    .split(`; bought=`)
    .pop()
    .split(";")[0];
  if (!cookies) {
    alert("Willkommen zum ersten mal hier");
    document.cookie = "visited=true; max-age=10;";
  }
  if (cookies) {
    //("moin")
  }
  if (bought) {
    //alert("bought");
  }
  if (localStorage.getItem("count") == null) {
    localStorage.setItem("count", 0);
  }
  else {
    visits.innerHTML = 'Besuche: ' + localStorage.getItem("count");
  }
  
  localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);
    
});

function deleteCookie() {
  document.cookie = `cookies-accepted=''; max-age=0`;
  document.cookie = `cookies.accepted=''; max-age=0`;
}




const a_user = "admin"
const a_pass = "admin"

/// TEST LOGIN

const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username == a_user && password == a_pass) {
    alert("Eingeloggt")
  }
>>>>>>> Stashed changes


function deleteCookie(){
    document.cookie = `cookies-accepted=''; max-age=0`;
    document.cookie = `cookies.accepted=''; max-age=0`;
}