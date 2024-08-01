const xhr = new XMLHttpRequest()
// method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people/", true)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.results)
        showData(data.results)
    }
}


function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}