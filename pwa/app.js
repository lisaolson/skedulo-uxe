const container = document.querySelector(".container");
const userInfo = document.querySelector(".userInfo");
const employees = [
  { id: "one", name: "Andy Johnson", role: "HR Manager", preferredName: "Andy", pronouns: "he/him", phone: "777-777-7777", birthday: "02/14/1990", image: "images/headshot1.webp" },
  { id: "two", name: "Grace Evans", role: "Software Engineer", preferredName: "Gracie", pronouns: "she/her/they", phone: "123-444-3333", birthday: "07/31/1987", image: "images/headshot2.webp" },
  { id: "three", name: "Joe Wilson", role: "HR", preferredName: "Joe", pronouns: "she/her", phone: "897-222-3333", birthday: "01/29/1989", image: "images/headshot3.jpeg" },
  { id: "four", name: "Sally Evenson", role: "Marketing Manager", preferredName: "Sall", pronouns: "they/them", phone: "435-521-7634", birthday: "06/11/2000", image: "images/headshot4.webp" },
  { id: "five", name: "Joey Cunnings", role: "UX Researcher", preferredName: "Jo", pronouns: "she/her", phone: "729-223-0097", birthday: "", image: "images/headshot5.webp" },
  { id: "six", name: "Ava Sparks", role: "Technical Recruiter", preferredName: "Cassie", pronouns: "he/him", phone: "", birthday: "", image: "images/headshot6.webp" },
  { id: "seven", name: "Abbey Roads", role: "", preferredName: "Shawna", pronouns: "she/her", phone: "", birthday: "04/02/1982", image: "images/headshot7.jpeg" },
]

const showEmployees = () => {
    let output = ""
    employees.forEach(
      ({ id, name, image }) =>
        (output += `
                <div class="card" id=${id}>
                  <img class="card--image" src=${image} />
                  <p class="card--name">${name}</p>
                </div>
                `)
    )
    container.innerHTML = output;
  }

    const userDetailsOne = () => {
      const image = employees[0].image;
      const name = employees[0].name;
      const role = employees[0].role;
      const preferredName = employees[0].preferredName;
      const pronouns = employees[0].pronouns;
      const phone = employees[0].phone;
      const birthday = employees[0].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }
  
    const userDetailsTwo = () => {
      const image = employees[1].image;
      const name = employees[1].name;
      const role = employees[1].role;
      const preferredName = employees[1].preferredName;
      const pronouns = employees[1].pronouns;
      const phone = employees[1].phone;
      const birthday = employees[1].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }

    const userDetailsThree = () => {
      const image = employees[2].image;
      const name = employees[2].name;
      const role = employees[2].role;
      const preferredName = employees[2].preferredName;
      const pronouns = employees[2].pronouns;
      const phone = employees[2].phone;
      const birthday = employees[2].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }

    const userDetailsFour = () => {
      const image = employees[3].image;
      const name = employees[3].name;
      const role = employees[3].role;
      const preferredName = employees[3].preferredName;
      const pronouns = employees[3].pronouns;
      const phone = employees[3].phone;
      const birthday = employees[3].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }
    const userDetailsFive = () => {
      const image = employees[4].image;
      const name = employees[4].name;
      const role = employees[4].role;
      const preferredName = employees[4].preferredName;
      const pronouns = employees[4].pronouns;
      const phone = employees[4].phone;
      const birthday = employees[4].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }
    const userDetailsSix = () => {
      const image = employees[5].image;
      const name = employees[5].name;
      const role = employees[5].role;
      const preferredName = employees[5].preferredName;
      const pronouns = employees[5].pronouns;
      const phone = employees[5].phone;
      const birthday = employees[5].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }
    const userDetailsSeven = () => {
      const image = employees[6].image;
      const name = employees[6].name;
      const role = employees[6].role;
      const preferredName = employees[6].preferredName;
      const pronouns = employees[6].pronouns;
      const phone = employees[6].phone;
      const birthday = employees[6].birthday;

      container.innerHTML = `
      <div class="card cardDetail">
        <img class="card--image" src=${image} />
        <p class="card--name">${name}</p>
        <p>${role}</p>
        <p>${preferredName}</p>
        <p>${pronouns}</p>
        <p>${phone}</p>
        <p>${birthday}</p>
        <button onClick="window.location.reload();">Back</button>
      </div>
      `
    }


  
  window.onload = function(){
    let userOne = document.querySelector('#one');
    userOne.addEventListener("click", userDetailsOne);
    let userTwo = document.querySelector('#two');
    userTwo.addEventListener("click", userDetailsTwo);
    let userThree = document.querySelector('#three');
    userThree.addEventListener("click", userDetailsThree);
    let userFour = document.querySelector('#four');
    userFour.addEventListener("click", userDetailsFour);
    let userFive = document.querySelector('#five');
    userFive.addEventListener("click", userDetailsFive);
    let userSix = document.querySelector('#six');
    userSix.addEventListener("click", userDetailsSix);
    let userSeven = document.querySelector('#seven');
    userSeven.addEventListener("click", userDetailsSeven);
  }

  document.addEventListener("DOMContentLoaded", showEmployees);


  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }