
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
    button{
        background: blue;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
    }
    </style>
`
import { redirect } from '../index.js'
redirect('login')
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
            <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
            <input-wrapper id="cpassword" type="password" placeholder="confirm password"></input-wrapper>
            <button>Register</button>
            <a id="redirect">Already have an account? Login</a>
            </form>
        <div>
        ${style}
        `
        const registerFrom = this._shadowRoot.getElementById('register-form')
        registerFrom.addEventListener('submit', async (e) => {
            e.preventDefault() //chống gửi lên khi chưa ấn đăng ký

            let isValid = true
            const fname = this._shadowRoot.getElementById('first-name').value
            const lname = this._shadowRoot.getElementById('last-name').value
            const email = this._shadowRoot.getElementById('email').value
            const pass = this._shadowRoot.getElementById('password').value
            const cpass = this._shadowRoot.getElementById('cpassword').value

            if (fname.trim() === '') {
                this.SetError('first-name', 'please input first name')
                isValid = false
                // dua vao 
            }

            if (lname.trim() === '') {
                this.SetError('last-name', 'please input last name')
                isValid = false
            }

            if (email.trim() === '') {
                this.SetError('email', 'please input email')
                isValid = false
            }

            if (pass.trim() === '') {
                this.SetError('password', 'please input passpword')
                isValid = false
            }

            if (cpass.trim() === '') {
                this.SetError('cpassword', 'please input comfirm password')
                isValid = false

                if (cpass !== pass) {
                    this.SetError('cpassword', 'comfirm password is not true')
                    isValid = false
                }
            }
            if (!isValid) {
                return
            }
            const user = {
                fullname: `${fname} ${lname}`,
                email: email,
                password: pass,//Crypto.MD5(pass).toString(),
            }
            // neu email ton tai thi tra ra true
            const check = await this.checkEmailExit(email)
            if (check) {
                alert('Email đã được đăng ký')
            }
            else {
                firebase.firestore().collection('users').add(user)
                alert('Đăng ký thành công')
            }
        })
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            redirect('login')
        })
    }

    SetError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }

    async checkEmailExit(email) {
        const res = await firebase.firestore().collection('users')
            .where('email', '==', email).get()
        return !res.empty
    }
}
window.customElements.define('register-screen', RegisterScreen)

