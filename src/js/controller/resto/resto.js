
class RestoController {
    #container;
    constructor(parameters) {
        this.#container = document.querySelector("#container");
    }
    
    initialize() {
        this.#container.innerHTML = "";
    }

    renderCardProd(){
        const e = document.createElement("div");
        e.className = "card-prod";
        // This function will render a product card
        const mo = ``; 



    }
}

export const restoController = new RestoController();
