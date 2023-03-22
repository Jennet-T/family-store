// BUTTON EQUAL DISTANCE
// setTimeout(function(){
//     const add = document.getElementById('add_button')
//     const tasks = document.getElementById('tasks_button')
//     const history = document.getElementById('history_button')
//     const header = document.getElementById('header').offsetWidth

//     console.log("Header: " + header)
//     console.log("Add: " + add.offsetWidth)
//     console.log("Tasks: " + tasks.offsetWidth)
//     console.log("History: " + history.offsetWidth)
    
//     add.style.marginLeft = (header - add.offsetWidth - tasks.offsetWidth - history.offsetWidth) / 4.3
//     tasks.style.marginLeft = (header - add.offsetWidth - tasks.offsetWidth - history.offsetWidth) / 4.3
//     history.style.marginLeft = (header - add.offsetWidth - tasks.offsetWidth - history.offsetWidth) / 4.3

// },10)



function ShowHideProducts(elem)
{
    const store = elem.parentNode;
    const products = store.children[1];
    if(products.style.display == "none")
    {
        products.style.display = "block"
    }
    else
    {
        products.style.display = "none"
    }
}

function CheckProduct(elem){
    elem.children[0].checked = !elem.children[0].checked
    
    if(elem.children[1].style.textDecoration == "line-through")
    {
        elem.children[1].style.textDecoration = "none"
    }
    else
    {
        elem.children[1].style.textDecoration = "line-through"
    }
}