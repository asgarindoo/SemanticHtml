// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mengubah nama produk menjadi string yang dapat digunakan dalam URL
  function formatProductNameForURL(productName) {
    // Menghilangkan spasi dan mengganti dengan tanda hubung (-)
    return productName.toLowerCase().replace(/\s+/g, "-");
  }

  // Data produk dengan nama dalam bahasa Inggris dan URL gambar yang ditetapkan secara statis
  const products = [
    {
      name: "White Modern Sofa",
      description:
        "Modern white sofa with an elegant design, perfect for comfortable seating.",
      price: 1500000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1507138451611-3001135909fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Table and Chair Set",
      description:
        "Minimalist table and chair set suitable for living rooms or dining rooms.",
      price: 1200000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1634133958135-25e6d58df149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRhYmxlJTIwYW5kJTIwQ2hhaXIlMjBTZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Minimalist Hanging Lamp",
      description:
        "Hanging lamp with minimalist design suitable for modern room lighting.",
      price: 500000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluaW1hbGlzdCUyMEhhbmdpbmclMjBMYW1wfGVufDB8fDB8fHww",
    },
    {
      name: "Modern Bookshelf",
      description:
        "Modern bookshelf with plenty of storage space suitable for storing your book collection.",
      price: 800000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoZWxmfGVufDB8fDB8fHww",
    },
    {
      name: "Comfortable Sofa Bed",
      description:
        "Comfortable and practical sofa bed, can be converted into a bed for visiting guests.",
      price: 2000000, // Harga dalam Rupiah
      image:
        "https://plus.unsplash.com/premium_photo-1677739767604-8ac8667f0794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29mYSUyMEJlZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Wooden Wardrobe",
      description: "Wardrobe made of high-quality wood with an elegant design.",
      price: 1800000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1527854269107-68e2d1343e1d?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Minimalist Work Desk",
      description:
        "Work desk with minimalist design suitable for office spaces or study corners.",
      price: 900000, // Harga dalam Rupiah
      image:
        "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Modern TV Cabinet",
      description:
        "TV cabinet with modern design and enough storage space for electronic devices.",
      price: 1200000, // Harga dalam Rupiah
      image:
        "https://images.unsplash.com/photo-1565058650109-849d383455ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wooden Lounge Chair",
      description:
        "Lounge chair with natural wooden material that gives a warm and natural impression in your living room.",
      price: 600000, // Harga dalam Rupiah
      image:
        "https://plus.unsplash.com/premium_photo-1681449856689-8e1087f321f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const produkContainer = document.getElementById("produk-container");

  products.forEach((product) => {
    const produkItem = document.createElement("div");
    produkItem.classList.add("produk-item");
    produkItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <h5>Rp ${product.price.toLocaleString()}</h5>
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
