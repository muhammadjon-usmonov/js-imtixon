var elPokemonsList = document.querySelector(".pokemons__list");

var elForm = document.querySelector(".pokemons__form");
var elInputImg = document.querySelector(".input-img");
var elInputTitle = document.querySelector(".input-title");
var elInputType = document.querySelector(".input-type");
var elInputWeight = document.querySelector(".input-weight");
var elInputHeight = document.querySelector(".input-height");







function addNewPokemons(img, title, type,weight, height, massiv){

    var addNewImg =img.value.trim();
    var addNewTitle =title.value.trim(); 
    var addNewType =type.value.trim(); 
    var addNewWeight =weight.value.trim(); 
    var addNewHeight =height.value.trim(); 

    var addpokemnsObj = ({ 
        img:addNewImg,
        name:addNewTitle,
        type:addNewType,
        weight:addNewWeight,
        height:addNewHeight
    
    })

    massiv.unshift(addpokemnsObj);
}


function handleFormSubmit(evt){
    evt.preventDefault();

    addNewPokemons(elInputImg,
        elInputTitle,
        elInputType,
        elInputWeight,
        elInputHeight,
        pokemons);

        renderPokemon(pokemons);

        elInputImg.value=null;
        elInputTitle.value=null;
        elInputType.value=null;
        elInputWeight.value=null;
        elInputHeight.value=null;
}


elForm.addEventListener("submit", handleFormSubmit)
renderPokemon(pokemons);


function renderPokemon(_pokemons){

    elPokemonsList.innerHTML = null;
    for(var i=0; i < _pokemons.length; i++){

    // createElement for renderPokemon
    var newBox=document.createElement("div");
    var newLi=document.createElement("li");
    var newImg=document.createElement("img");
    var newInner = document.createElement("div");
    var newHeadingBox = document.createElement("div");
    var newHeading = document.createElement("h3");
    var newTypeList = document.createElement("ul");
    var newWeightHeight = document.createElement("div");
    var newWeight = document.createElement("p");
    var newHeight = document.createElement("p");



    newLi.setAttribute("class", "pokemons__item  mb-4");
    newBox.setAttribute("class", "inner bg-light  pt-4 pb-4");
    newImg.setAttribute("class", "pokemons__img d-block mx-auto mb-5");
    newImg.setAttribute("src",_pokemons[i].img);
    newImg.setAttribute("alt",_pokemons[i].name + ", poster");
    newImg.setAttribute("width",157);
    newImg.setAttribute("height",157);
    newInner.setAttribute("class", "inner__box ps-4 pt-4 fw-bold");
    newHeadingBox.setAttribute("class", "pokemons__headingbox mb-2")
    newHeading.setAttribute("class", "pokemons__heading fw-bold fs-4 mb-0");
    newTypeList.setAttribute("class", "pokemons__typelist d-flex list-unstyled  mb-4")
    newWeightHeight.setAttribute("class", "pokemons__wh fw-bold d-flex");
    newWeight.setAttribute("class","pokemons__weight");
    newHeight.setAttribute("class", "pokemons__height ms-4");
    

    newImg.textContent = _pokemons[i].img;
    newHeading.textContent = _pokemons[i].name;
    newWeight.textContent = _pokemons[i].weight; 
    newHeight.textContent = _pokemons[i].height;


    for( var j=0; j < _pokemons[i].type.length; j++ ){
        var newTypeItem = document.createElement("li");
        newTypeItem.setAttribute("class", "pokemons__typeitem ")
        newTypeItem.textContent = _pokemons[i].type[j];
        newTypeList.appendChild(newTypeItem);
    }

    
    newBox.appendChild(newImg);
    newHeadingBox.appendChild(newHeading);
    newWeightHeight.appendChild(newWeight);
    newInner.appendChild(newHeadingBox);
    newInner.appendChild(newTypeList);
    newInner.appendChild(newWeightHeight);
    newWeightHeight.appendChild(newHeight);
    newBox.appendChild(newInner);
    newLi.appendChild(newBox);
    elPokemonsList.appendChild(newLi);

}
}

renderPokemon(pokemons);


