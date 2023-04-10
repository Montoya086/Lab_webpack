import "@babel/polyfill";
import './gnome_comp.js';
import './gnome.js';
import './person_comp.js';
import './styles';
if(document.getElementById('p2')!=null){
    const text = document.getElementById("text-p2");
    window.addEventListener("load", (event) => {
        setTimeout(() => {
            text.style.color="white";
            setTimeout(() => {
                window.location.href="p3.html";
            }, 4000);
        }, 1000);
    });
}