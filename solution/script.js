class Hangman {
    constructor(wordList) {
        this.wordList = wordList;
        this.randomNumber = Math.floor(Math.random() * this.wordList.length);
        this.randomWord = this.wordList[this.randomNumber];
    }

    createGround(word) {
        let x1 = 0;
        let x2 = 20;
        for (let i of word) {
            let line = document.createElementNS('http://www.w3.org/2000/svg','line');
            this.setLineAttributes(line, {'x1':`${x1}`, 'y1':"0", 'x2':`${x2}`, 'y2':"0" ,'style':"stroke: white; stroke-width: 5"})
            let letterBaseSVG = document.querySelector('#letterBaseSVG');
            letterBaseSVG.appendChild(line)
            x1 += 30;
            x2 += 30;
        }
    }

    setLineAttributes(elmnt, attrs) {
        for (let key in attrs) {
            elmnt.setAttribute(key, attrs[key]);
        }
    }
}


let hango = new Hangman(['OSCAR', 'EDWARD', 'JOSEPH', 'ERIC']);
hango.createGround(hango.randomWord)