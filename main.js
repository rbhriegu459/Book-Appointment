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
        // // Adding the details in the array element
        // var d =  {name, email};
        // data.push(d);
        // console.log(data);

        // //Adding values as a list item and displaying them
        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${name} : ${email}`));
        // user.appendChild(li);

        // // Storing the values in local storage as key value pair
        // localStorage.setItem(name, email);
        // console.log(localStorage.getItem(name));

        // Storing the values in local storage as object 
        let obj = {
            "name" : name,
            "email" : email,
        };
        let obj_serailized = JSON.stringify(obj);

        localStorage.setItem(obj.email ,obj_serailized);

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`));
        li.id = obj.email;
        user.appendChild(li);

        // Adding a delete button for deleting the details
        const addBtn = document.createElement('button');
        addBtn.className = "delBtn";
        addBtn.appendChild(document.createTextNode("Delete"));
        li.appendChild(addBtn);

        addBtn.addEventListener('click', (e) =>{
            e.preventDefault();
            localStorage.removeItem(email);
            user.removeChild(document.getElementById(obj.email));
        });

        // Adding a edit button for editing the details
        const addEditBtn = document.createElement('button');
        addEditBtn.className = "editBtn";
        addEditBtn.appendChild(document.createTextNode("Edit"));
        li.appendChild(addEditBtn);

        addEditBtn.addEventListener('click', (e) =>{
            // popullating the values to the input-
            name.value = obj.name;
            email.value = obj.email;

            // removing the element from storage and screen-
            e.preventDefault();
            localStorage.removeItem(email);
            user.removeChild(document.getElementById(obj.email));
        });
    }
};
