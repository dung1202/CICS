class Cardcomponent extends HTMLElement{
    constructor(){
        super()
        // Khai báo shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this._shadowDom.innerHTML =
        `
            <div>
                <h1>This is my component</h1>
            </div>
        `
    }
}
window.customElements.define('card-container', Cardcomponent)