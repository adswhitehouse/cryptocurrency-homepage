// Variables
let menu = document.querySelector(".jsMenu");
let nav = document.querySelector(".jsNav");
let bitcoinPrice = document.querySelector(".jsBitcoinPrice");
let ethereumPrice = document.querySelector(".jsEthereumPrice");
let dogecoinPrice = document.querySelector(".jsDogecoinPrice");

// Animate header
menu.addEventListener("click", () => {
  nav.classList.toggle("nav-animation");
  menu.classList.toggle("rotate");
});

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=gbp",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  bitcoinPrice.textContent = `£${response.bitcoin.gbp}`;
  ethereumPrice.textContent = `£${response.ethereum.gbp}`;
  dogecoinPrice.textContent = `£${response.dogecoin.gbp}`;
});
