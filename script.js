function getCatImage() {
  const addImgElem = document.createElement("img");
  const imgContainer = document.getElementById("imgContainer");
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].url);
      imgContainer.appendChild(addImgElem).src = data[0].url;
    });
}
