import "@babel/polyfill";
import './gnome_comp.js';
import './gnome.js';
import './person_comp.js';
import './styles';
if(document.getElementById('p1')!=null){
    window.addEventListener("load", (event) => {
        setTimeout(() => {
            window.location.href="p2.html";
        }, 9000);
    });
}