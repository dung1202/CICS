const style =
    `
    <style>
    .tp{
        background-color: wheat;
        border-radius: 10px;
        width: 25vw;
        height: 70px;
        font-size: 16px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #220000;
        margin-bottom: 20px;
        margin-right: 20px;
        padding: 20px 20px 20px 25px;
    }
    </style>

`
class CardComponent extends HTMLElement {
    constructor() {
        super()
        // khai bao shadow_dom
        this._shadowDom = this.attachShadow({ mode: 'open' })

    }




    // dc goi khi compoment duoc show ra man hinh
    connectedCallback() {
        this.name = this.getAttribute('name')
        this.age = this.getAttribute('age')
        this.classroom = this.getAttribute('classroom')
        this.villageE = this.getAttribute('villageE')
        this._shadowDom.innerHTML = `
                    <div class="tp">
                        <div>Họ và tên: ${this.name}</div>
                        <div>Tuổi: ${this.age}</div>
                        <div>Lớp: ${this.classroom}</div>
                        <div>Quê quán: ${this.villageE}</div>
                    </div>
                    ${style}
        `

        console.log('element' + this.name + 'vua dc sinh ra')
    }

    // dc goi khi compoment bi xoa di
    disconnectedCallback() {
        console.log('element' + this.name + 'vua bi xoa ra')
    }

    // lang nghe thay doi nhung attribute nao
    static get observeArribute() {
        return name
    }

    // duoc goi khi ca bat ky su thay doi attribute nao
    attributesChangedCallback(name, oldValue, newValue) {
        console.log('newvalue', newValue)
        console.log('oldValue', oldValue)
        console.log('attribute', name)
    }
}
window.customElements.define('card-container', CardComponent)