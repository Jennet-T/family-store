setTimeout(function(){
    //DOBAW ortasyna koymagyn kody
    const btn = document.getElementById('dobaw_button')
    const add_table = document.getElementById('add_table')
    const add = document.getElementById('add')
    
    btn.style.marginTop = (add_table.offsetHeight/2) + 'px'
    
    //ADD_TABLE-y iza sushurmali
    add.style.left = '-' + (add_table.offsetWidth + 1) + 'px'
    add.style.top = (document.body.offsetHeight / 2 - add.offsetHeight/2) + 'px'

    //DATABASE-dan produktalary get

    const shablon = document.getElementById('shablon')
    $.post('work.php',
    {
        'get_products': true
    },
    function(str){
        data = JSON.parse(str)
        
        RenameShablon(shablon, data)
    })

},10)

function ShowHideProducts(elem)
{
    const store = elem.parentNode;
    const products = store.children[1];
    if(products.style.height == "0px")
    {
        curHeight = $(products).height()
        autoHeight = $(products).css('height', 'auto').height();
        $(products).height(curHeight).animate({height: autoHeight}, 600);
    }
    else
    {
        $(products).animate({height: "0px"}, 600)
    }
}

function CheckProduct(elem)
{
    elem.children[0].checked = !elem.children[0].checked
    elem.children[1].classList.toggle("clicked")
}

function DragAdd(elem)
{
    const add = elem.parentNode;

    if(add.style.left == '0px')
    {  
        $(add).animate({left: '-' + (document.getElementById('add_table').offsetWidth + 1) + 'px'}, 600)
    }
    else
    {
        $(add).animate({left: '0px'}, 600)
    }
}

function Dobaw()
{
    const product = document.getElementById('produkta_input')
    const shop = document.getElementById('magazin_select')
    const amount = document.getElementById('amount_input')
    const type = document.getElementById('amount_ta_kg')

    product.style.borderColor = "black"
    amount.style.borderColor = "black"

    if(product.value == '') product.style.borderColor = "red"
    else if(amount.value == '') amount.style.borderColor = "red"
    else{
        $.post("work.php",
        {
            'product': product.value,
            'shop': shop.value,
            'amount': amount.value,
            'type': type.value,
            'dobaw_products': 'dobaw'
        },
        function(data){
            console.log(data)
        })
    }
}

function RenameShablon(shbl, data)
{
    data.forEach(store => {
        const tshbl = shbl.cloneNode(true)
        const sproduct = tshbl.children[1].children[0].cloneNode(true);
        tshbl.children[1].children[0].remove()
        tshbl.id = store[0].magazin.replace(/ /g, "_")
        tshbl.children[0].children[0].innerText = store[0].magazin
        store.forEach(product => {
            const tsproduct = sproduct.cloneNode(true);
            tsproduct.children[1].innerText = product.name
            tshbl.children[1].appendChild(tsproduct)
        });
        document.getElementById('table').appendChild(tshbl)
    });
}