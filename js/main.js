function teste () {
    window.location.href = "form.html"
}

document.getElementById("formulario").addEventListener("change",  function(event) {
    let cartoes = document.getElementById("cartoes")
    console.log(event.target)
    if (event.target.name == "toggle") {
        console.log(event.target.value)
        if (event.target.value == "pix") {
            cartoes.classList.add("hidden")
        }
        else {
            cartoes.classList.remove("hidden")
        }
    }

})