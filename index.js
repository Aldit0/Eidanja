const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('Tmr, vas a ser padre wbn, felicitaciones, ahi ta pa que no te vuelvas a reir de Tracy maldito malnacido')
});

const noBtn=document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transforms',`translate(-${randomX}%,-${randomY}%)`);
})