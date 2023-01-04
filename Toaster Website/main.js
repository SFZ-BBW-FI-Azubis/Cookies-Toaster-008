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


function deleteCookie(){
    document.cookie = `cookies-accepted=''; max-age=0`;
    document.cookie = `cookies.accepted=''; max-age=0`;
}