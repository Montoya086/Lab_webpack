const gnome = document.createElement("my-gnome");
const buble = document.getElementById("gnome-buble-p3");
bandera=true;
buble.addEventListener(
    "mouseover",
    (event) => {
        if(bandera){
            bandera=false
            gnome.style.position="relative";
            gnome.style.top="150px";
            gnome.style.left="-350px";
            buble.appendChild(gnome);
            setTimeout(() => {
                const text = document.createElement("p");
                text.innerText="Hola, soy el gnomo \n Acompañame a mi biblioteca!";
                text.style.color="white";
                text.style.position="relative";
                text.style.left="100px";
                text.style.top="40px";
                buble.appendChild(text);
                setTimeout(() => {
                    window.location.href="/src/index.html";
                }, 4000);
            }, 1000);
        }
    },
    false
  );