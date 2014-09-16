/* 
 * Eduvision
 * Cursus Javascript
 * 
 * Vraag: CvV
 * Waarom geen document.write(); gebruiken?
 * 
 * Datum
 * 16-09-2014
 */

window.addEventListener("load", onWindowLoad);
window.onresize = function(event) {
    loadCSS();
};

var css = document.getElementById('mainStyleSheet').attributes['href'];
var response = document.getElementById('response');
 
function onWindowLoad() {
    loadCSS();
}

function loadCSS() {
    if ( window.matchMedia("(min-width: 500px)").matches ) {
        var stylesheet = css.value = "desktop.css";
        response.innerHTML = '<mark>DESKTOP</mark>';
    } else {
        var stylesheet = css.value = "mobile.css";
        response.innerHTML = '<mark>MOBILE</mark>';
    } 
}