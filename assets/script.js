//greet
document.addEventListener('DOMContentLoaded',()=>{
    const username = prompt("Halo! Selamat Datang, Siapa Nama Anda?");
    if(username === '') {
        alert('Halo Stranger!');
    } else {
        alert(`Halo ${username}!`);
    }
});

const btn = document.getElementById('btn');
btn.addEventListener('click',function() {
    window.location.href = '#contactUs';
});
const mulai = document.getElementById('start');
mulai.addEventListener('click',function() {
    window.location.href = '#fitur';
});
const submit = document.getElementById('kirim');
kirim.addEventListener('click',function() {
    window.location.href = 'mailto:erycszw10@gmail.com';
});

//slide 
const toggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});
/*Code created by : Erycson Z.W*/
    