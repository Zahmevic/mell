let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    let API = "rPbzrctc0vi5kuRkFLg7Z4dqWc1W4uxow8GLv5Mg";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data) {
document.querySelector("#content").innerHTML += `<img src="${data.url}">`
document.querySelector("#content").innerHTML += `<iframe src="${data.url} width="100%" height="500px"></iframe>`
}