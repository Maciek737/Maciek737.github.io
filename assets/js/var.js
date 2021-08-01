const selectElement = document.getElementById('var1');


selectElement.addEventListener('change', addRow);

function addRow(){
    let tableRef = document.getElementById("varTable");
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    newCell1.innerHTML = `<input type="text" placeholder="Variant"  name="var1" value=""></input>`
    newCell2.innerHTML = `<input type="text" name="qty1" value="1"></input>`
    newCell1.addEventListener('change', addRow);
    console.log("hello")
}

function readData(){
    let table = document.getElementById("varTable")
    let store = document.querySelector(".active").id
    let rowLength = table.rows.length
    let varList = []
    let stores = ["https://checkout.funko.com/cart/","https://funkoeurope.com/cart/","https://toytokyo.com/cart/"]
    console.log("Hello")
    console.log(store)

    for(let i=1; i < rowLength; i++){
        let cells = table.rows.item(i).cells
        let cellLength = cells.length

        for(let j=0;j<cellLength;j+=2){
            let vars = cells.item(j).firstElementChild.value;
            let qty = cells.item(j+1).firstElementChild.value;
            if(vars != ""){
                let combined = vars +":"+qty
                varList.push(combined)
            }
            
            
        }
    }

    let checkout = stores[store]
    for(let x = 0; x<varList.length; x++){
        checkout+=varList[x]+','
    }
    window.open(
        checkout, "_blank");
    
    console.log(varList)
}

