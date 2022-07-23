var result= document.querySelector("#result");
var grid = document.querySelector(".grid");
var gameStatus = document.querySelector("#gameStatus");
var playAgain = document.querySelector("#playAgain");


document.addEventListener("DOMContentLoaded",()=>{
    const cardArr=[
        {
            name:"cat",
            img:"./images/cat.jpeg"
        },
    
        {
            name:"cat",
            img:"./images/cat.jpeg"
        },
    
        {
            name:"lion",
            img:"./images/lion.png"
        },
    
        {
            name:"lion",
            img:"./images/lion.png"
        },
    
        {
            name:"hen",
            img:"./images/hen.png"
        },
    
        {
            name:"hen",
            img:"./images/hen.png"
        },
    
        {
            name:"monkey",
            img:"./images/monkey.jpeg"
        },
    
        {
            name:"monkey",
            img:"./images/monkey.jpeg"
        },
    
        {
            name:"peacock",
            img:"./images/peacock.jpeg"
        },
    
        {
            name:"peacock",
            img:"./images/peacock.jpeg"
        },
    
        {
            name:"dinosaur",
            img:"./images/dinosaur.jpeg"
        },
    
        {
            name:"dinosaur",
            img:"./images/dinosaur.jpeg"
        },

        {
            name:"zebra",
            img:"./images/zebra.jpeg"
        },
    
        {
            name:"zebra",
            img:"./images/zebra.jpeg"
        },

        {
            name:"sheep",
            img:"./images/sheep.jpeg"
        },
    
        {
            name:"sheep",
            img:"./images/sheep.jpeg"
        }
    ];
    
    cardArr.sort(()=> 0.5-Math.random());

    var selectedCards=[]; 
    var selectedCardsId=[];
    var cardswon=[];

    function checkFormatch(){
        var cards = document.querySelectorAll("img");
        let card1 = selectedCardsId[0];
        let card2 = selectedCardsId[1];
       
        if(selectedCards[0] === selectedCards[1] && (card1 !== card2) ){
            cards[card1].setAttribute("src","./images/white.jpeg");
            cards[card2].setAttribute("src","./images/white.jpeg");
            cardswon.push(card1);
            cardswon.push(card2);
            result.textContent = (cardswon.length)*10;
        }
        else{
            cards[card1].setAttribute("src","images/flower.png");
            cards[card2].setAttribute("src","images/flower.png");
        }
        

        selectedCards=[];
        selectedCardsId=[];

        if(cardswon.length == cardArr.length){
            gameStatus.textContent = "Congratulations ! You found them all";
            grid.style.display="none";
            playAgain.style.display="block";
        }
    }


    function flipCard(){
        let cardID = this.getAttribute("data-id");    
        
        if(!cardswon.includes(cardID)){
            selectedCards.push(cardArr[cardID].name);
            selectedCardsId.push(cardID);

            let path = cardArr[cardID].img;
            this.setAttribute("src",path);

            if(selectedCards.length ==2){
                setTimeout( checkFormatch ,500);
            }
        }
    }


    function createBoard(){
        for(let i=0;i<cardArr.length;i++){
            var card = document.createElement("img");
            card.setAttribute("src","images/flower.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }

    playAgain.addEventListener("click",()=>{
        grid.style.display="flex";
        result.textContent="0";
        gameStatus.textContent = "Game Started";
        playAgain.style.display="none";
    });

    createBoard();
})

