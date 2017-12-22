

function getFoods(data) {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    data = JSON.parse(this.responseText);
    let brands = data.brands;
    buildHTML(brands)
  });
  
  request.open("GET", data);
  request.send();
}


function buildHTML(brands) {
  let food = document.getElementById('food');

  for (let i = 0; i < brands.length; i++) {
    let brandDiv = document.createElement('div');
    brandDiv.classList.add('brand');
    let brand = document.createTextNode(brands[i].name);
    brandDiv.appendChild(brand);
    food.appendChild(brandDiv);

    if (brands[i].breeds) {
      let breeds = brands[i].breeds;
      for (let i = 0; i < breeds.length; i++) {
        let breedDiv = document.createElement('div');
        let breed = document.createTextNode(breeds[i]);
        breedDiv.appendChild(breed);
        food.appendChild(breedDiv);
      }
    }
    let types = brands[i].types;

    for (let i = 0; i < types.length; i++) {
      let typeDiv = document.createElement('div');
      typeDiv.classList.add('type');
      let type = document.createTextNode(types[i].type);
      typeDiv.appendChild(type);

      food.appendChild(typeDiv);
      let volumes = types[i].volumes;

      for (let i = 0; i < volumes.length; i++) {
        let volDiv = document.createElement('div');
        let volSize = document.createTextNode(volumes[i].size);
        let volPrice = document.createTextNode(volumes[i].price);
        volDiv.appendChild(volSize);
        food.appendChild(volDiv);
        food.appendChild(volPrice);

      }

    }


  }
}
getFoods('catfood.json');
getFoods('dogfood.json');