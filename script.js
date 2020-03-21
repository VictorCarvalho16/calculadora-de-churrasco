const resultsDiv = document.querySelector('#results')
const calculaBtn = document.querySelector('#calcula')

calculaBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let pessoasInput = document.querySelector('#pessoas').value
    let horasInput = document.querySelector('#horas').value

    let carne = (pessoasInput * horasInput / 2) * 50
    if(carne >= 1000) {
        carne = `${carne / 1000}Kg`
    } else {
        carne = `${carne}g`
    }

    let vegetais = (pessoasInput * horasInput / 2) * 50
    if(vegetais >= 1000) {
        vegetais = `${vegetais / 1000}Kg`
    } else {
        vegetais = `${vegetais}g`
    }

    let cervejas = pessoasInput * horasInput
    if (cervejas > 1) {
        cervejas = `${cervejas} Latinhas`
    } else {
        cervejas = `${cervejas} Latinha`
    }
    

    let refrigerantes = (pessoasInput * horasInput) * 100
    if(refrigerantes >= 1000) {
        refrigerantes = `${refrigerantes / 1000} Lt`
    } else {
        refrigerantes = `${refrigerantes} ml`
    }

    let htmlContent = `
    <div class="col-sm-4 text-center col-xs-12">
        <h1 class="display-5">Comida</h1>
        <div class="row">
            <div class="col-6">
                <h5><i class="fas fa-carrot"></i> Vegetais</h5>
                <p>${vegetais}</p>
            </div>
            <div class="col-6">
                <h5><i class="fas fa-bacon"></i> Carnes</h5>
                <p>${carne}</p>
            </div>
        </div>
    </div>
    <div class="col-sm-4 text-center col-xs-12">
        <h1 class="display-5"><i class="fas fa-beer"></i> Cerveja</h1>
        <p>${cervejas}</p>
    </div>
    <div class="col-sm-4 text-center col-xs-12">
        <h1 class="display-5"><i class="fab fa-gulp"></i> Refrigerante</h1>
        <p>${refrigerantes} de Refrigerante</p>
    </div>
    `
    resultsDiv.innerHTML = htmlContent
})