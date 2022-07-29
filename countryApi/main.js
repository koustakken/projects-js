const searchBtn = document.getElementById('search-btn')
const countryInp = document.getElementById('country-inp')
const result = document.getElementById('result')

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img"></img>
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital: </h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Continents: </h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Population: </h4>
                        <span>${data[0].population}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Currency: </h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Common Languages: </h4>
                        <span>${Object.values(data[0].languages)
                            .toString()
                            .split(',')
                            .join(', ')
                        }</span>
                    </div>
                </div>
            `
    })
})