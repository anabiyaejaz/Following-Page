const addFriend = document.querySelector('#add')
const removeFriend =  document.querySelector('#remove')
const strng = document.querySelector('h4')


addFriend.addEventListener('click', () => {

        strng.innerHTML = 'Friends'
        strng.style.fontStyle = 'italic'
        strng.style.color = 'mediumseagreen'
        strng.style.fontWeight = 'bold'
    }

)

removeFriend.addEventListener('click', () => {

    strng.innerHTML = 'Stranger'
    strng.style.color = 'crimson'
}

)

// let app = 0

// addFriend.addEventListener('click', () => {
//     if(app == 0 ){
//          strng.innerHTML = 'Friends'
//          strng.style.color = 'Green'
//          addFriend.innerHTML = 'Remove'
//               addFriend.style.color = 'black;'
//          addFriend.style.backgroundColor = 'gray'
    
//          app = 1
    
//         } else {
//             strng.innerHTML = 'Stranger'
//             strng.style.color = 'crimson'
//             addFriend.innerHTML = 'Add-Friend'
//             addFriend.style.color = 'white'
//             addFriend.style.backgroundColor = 'rgb(25, 93, 115)'
//             app = 0
//         }
 
// })