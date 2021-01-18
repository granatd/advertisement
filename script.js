const items = document.querySelectorAll(".new-year-container .products .item");

items.forEach((item) => {
  const buyNow = item.querySelector(".new-year-container .item .buy-now");

  item.addEventListener("mouseover", mouseOverHandler, false);
  item.addEventListener("mouseout", mouseOutHandler, false);
  buyNow.addEventListener("click", onClickHandler, false);
});

function mouseOverHandler(event) {
  // console.log(event.currentTarget);
  const item = event.currentTarget;
  const imgContainer = item.querySelector(
    ".new-year-container .item .img-container"
  );
  const buyNow = item.querySelector(".new-year-container .item .buy-now");

  imgContainer.classList.add("show");
  buyNow.classList.add("show");
}

function mouseOutHandler(event) {
  // console.log(event.currentTarget);
  const item = event.currentTarget;
  const imgContainer = item.querySelector(
    ".new-year-container .item .img-container"
  );
  const buyNow = item.querySelector(".new-year-container .item .buy-now");

  imgContainer.classList.remove("show");
  buyNow.classList.remove("show");
}

function onClickHandler(event) {
  const buyNow = event.currentTarget;

  event.preventDefault();
  console.log(buyNow.href);
}
