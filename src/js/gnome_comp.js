class Gnome extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowDOM = this.attachShadow({ mode: "open" });
        const link = document.createElement("link");
        shadowDOM.appendChild(link);
        const gnome = document.createElement("div");
        gnome.setAttribute("class", "gnome_css");
        gnome.style="color: white; position: relative; left: 400px; bottom: 70px;";
        shadowDOM.appendChild(gnome);

        const hat = document.createElement("div");
        hat.setAttribute("class", "gnome_hat");
        hat.innerText="/\\";
        hat.style="position: relative; left: 15px;";
        gnome.appendChild(hat);

        const head = document.createElement("div");
        head.setAttribute("class", "gnome_head");
        head.innerText="( ͡° ᴥ ͡°)";
        gnome.appendChild(head);

        const body = document.createElement("div");
        body.setAttribute("class", "gnome_body");
        body.innerText="/ ## \\";
        gnome.appendChild(body);

        const feet = document.createElement("div");
        feet.setAttribute("class", "gnome_feet");
        feet.innerText="##";
        feet.style="position: relative;left: 9px;";
        gnome.appendChild(feet);
    }

}
customElements.define("my-gnome", Gnome);
