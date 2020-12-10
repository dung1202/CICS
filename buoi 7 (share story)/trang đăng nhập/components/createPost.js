class createPost extends HTMLElement
{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
    }
    connectedCallback(){
        this._shadowDom.innerHTML=
        `
            <from id="create-post">
                <textarea name="content" row="4"></textarea>
                <button>Post</button>
            </from>
        `
    }
}
window.customElements.define('create-post', createPost)
