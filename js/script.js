let menuList =document.getElementById("menuItems");

menuList.style.maxHeight="0px";


function handleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight="300px";
    }
    else{
        menuList.style.maxHeight="0px";
    }
}