const fullImgBox = document.getElementById("fullImgBox"),
    imgElement = document.getElementById("img-element"),
    rightBtn = document.getElementById("right-btn"),
    leftBtn = document.getElementById("left-btn"),
    closeImg = document.getElementById("closeImg"),
    //ListaImg = [Object.assign(document.querySelectorAll('.img'))]
    ListaImg = [...document.querySelectorAll('.img')];

console.log(ListaImg);

let indexImg = 0;

ListaImg.forEach((img,i) =>{
    img.addEventListener("click", (e) => {
        clicked(i)
        fullImgBox.style.display = "flex";
        imgElement.src = img.src
    })
});

function clicked(position){
    indexImg = position;
    imgElement.src = ListaImg[indexImg].src
}

rightBtn.addEventListener("click", e => {
    if(indexImg => ListaImg.length-1){
        indexImg = -1;        
    }
    indexImg++;
    imgElement.src = ListaImg[indexImg].src;
})

leftBtn.addEventListener("click", e => {
    if(indexImg <= 0){
        indexImg = ListaImg.length;
    }
    indexImg--;
    imgElement.src = ListaImg[indexImg].src;
})

closeImg.addEventListener("click", e => {
    fullImgBox.style.display = "none";
})