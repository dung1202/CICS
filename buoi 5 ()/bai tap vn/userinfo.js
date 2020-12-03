class UserInfo extends HTMLElement{
    constructor()
    {
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    connectedCallback()
    {   
        this.name = this.getAttribute('name')
        this.shadow.innerHTML=
        `
            <div>
                <div>${this.name}</div>
            </div>
        `
    }
}

window.customElements.define('user-info', UserInfo)