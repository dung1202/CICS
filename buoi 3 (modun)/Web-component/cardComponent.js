const style = 
// `
//     <style>
//     .name{
//         color: red;
//     }
//     </style>
// `
    `
        <style>
        .card{
            font-family: sans-serif;
            border: 1px solid #dbdbdb;
            margin-right: 10px
        }
        .title{
            font-size: 1.5rem;
            font-weight: 600;
        }
        .card-body{
            border-top: 1px solid #dbdbdb;
            margin-right: 20px;
            color: #34eb34;
        }
        img{
            width: 100%;
        }
        <style>
    `
class Cardcomponent extends HTMLElement {
    constructor() {
        super()
        // Khai báo shadow_dom
        this._shadowDom = this.attachShadow({ mode: 'open' })
        this.imgSrc = this.getAttribute('imgSrc')
        this.title = this.getAttribute('content')
        this.des = this.getAttribute('des')
        this._shadowDom.innerHTML =
            // `
            //     ${style}
            //     <div class='name'>
            //         <h1>This is my component</h1>
            //     </div>
            // `
        `   
            
            <div class="card">
            <img src="${this.imgSrc}">
            
            <div class="card-body">
                <div class="title"> ${this.title} </div>
                <div class="descroption">  ${this.des} </div>
            </div>
            </div>
            ${style}
        `
    }
}
window.customElements.define('card-container', Cardcomponent)