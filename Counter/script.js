const heading = document.querySelector('h1');

function init(){
    console.log(document.cookie);

    let zaehler = +getZaehlerstand();
    
    if (isNaN(zaehler)){
        console.log("isNaN")
        zaehler=1;
    } else {
        zaehler++;
    }
    
//    document.cookie = "age=18; max-age=5";
    setZaehlerstand(zaehler);
//    document.cookie = "id=42; max-age=5";

    console.log(document.cookie);
 
    heading.innerHTML = zaehler;    
}

function getZaehlerstand(){
    return document.cookie.split(";")[0].split("=")[1];
}

function setZaehlerstand(zaehler) {
    document.cookie = "zaehler=" + zaehler + "; max-age=5";
}

function deleteCookie(){
    document.cookie = "zaehler=; max-age=-1";
}

init();

// "zaehler=1; name=peter"
// [0] = "zaehler=1"
// [1] = "name=peter"

// [0] = "zaehler"
// [1] = "1"