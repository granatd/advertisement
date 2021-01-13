const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const buyNow = item.querySelector(".buy-now");

  item.addEventListener("mouseover", mouseOverHandler, false);
  item.addEventListener("mouseout", mouseOutHandler, false);
  buyNow.addEventListener("click", onClickHandler, false);
});

function mouseOverHandler(event) {
  // console.log(event.currentTarget);
  const item = event.currentTarget;
  const imgContainer = item.querySelector(".img-container");
  const buyNow = item.querySelector(".buy-now");

  imgContainer.style.transform = "scale(1.2)";
  buyNow.style.opacity = "1";
}

function mouseOutHandler(event) {
  // console.log(event.currentTarget);
  const item = event.currentTarget;
  const imgContainer = item.querySelector(".img-container");
  const buyNow = item.querySelector(".buy-now");

  imgContainer.style.transform = "scale(1)";
  buyNow.style.opacity = "0";
}

function onClickHandler(event) {
  const buyNow = event.currentTarget;

  event.preventDefault();
  console.log(buyNow.href);
}
