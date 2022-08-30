class DemorepoCounter extends HTMLElement {
  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.createStyles();
    this.initialize();
  }

  initialize() {
    this.button = document.createElement("button");
    this.setAttribute("count", 0);
    this.button.innerText = `Count is ${this.getAttribute("count")}`;
    this.button.addEventListener("click", () => this.increment());
    this.shadow.appendChild(this.button);
  }

  increment() {
    const count = Number(this.getAttribute("count")) + 1;
    this.setAttribute("count", count);
    this.button.innerText = `Count is ${this.getAttribute("count")}`;
  }

  createStyles() {
    const styles = `
            <style>
                button {
                    border-radius: 8px;
                    border: 1px solid transparent;
                    padding: 0.6em 1.2em;
                    font-size: 2em;
                    font-weight: 500;
                    font-family: inherit;
                    background-color: #1a1a1a;
                    cursor: pointer;
                    transition: border-color 0.25s;
                }
                button:hover {
                    border-color: #646cff;
                }
                button:focus,
                button:focus-visible {
                    outline: 4px auto -webkit-focus-ring-color;
                }
                
                @media (prefers-color-scheme: light) {
                    button {
                        background-color: #f9f9f9;
                    }
                }
                </style>
        `;
    this.shadow.innerHTML = styles;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  customElements.define("demorepo-counter", DemorepoCounter);
});
