import { products } from "./data.js";

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
const ascBtn = document.querySelector(".asc");
const descBtn = document.querySelector(".desc");
const defaultBtn = document.querySelector(".default");
const sortBtn = document.querySelector(".sort");
const categorySelect = document.querySelector("#category");
const productForm = document.querySelector(".product-form");


function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
            <td><img src="${product.image}" width="100"/></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.rating.rate}</td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
        `;

    tBody.appendChild(trElem);
  });

  


}

searchInput.addEventListener("input", function (event) {
  

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(event.target.value.trim())
  );

  drawTable(filteredProducts);
});




sortBtn.addEventListener("click", function () {


  let sorted;
  if (this.textContent === "ASC by Price") {
    this.textContent = "DESC by Price";
    sorted = products.toSorted((a, b) => a.price - b.price);
  } else if (this.textContent === "DESC by Price") {
    this.textContent = "Default";
    sorted = products.toSorted((a, b) => b.price - a.price);
  } else {
    this.textContent = "ASC by Price";
    sorted = structuredClone(products);
  }
  drawTable(sorted);
});

drawTable(products)

categorySelect.addEventListener("change", function (event) {


  if (event.target.value !== "all") {
    const filteredProducts = products.filter(
      (p) => p.category === event.target.value
    );
    drawTable(filteredProducts);
  } else {
    drawTable(products);
  }

  drawTable(filteredProducts);


});

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
});