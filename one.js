//  document.querySelector('a').onclick = function(){
//      alert('抢票成功！');
//  }

// 等同于   let myA=querySelector('a');
// myA.onclick =  function(){
//     alert('抢票成功！');
// }
// let myImage =document.querySelector('img');
// myImage.onclick = function(){
// let  mySrc = myImage.getAttribute('src');
// if ( mySrc === 'a1.jpg') {
//    myImage.getAttribute('src','a2.jpg'); 
// } else {
//     myImage.getAttribute('src','a1.jpg');
// }
// }
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3903586055,2151753088&fm=26&gp=0.jpg') {
      myImage.setAttribute('src', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1273444122,548981975&fm=26&gp=0.jpg');
    } else {
      myImage.setAttribute('src', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3903586055,2151753088&fm=26&gp=0.jpg');
    }
}
let myButton = document.querySelector('button');
let   myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt ('请输入你的名字:');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('Name',myName);
        myHeading.textContent = "酷毙了" + myName;
    }

}
if (!localStorage.getItem('name')) 
{
    setUserName();    
} else {
    let storedName = localStorage.getItem('Name');
    myHeading.textContent = '酷毙了'+ storedName;
}
myButton.onclick  = function(){
    setUserName();
}