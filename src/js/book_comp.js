//Book display
class bDisplay extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowDOM = this.attachShadow({ mode: "open" });
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./styles/sass/styles.css");
        shadowDOM.appendChild(link);
        const card = document.createElement("div");
        if(this.getAttribute("type")==2){
            card.setAttribute("class","book-card2");
        }else{
            card.setAttribute("class","book-card");
        }
        shadowDOM.appendChild(card);

        const image = document.createElement("img");
        image.setAttribute("src",this.getAttribute("src"));
        image.setAttribute("class","book-card-image");
        card.appendChild(image);

        const title = document.createElement("p");
        title.innerText="Titulo: "+this.getAttribute("title");
        title.setAttribute("class","book-card-title");
        card.appendChild(title);

        const author = document.createElement("p");
        author.innerText="Autor: "+this.getAttribute("author");
        author.setAttribute("class","book-card-author");
        card.appendChild(author);
    }

}
customElements.define("my-display", bDisplay);