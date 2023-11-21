const sub = document.querySelector('.btn');
const user = document.querySelector('#users');
var data = new Array();

sub.addEventListener('click', onsubmit);

function onsubmit(e){
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if(name==='' || email===''){
        const msg = document.querySelector('.msg');
        msg.classList.add('error');
        msg.innerHTML= 'Please enter value in all the fields';
        setTimeout(() => msg.remove(), 3000);
    } 
    
    else{
        // var d =  {name, email};
        // data.push(d);
        // console.log(data);

        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${name} : ${email}`));
        // user.appendChild(li);

        localStorage.setItem(name, email);
        console.log(localStorage.getItem(name));
    }
};