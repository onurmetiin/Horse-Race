var at1 = document.getElementById("horse1");
var at2 = document.getElementById("horse2");
var at3 = document.getElementById("horse3");
var at4 = document.getElementById("horse4");

var finishLine = document.getElementById("finalArea").offsetLeft-200;

var rndm1 = 0;
var rndm2 = 0;
var rndm3 = 0;
var rndm4 = 0;
var kontrol = false;


function baslat(){
    yarismaBaslat = setInterval(Yarisma, 1000);
}

var Yarisma = function(){
    atbir();
    atiki();
    atuc();
    atdort();
}

var sayiUret = function(){
    var rndm;
    do{
        rndm = Math.floor(Math.random()*100);
    }while(rndm<30);
    return rndm;
}

function atbir(){
    if(rndm1<finishLine){
        rndm1 += sayiUret();
        if(rndm1>=finishLine){
            rndm1=finishLine;
            clearInterval(yarismaBaslat);
                if(!kontrol){
                    kontrol=true;
                    setTimeout(function (){alert("kazanan 1. kulvardan Şahbatur!");},2000);
                }
            at1.style.marginLeft = finishLine + "px";
        }else{
            at1.style.marginLeft = rndm1 + "px";
        }
    }
}

function atiki(){
    if(rndm2<finishLine){
        rndm2 += sayiUret();
        if(rndm2>=finishLine){
            rndm2=finishLine;
            clearInterval(yarismaBaslat);
                if(!kontrol){
                    kontrol=true;
                    setTimeout(function (){alert("kazanan 2. kulvardan Gülbatur!");},2000);
                }
            at2.style.marginLeft = finishLine + "px";
        }else{
            at2.style.marginLeft = rndm2 + "px";
        }
    }
}

function atuc(){
    if(rndm3<finishLine){
        rndm3 += sayiUret();
        if(rndm3>=finishLine){
            rndm3=finishLine;
            clearInterval(yarismaBaslat);
                if(!kontrol){
                    kontrol=true;
                    setTimeout(function (){alert("kazanan 3. kulvardan Nurbatur!");},2000);
                }
            at3.style.marginLeft = finishLine + "px";
        }else{
            at3.style.marginLeft = rndm3 + "px";
        }
    }
}

function atdort(){
    if(rndm4<finishLine){
        rndm4 += sayiUret();
        if(rndm4>=finishLine){
            rndm4=finishLine;
            clearInterval(yarismaBaslat);
                if(!kontrol){
                    kontrol=true;
                    setTimeout(function (){alert("kazanan 4. kulvardan Şahkatır!");},2000);
                }
            at4.style.marginLeft = finishLine + "px";
        }else{
            at4.style.marginLeft = rndm4 + "px";
        }
    }
}

function sifirla(){
    location.reload();
}



