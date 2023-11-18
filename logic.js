
const createOrder = document.getElementById('createOrder')
createOrder.addEventListener('click',()=>{
    document.getElementsByClassName("youRule")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "flex";
})

const rightside = document.getElementsByClassName('rightside')
rightside[0].addEventListener('click',()=>{
    document.getElementsByClassName("youRule")[0].style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "none";
    document.getElementsByClassName("aboutUs")[0].style.display = "block";
})

const home =document.getElementById('leftside')
home.addEventListener('click',()=>{
    location.reload();
})

let foodList = []
function addMore(){
    let foodItem = document.getElementById('foodItem')
    let extraCheese = document.getElementById('extraCheese')
    let onions = document.getElementById('onions')
    let tomato = document.getElementById('tomato')
    let bazel = document.getElementById('bazel') 
    let extras = 'Extras added along with item: '
    
    if(extraCheese.checked){
        extras+='Cheese '
    }
    if(onions.checked){
        extras+='onions '
    }
    if(tomato.checked){
        extras+='tomato '
    }
    if(bazel.checked){
        extras+='bazel '
    }
    if (extras=='Extras added along with item: '){
        extras='No topings added as extra'
    }
    let itemSeleted = [foodItem.value, extras]
    foodList.push(itemSeleted)

}

function checkOut(){
    let addHere = document.getElementById('addHere')
    if (foodList.length==0){
        alert("No items are added to cart 🙃")
    }
    else{
    addHere.innerHTML = ''
    addHere.innerHTML += '<br> <h2>Items added are: </h2>'}
    foodList.forEach(element => {
        addHere.innerHTML += `
            <div style="display: flex;">
                <img src="./images/${element[0]}.jpg"style="max-width: 150px; margin: 10px 0 0 0;">
                <h5 style="font-size: larger;">${element[1]}</h5>
            </div>
        `
    });
}