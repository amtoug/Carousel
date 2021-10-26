var Carousel1 =document.getElementsByClassName("Carousel1")
var Carousel1Point=document.getElementsByClassName("points1")
Carousel1[0].style.width=Carousel1[0].children.length*100/3 + "%" 
for (let index = 0; index < Carousel1[0].children.length; index++) {
    Carousel1[0].children[index].style.width=parseInt(100/Carousel1[0].children.length)+"%";
}
//Creer navigation
var BtnNav=function(classe)
{
    var div=document.createElement("div")
    div.setAttribute("class",classe)
    Carousel1[0].after(div)
}

BtnNav("Left")
BtnNav("right")
var i=0;
var right=document.getElementsByClassName("right")
var Left=document.getElementsByClassName("Left")
var ShowNav=function(index)
{
    if(index==0)
    {
        Left[0].style.display="none"
    }else if(index==1)
    {
        Left[0].style.display="block"
        right[0].style.display="block"
    }else
    {
        right[0].style.display="none"
    }
}
let Navigation=function(index,dir,point)
{
    Carousel1[0].style.transform="translate3d(0,0,0)"
    if(index===1 && dir=="right")
    {
        Carousel1[0].style.transform="translateX(-"+1.95*100/Carousel1[0].children.length+"%)"
        point[0].children[0].classList.remove("now")
        point[0].children[1].classList.add("now")
        point[0].children[2].classList.remove("now")
    }
    if(index==2)
    {
        Carousel1[0].style.transform="translateX(-"+(1.95+0.86)*100/Carousel1[0].children.length+"%)"
        point[0].children[0].classList.remove("now")
        point[0].children[1].classList.remove("now")
        point[0].children[2].classList.add("now")
    }
    /*
        * on cacher a left par exemple 
        * on va chacher le 1 ere element sur index =1
    */
    if(index==0)
    {
        Carousel1[0].style.transform="translateX(0)"
        point[0].children[0].classList.add("now")
        point[0].children[1].classList.remove("now")
        point[0].children[2].classList.remove("now")
    }else if(index===1 && dir=="Left")
    {
        Carousel1[0].style.transform="translateX(-"+0.87*100/Carousel1[0].children.length+"%)"
        point[0].children[0].classList.remove("now")
        point[0].children[1].classList.add("now")
        point[0].children[2].classList.remove("now")
    }
}
console.log(Carousel1Point)
ShowNav(0)
right[0].addEventListener("click",function(){
    i++;
    ShowNav(i)
    Navigation(i,"right",Carousel1Point)
})
Left[0].addEventListener("click",function()
{
    i--;
    ShowNav(i,"Left")
    Navigation(i,"Left",Carousel1Point)
})