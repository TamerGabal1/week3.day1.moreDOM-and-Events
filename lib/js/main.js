let weaponArticle = document.getElementById("weapons");
let outfitsArticle = document.getElementById("outfits");
let moneyArticle = document.getElementById("money");

let draggingWeapon=false;
let draggingOutfits = false;
let draggingMoney = false;

weaponArticle.onmousedown=function(){draggingWeapon=true;}
weaponArticle.onmouseup=function(){draggingWeapon=false;}

outfitsArticle.onmousedown=function(){draggingOutfits=true;}
outfitsArticle.onmouseup=function(){draggingOutfits=false;}

moneyArticle.onmousedown=function(){draggingMoney=true;}
moneyArticle.onmouseup=function(){draggingMoney=false;}

document.onmousemove=function(event){
    if(draggingWeapon){
        weaponArticle.onmousemove=function(){
            weaponArticle.style.position = "absolute";
            weaponArticle.style.zIndex = 1000;
            weaponArticle.style.left = event.pageX - weaponArticle.offsetWidth/2 + "px" ;
            weaponArticle.style.top = event.pageY - weaponArticle.offsetHeight/2+ "px";
        }
    }

    else if(draggingOutfits){
        outfitsArticle.onmousemove=function(){
            outfitsArticle.style.position = "absolute";
            outfitsArticle.style.zIndex = 1000;
            outfitsArticle.style.left = event.pageX - weaponArticle.offsetWidth/2 + "px" ;
            outfitsArticle.style.top = event.pageY - weaponArticle.offsetHeight/2+ "px";
        }
    }

    else if(draggingMoney){
        moneyArticle.onmousemove=function(){
            moneyArticle.style.position = "absolute";
            moneyArticle.style.zIndex = 1000;
            moneyArticle.style.left = event.pageX - weaponArticle.offsetWidth/2 + "px" ;
            moneyArticle.style.top = event.pageY - weaponArticle.offsetHeight/2+ "px";
        }
    }
}