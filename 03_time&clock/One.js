// const clock = document.getElementById('clock'); ******************THIS IS ALSO POSSIBLE*****************
// const clock = document.querySelector('#clock');  ******************THIS IS ALSO POSSIBLE*****************

// let data = new Data()
// // let time = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
// let time = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000);