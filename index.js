let counter = document.querySelector('.counter');
console.log(counter)
let barf = document.querySelector('.front');
console.log(barf);
let a= 0;


/* function bars(){
    counter.innerText=a+'%';
    barf.style.width=a+'%';
    a++;
    if(a<101){
        setTimeout(bars,100);
    }
}
bars(); */



let b = () => {
counter.innerText=a+'%';
    barf.style.width=a+'%';
    a++;
    if(a<101){
        setTimeout(b,100);
    }
}
b()