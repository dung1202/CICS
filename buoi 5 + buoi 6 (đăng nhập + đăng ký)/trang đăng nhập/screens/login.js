
const style = `
<style>
.login-container{
width: 100vw;
height: 100vh;
background: url('https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg');
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: flex-end;
}
#login-form{
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
class loginScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
    <div class="login-container">
        <form id="login-form">
        <h1>CI Project</h1>
        <input-wrapper id="first-name" type="text" placeholder="Full name"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <button>login</button>
        <a id="redirect">Already have not an account? register</a>
        </form>
    <div>
    ${style}
    `
        const loginFrom = this._shadowRoot.getElementById('login-form')
        loginFrom.addEventListener('submit', async (e) => {
            e.preventDefault() //chống gửi lên khi chưa ấn đăng ký

            let isValid = true
            const fname = this._shadowRoot.getElementById('first-name').value
            const pass = this._shadowRoot.getElementById('password').value

            if (fname.trim() === '') {
                this.SetError('first-name', 'please input first name')
                isValid = false
                // dua vao 
            }
            if (pass.trim() === '') {
                this.SetError('password', 'please input passpword')
                isValid = false
            }
            if (!isValid) {
                return
            }
            const check = await this.checkEmailExit(fname, pass)
            if (check) {

                alert('Đăng nhập thành công')
            }
            else {
                alert('sai mk or fullname')
            }

        })

        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            redirect('register')
        })
    }

    SetError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }

    async checkEmailExit(email, pass) {
        const res = await firebase.firestore().collection('users')
            .where('name', '==', email).where('password', '==', pass).get()
        return res.empty
    }
}
window.customElements.define('login-screen', loginScreen)

