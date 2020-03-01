function button1(){
    location.href = 'https://www.tut.by/'
}

function button2(){
    document.body.className = 'container2'
}

function button3(){
    document.body.innerHTML = '';

    var box1 = document.createElement ('div');
    var box2 = document.createElement ('div');
    var box3 = document.createElement ('div');

    document.body.classList.add ('flexbox');
    box1.innerHTML = 'Ground';
    box2.innerHTML = 'Water';
    box3.innerHTML = 'Fire';

    document.body.appendChild (box1);
    document.body.appendChild (box2);
    document.body.appendChild (box3);
}

var a = 0, b = 0, t =-100;
var term = {
    Nigeria:30,
    Spain:25,
    Egypt:32,
    India:38
}

function button4(){
    console.log(term);
    for(key in term){
        a += term[key];
        b++;
    }
    console.log(a/b);
    alert("Middle tempperature in other country:" + a/b);
}

function maxTemp(term){
    for(key in term){
        if(t<term[key]){
            t = term[key]
        }
    }
    return(t);
}

function button5(){
    console.log(maxTemp(term));
    alert("Max temperature of all country : " + maxTemp(term));
}