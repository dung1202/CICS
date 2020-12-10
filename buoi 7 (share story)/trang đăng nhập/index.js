import './screens/register.js'
import './components/inputWrapper.js'
import './screens/login.js'
import { getItemToLocalStorege } from '../trang đăng nhập/uitil.js'
import './components/header.js'
import './screens/story.js'
document.getElementById('app').innerHTML =
    `<register-screen></register-screen>`

checkAuthen()
async function checkAuthen() {
    const user = getItemToLocalStorege('currentUser')
    if (user) {

        const res = await firebase.firestore().collection('users')
            .where('email', '==', user.email).where('password', '==', user.password).get()
        if (res.empty) {
            redirect('login')
        }
        else {
            redirect('story')
        }
    }
    else
    {
        redirect('login')
    }
}
redirect('register')
export function redirect(screenName) {
    if (screenName === 'register') {
        document.getElementById('app').innerHTML =
            `<register-screen></register-screen>`
    }
    else
        if (screenName === 'login') {
            document.getElementById('app').innerHTML =
                `<login-screen></login-screeen>`
        }

        else
            if (screenName === 'story') {
                document.getElementById('app').innerHTML =
                    `<story-screen></story-screen>`
            }

}