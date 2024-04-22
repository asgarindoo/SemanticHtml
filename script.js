// script.js
document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Sofa Putih Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      name: "Meja dan Kursi Set",
      image: "https://via.placeholder.com/300",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Lampu Gantung",
      image: "https://via.placeholder.com/300",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Rak Buku Modern",
      image: "https://via.placeholder.com/300",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    // Tambahkan produk lainnya di sini
  ];

  const produkContainer = document.getElementById("produk-container");

  products.forEach((product) => {
    const produkItem = document.createElement("div");
    produkItem.classList.add("produk-item");
    produkItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button>Beli Sekarang</button>
      `;
    produkContainer.appendChild(produkItem);
  });
});

function showPopup(articleElement) {
  const popup = articleElement.querySelector(".popup");
  popup.style.visibility = "visible";
}

function hidePopup(articleElement) {
  const popup = articleElement.querySelector(".popup");
  popup.style.visibility = "hidden";
}
