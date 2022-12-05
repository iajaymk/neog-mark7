var input = document.querySelector("#input");
var output = document.querySelector("#output-text");
var btnTranslate = document.querySelector("#btn-translate");
var URL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslation(text) {
    return URL + "?" + "text=" + text;
}

try {
    function clickEvent() {
        var inputText = input.value;

        fetch(getTranslation(inputText))
            .then((response) => response.json())
            .then((json) => (output.innerHTML = json.contents.translated));
    }
} 
catch (err) {
    console.log("error occured");
}

btnTranslate.addEventListener("click", clickEvent);