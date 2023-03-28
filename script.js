// Création d'un élément carré
const carre=document.createElement("div");
carre.classList.add("carre");
const container= document.querySelector("#container");

//Boucle pour faire apparaitre à l'écran 4 carrés numérotés.
for(let i=1; i<=4; i++){
    
    let newCarre=carre.cloneNode();
    newCarre.innerText=i;
    container.appendChild(newCarre);

    //évènement click
    newCarre.addEventListener("click",function(){
        if(newCarre.getAttribute('class')=="carre"){
        //modifie la class de newCarre -> active l'animation.
        newCarre.classList.add("carre-clicked");
        }
        else{
            newCarre.classList.remove("carre-clicked");
        }
    });   
};



