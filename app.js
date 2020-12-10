var btntranslate = document.querySelector('#btn-translate')
var txtarea = document.querySelector('#txt-translate')
var txtareaOutput = document.querySelector('#txt-translated')
var serverURL = 'https://api.funtranslations.com/translate/minion.json'
function getTranslateUrl(text) {
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error Occured", error)
}
function translate() {
    var inputText = txtarea.value // taking Input 

    // calling server for processing
    fetch(getTranslateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            txtareaOutput.innerHTML = json.contents.translated})
        .catch(errorHandler)
}

btntranslate.addEventListener("click", translate)