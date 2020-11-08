const requestURL = 'https://swapi.dev/api/people/1';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const json = jsonObject['page'];
    for (let i = 0; i < json.length; i++ ) {
      let starWars = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');


h2.textContent = name;
//h3.textContent = abilities[i].ability[i];
//h4.textContent = abilities[i].ability.is_hidden;


json.appendChild(h2);
//json.appendChild(h3);
//json.appendChild(h4);


document.querySelector('div.starWars').appendChild(starWars);
    }
  })