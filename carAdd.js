

function carAdd() {
    alert('car Add');
  
    var car_name = document.querySelector("#car_name").value || "gfds";
    var car_img = document.querySelector("#car_img").value || "gfds";
    var ownerName = document.querySelector("#owner_name").value || "asdfg";
    var price = document.querySelector("#price").value || "abc";
  
    fetch('http://localhost:4001/adding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        carName: car_name,
        carimg: car_img,
        ownerName: ownerName,
        price: price 
      })
    })
    .then(response => response.json())
    .then(() => {
      
      return fetch('http://localhost:4001/alldatacar');
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
      var addcar = document.querySelector(".addcar");
      addcar.innerHTML = ""; 
  
      data.forEach(s => {
        var car_card = document.createElement("div");
        car_card.className = "car_card";
  
        var car_name = document.createElement("div");
        car_name.className = "car_name";
        var h2 = document.createElement("h2");
        h2.innerHTML = s.carName;
  
        var car_img = document.createElement("div");
        car_img.className = "car_img";
        var img = document.createElement("img");
        img.src = s.carimg; 
  
        var name_price = document.createElement("div");
        name_price.className = "name_price";
        var h3 = document.createElement("h3");
        h3.innerHTML = s.ownerName;
  
        var hh3 = document.createElement("h3");
        hh3.innerHTML = s.price;
  
        car_name.appendChild(h2);
        car_img.appendChild(img);
        name_price.appendChild(h3);
        name_price.appendChild(hh3);
  
        car_card.appendChild(car_name);
        car_card.appendChild(car_img);
        car_card.appendChild(name_price);
  
        addcar.appendChild(car_card);
      });
  
  
  
    });
  }
  