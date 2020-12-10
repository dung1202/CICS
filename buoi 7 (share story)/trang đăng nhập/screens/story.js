import '../components/createPost.js'
class StoryScreen extends HTMLElement
{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({ mode: 'open'})
    }

    connectedCallback()
    {
        this._shadowDom.innerHTML=
        `<story-header></story-header>
        <create-post></create-post>
        `
    }
}
window.customElements.define('story-screen', StoryScreen)

