var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"


function getTranslationURl(input){
    return serverURL + "?" + "text=" +input
}

function errorHandler(error){
    alert("something went wrong with the server, try again after some time")
}

function clickHandler(){
    //calling input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
    .catch(errorHandler)
}
   

btnTranslate.addEventListener("click", clickHandler)