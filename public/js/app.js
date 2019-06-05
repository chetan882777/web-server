console.log("This is client side js file!")

fetch("http://localhost:3000/weather?address=barwani").then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})