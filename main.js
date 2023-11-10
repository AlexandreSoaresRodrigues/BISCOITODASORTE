document.addEventListener("DOMContentLoaded", function () {
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');
    const cookieImage = document.querySelector('.screen1 a img');
    const fortuneText = document.querySelector('.screen2 p');
    const openButton = document.querySelector('.screen2 button');

    const fortunes = [
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
        "Pare de frescura e corre atras dos seus objetivos",
        "Aprenda lidar com as criticas mais do que os elegios",
        "Acredite em si mesmo e conquiste tudo!",
        "Grandes alegrias virão em breve!",
        "O sucesso está a um passo de distância!",
        "Hoje é o dia da sorte!",
        "pare de ser um lixo",
        "se esforça mais",
        "tenha mais dencansos",
        "para de frescura",
        "não desiste, perciste",
        "isso não aabou",
        "manda todo se ferra",


    ];

    
    function showFortune(event){
        
        event.preventDefault(); 
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];

        screen1.classList.add('hide');
        screen2.classList.remove('hide');
        fortuneText.textContent = randomFortune;

      
        const h1Screen1 = screen1.querySelector('h1');
        const pScreen1 = screen1.querySelector('p');
        h1Screen1.style.visibility = 'hidden';
        pScreen1.style.visibility = 'hidden';

    
        console.log("Sorte do dia:", randomFortune);
    }

  
    function resetGame() {
        screen1.classList.remove('hide');
        screen2.classList.add('hide');
    
        fortuneText.textContent = '';

  
        const h1Screen1 = screen1.querySelector('h1');
        const pScreen1 = screen1.querySelector('p');
        h1Screen1.style.visibility = 'visible';
        pScreen1.style.visibility = 'visible';
    }

 
    cookieImage.addEventListener('click', showFortune);


    openButton.addEventListener('click', resetGame);

    
    function myCallbackFunction() {
        
    }
});