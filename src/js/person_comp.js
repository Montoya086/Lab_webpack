class Person extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowDOM = this.attachShadow({ mode: "open" });
        const link = document.createElement("link");
        shadowDOM.appendChild(link);
        const person = document.createElement("div");
        person.setAttribute("class", "person_css");
        person.style="color: #FFF;font-weight: 600;";
        shadowDOM.appendChild(person);

        const head = document.createElement("div");
        head.setAttribute("class", "person_hat");
        head.innerText="O";
        person.appendChild(head);

        const chest = document.createElement("div");
        chest.setAttribute("class", "person_chest");
        chest.innerText="/|\\";
        person.appendChild(chest);

        const body = document.createElement("div");
        body.setAttribute("class", "person_body");
        body.innerText="|";
        body.style="position: relative;left: 5px;";
        person.appendChild(body);

        const feet = document.createElement("div");
        feet.setAttribute("class", "person_feet");
    feet.innerText="/ \\ ";
        person.appendChild(feet);
    }

}
customElements.define("my-person", Person);