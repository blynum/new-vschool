


// Defining a Array of Colors
const colors = ["pick a color","red", "blue", "green", "purple"]

// Adding the "click" feature to the button and telling it what to do through a function.  The 'event.preventDefault' keeps the page from constantly refreshing. The event or click is stored in the newly created "subItem". Whatever is effected by the click will be add or appended to the id labeled "list". When the button is click it will create a new event, which will be stored as subItem under (or as a child) to the id label list.
document.getElementById("add").addEventListener("click", function(event){
    // event.preventDefault()
    const subItem = createSubItem(event)
    document.getElementById("list").appendChild(subItem)
    
})

// 
function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        // console.log(option.innerHTML)
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(event){
        event.target.parentElement.style.backgroundColor = event.target.value

    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

// const form = document.itemList

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     const name = form.listItem.value
//     form.listItem.value = ""

//     const subItem = document.createElement("subItem")

//     subItem.textContent += name
//     subItem.classList.add("itemList")

//     document.getElementById("list")[0].append(subItem)
// })

