


class Game {

    constructor(){
        this.hiddenTextInput = '';
        this.mole = '';
        this.lives = 5;
    }

    static VERT = 1000;
    static HORI = 1000;

    generateRandomLetter() {
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var letter = letters[Math.floor(Math.random() * letters.length)];
        return letter
    }
     makeMole(randomletter) {
       
        const hole = document.getElementById(randomletter).firstElementChild
        
        hole.classList.add('pop_up_mole')

        setTimeout(()=>{
            console.log(hole)
            hole.classList.remove('pop_up_mole')  
            this.lives -= 1;
        }, 2000)
       
    }

    whaccMole(key){
             
         
          const hole = document.getElementById(key).firstElementChild
          console.log(hole, key,hole.classList.contains('pop_up_mole'))

          if(hole.classList.contains('pop_up_mole')){
            hole.classList.remove('pop_up_mole')
            hole.classList.add('whacced_mole')
            setTimeout(() => {hole.classList.remove('whacced_mole')}, 500)
          }
    }

    start() {
        const start = document.getElementById('startbutton')
        start.addEventListener('click', () =>{
            setInterval(() => {this.makeMole(this.generateRandomLetter())}, 1000)
            
            document.body.addEventListener('keydown',(e) =>{
            this.whaccMole(e.key)

        })
    })
    }

    
}




export default Game;