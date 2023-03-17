class Gnome extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowDOM = this.attachShadow({ mode: "open" });
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "styles.css");
        shadowDOM.appendChild(link);
        const gnome = document.createElement("div");
        gnome.setAttribute("class", "gnome_css");
        shadowDOM.appendChild(gnome);

        const hat = document.createElement("div");
        hat.setAttribute("class", "gnome_hat");
        hat.innerText="/\\";
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
        gnome.appendChild(feet);
    }

}

customElements.define("my-gnome", Gnome);