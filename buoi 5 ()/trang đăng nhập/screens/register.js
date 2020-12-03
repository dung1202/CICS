
const style = `
    <style>
    .register-container{
    width: 100vw;
    height: 100vh;
    background: url('https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    }
    #register-form{
        width: 30%;
        background: #fff;
        height: 100vh;
    }
    h1{
        text-align: center;
        color: #333;
    }
    </style>
`

class RegisterScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
        <div class="register-container">
            <form id="register-form">
            <h1>CI Project</h1>
            <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
            <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
            <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
            <input-wrapper type="password" placeholder="Password"></input-wrapper>
            <input-wrapper type="password" placeholder="Repeat password"></input-wrapper>
            <button>Register</button>
            </form>
        <div>
        ${style}
        `
        const registerFrom = this._shadowRoot.getElementById('register-form') 
        registerFrom.addEventListener('submit', (e) => {
            e.preventDefault() //chống gửi lên khi chưa ấn submit
            console.log(this._shadowRoot.getElementById('first-name').value)
            console.log(this._shadowRoot.getElementById('last-name').value)
            console.log(this._shadowRoot.getElementById('email').value)
            console.log(this._shadowRoot.getElementById('password').value)
        })
    }
}
window.customElements.define('register-screen', RegisterScreen)