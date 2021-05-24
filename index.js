// data fetching

window.onload = function () {
  console.log("The page is been loaded");
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderImgs(data);
    });
};

// selecting few html elements;
const tileRow = document.getElementById("tile-row");
// render imgs for to show;

const renderImgs = (data) => {
  for (i = 0; i < data.length; i++) {
    const tile = data[i];
    tileRow.innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3 mb-3" style="width: 18rem">
                                <img src=${tile.img} class="card-img-top img-fluid" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${tile.title}</h5>
                                <p class="card-text">price: ${tile.price}  category: ${tile.category}</p>
                                
                                </div>
                            </div>`;
  }
};
const searchBtn = document.getElementById("search-btn");
