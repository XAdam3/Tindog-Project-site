import Dog from './Dog.js'

const getNewDog = arr => new Dog(arr.shift())

const setBadge = value => {
    if(value === 'like'){
        document.getElementById('badge').src = './images/badge-like.png'
    }
    else{
        document.getElementById('badge').src = './images/badge-nope.png'
    }
    document.getElementById('badge').style.visibility = 'visible'
}

const toggleBtnState = (boolState, buttonsArr)=> {
    for (let button of buttonsArr){
        button.disabled = !boolState
    }
} 

export {getNewDog, setBadge, toggleBtnState}