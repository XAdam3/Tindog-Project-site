class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    setDogHtml(container){
        container.style.background = `url(${this.avatar})`
        container.style.backgroundSize = "100%"
        container.innerHTML = 
            `
                <div class="badge">
                <img id="badge">
                </div>
                <div class="info-container">
                    <h2>${this.name}, ${this.age}</h2>
                    <p>${this.bio}</p>
                </div>
            `
    }
}

export default Dog

