import dogs from './data.js'
import {getNewDog, setBadge, toggleBtnState} from './utils.js'

let dogsDataArray = [...dogs]
const btnLike = document.querySelector('.btn-like')
const btnNope = document.querySelector('.btn-nope')

btnLike.addEventListener('click', ()=>{
        toggleBtnState(false, [btnLike, btnNope])
        setBadge('like')
        setTimeout(render, 2300)        
})
btnNope.addEventListener('click', ()=>{
        toggleBtnState(false, [btnLike, btnNope])    
        setBadge('nope')
        setTimeout(render, 2300)         
})

function render(){
    toggleBtnState(true, [btnLike, btnNope])
    const currentDog = getNewDog(dogsDataArray)
    currentDog.setDogHtml(document.getElementById('dog-image-container'))
    if (!dogsDataArray.length){
        dogsDataArray = [...dogs]
    }
}  

render()
