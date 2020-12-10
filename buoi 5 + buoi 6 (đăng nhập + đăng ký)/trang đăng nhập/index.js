import './screens/register.js'
import './components/inputWrapper.js'
import './screens/login.js'
document.getElementById('app').innerHTML =
    `<register-screen></register-screen>`

redirect('register')
export function redirect(screenName) {
    if (screenName === 'register') {
        document.getElementById('app').innerHTML =
            `<register-screen></register-screen>`
    }
    else {
        if (screenName === 'login')
        {
            document.getElementById('app').innerHTML =
            `<login-screen></login-screeen>`
        }
    }
}