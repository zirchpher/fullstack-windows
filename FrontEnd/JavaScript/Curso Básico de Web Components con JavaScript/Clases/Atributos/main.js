class RemixElCrack extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Atributos personalizados, lo obtenemos desde la etiqueta definida de la clase
        this.title = this.getAttribute("title");
        this.img = this.getAttribute("img");
        this.subtitle = this.getAttribute("subtitle");
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2 class="title">${this.title}</h2>
                <div>
                    <p>${this.subtitle}</p>
                </div>
                <figure>
                    <img src="${this.img}" alt="Arch Linux Icon"/>
                </figure>
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `
            <style>
                h2{
                    color: blue;
                }
            </style>
        `;
    }

    render() {
        const template = this.getTemplate().content.cloneNode(true);
        this.shadowRoot.appendChild(template);
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("remix-elcrack", RemixElCrack);
