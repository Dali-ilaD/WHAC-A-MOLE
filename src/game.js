


class Game {

    constructor() {
        this.hiddenTextInput = '';
        this.mole = '';
        this.lives = 5;
        this.score = 0;
        this.highestScore = 0;
        this.difficulty = 'easy';
    }

    static difficultySetting = {
        easy: { removeTimer: 1500, createTimer: 2000 },
        medium: { removeTimer: 1000, createTimer: 1500 },
        hard: { removeTimer: 500, createTimer: 1000 }
    }

    setDifficulty() {
        const buttons = document.getElementsByClassName('difficulty-button');
       
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                this.difficulty = e.target.value;
                this.selectButton(buttons, i);
              
            })
        }
    }

    selectButton(arr, index) {
        for (let i = 0; i < arr.length; i++) {
            if (i !== index) {
                arr[i].style.border = '';
            } else {
                arr[index].style.border = '3px solid red'
            }
        }
    }

    generateRandomLetter() {
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var letter = letters[Math.floor(Math.random() * letters.length)];
        return letter
    }
    generateMole(randomletter) {

        const hole = document.getElementById(randomletter).firstElementChild

        hole.classList.add('pop_up_mole')

        const timeOut = setTimeout(() => {
            if (this.lives <= 0) {
                clearTimeout(timeOut)
            }
            if (hole.classList.contains('pop_up_mole')) {
                hole.classList.remove('pop_up_mole')
                this.lives -= 1
                document.getElementById('lives').innerHTML = `Lives: ${this.lives} `
            }
        }, difficultySetting[this.difficulty].removeTimer)


    }

    whaccMole(key) {
        const hole = document.getElementById(key).firstElementChild
        if (hole.classList.contains('pop_up_mole')) {
            hole.classList.remove('pop_up_mole')
            hole.classList.add('whacced_mole')
            this.score += 1
            document.getElementById('score').innerHTML = `Score: ${this.score}`
            setTimeout(() => { hole.classList.remove('whacced_mole') }, 500)
        }
    }

    start() {
        const start = document.getElementById('startbutton')
        document.getElementById('start-high-score').innerHTML = `Highest Score: ${this.highestScore}`
        start.addEventListener('click', () => {
            this.lives = 5;
            this.score = 0;
            document.getElementById('start-cover').style.display = 'none';
            document.getElementById('lives').innerHTML = `Lives: ${this.lives} `
            document.getElementById('score').innerHTML = `Score: ${this.score}`
            document.getElementById('highestscore').innerHTML = `Highest Score ${this.highestScore}`

            const timeOut = setInterval(() => {
                if (this.lives <= 0) {
                    clearInterval(timeOut)
                    if (this.score > this.highestScore) {
                        this.highestScore = this.score;
                        document.getElementById('highestscore').innerHTML = `Highest Score ${this.highestScore}`
                    }

                    document.getElementById('start-cover').style.cssText = `
                                display: flex;
                                background-color: red;
                            `;
                    document.getElementById('start-high-score').innerHTML = `Highest Score: ${this.highestScore}`
                } else {
                    this.generateMole(this.generateRandomLetter())
                }
            }, difficultySetting[this.difficulty].createTimer)


            document.body.addEventListener('keydown', (e) => {
                this.whaccMole(e.key)

            })
        })
    }




}




export default Game;