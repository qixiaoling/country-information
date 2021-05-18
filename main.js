
const countryName = document.getElementById("country-name");
const btn = document.querySelector(".search-btn");
const infoContainer = document.querySelector(".info-container");
let response=[];
//
window.addEventListener('DOMContentLoaded', function(){

  getCountry();
  btn.addEventListener("click", function (e) {
  console.log(e.currentTarget)
  if(countryName.value){
    response.data.map(function(item){
      if(item.name === countryName.value){
        const countryCurrencies = item.currencies.map((currency)=>{
          return currency.name;
        })
        const countryLanguanges = item.languages.map((lan)=>{
          return lan.name;
        })
        infoContainer.innerHTML =
            `<p><span class="country-name">${item.name}</span>
                is situated at <span class="location">${item.region}</span></p>
             <p>It has a population of ${item.population} people</p>
             <p>The capital is ${item.capital} and you can pay with ${countryCurrencies}</p>
             <p>They speak ${countryLanguanges}</p>`;
      }
    })
  }
})

})



async function getCountry(){
  response = await axios.get(
      "https://restcountries.eu/rest/v2/all/"
  );
  console.log(response.data)

}



