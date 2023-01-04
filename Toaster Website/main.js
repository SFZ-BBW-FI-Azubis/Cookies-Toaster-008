const btn_buy = document.querySelector("#btn_buy");
const btn_dontbuy = document.querySelector("#btn_dontbuy");

btn_buy.addEventListener("click", () => {
    onBuy();
})

btn_dontbuy.addEventListener("click", () => {
    onDontBuy();
})

function onBuy() {
    alert("du wurdest abgezogen hahhahahahahahahahah")
}


function onDontBuy() {
    btn_dontbuy.style.display = "none";
}