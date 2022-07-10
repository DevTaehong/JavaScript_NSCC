(() => {
    // source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // source: https://www.cardplayer.com/rules-of-poker/hand-rankings
    // source: https://deckofcardsapi.com/
    // source: https://stackoverflow.com/questions/34723831/check-if-javascript-array-values-are-sequential-and-not-equal
    // source: https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
    // source: https://www.w3schools.com/jsref/jsref_parseint.asp

    var suit = [];
    var value = [];
    let myHTMLOutput = "";
    // fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 
    // fetch('http://pokerhand-tester.herokuapp.com/royalflush')
    // fetch('http://pokerhand-tester.herokuapp.com/straightflush')
    // fetch('http://pokerhand-tester.herokuapp.com/fourofakind')
    fetch('http://pokerhand-tester.herokuapp.com/fullhouse')
    // fetch('http://pokerhand-tester.herokuapp.com/flush')
    // fetch('http://pokerhand-tester.herokuapp.com/straight')
    // fetch('http://pokerhand-tester.herokuapp.com/threeofakind')
    // fetch('http://pokerhand-tester.herokuapp.com/twopair')
    // fetch('http://pokerhand-tester.herokuapp.com/onepair')
    // fetch('http://pokerhand-tester.herokuapp.com/highcard')
        .then(function(response) {
            return response.json();
        })
        .then(function(data2) {

        // .then(response => response.json())
        // .then(data => {
        //     return fetch('https://deckofcardsapi.com/api/deck/'+data.deck_id+'/draw/?count=5');
        // })
        // .then(response2 => response2.json()) // Just response is fine too. Name doesn't matter
        // .then(data2 => {
            
            for (let i = 0; i < data2.cards.length; i++) {
                suit.push(data2.cards[i].suit);
                value.push(data2.cards[i].value);

                myHTMLOutput += data2.cards[i].suit + " " + data2.cards[i].value + "<br>";
            }
            document.querySelector('#myCard').innerHTML = myHTMLOutput;

            let pokerHand = function () {
                let isAllTheSameSuit = false;
                let isRoyalFlush = false;
                let isStraightFlush = false;
                let isFlush = false;
                let isFourOfAKind = false;
                let isFullHouse = false;
                let isStraight = false;
                let isThreeofAKind = false;
                let isTwoPair = false;
                let isPair = false;

                // To check if the same suit
                if(suit[0]===suit[1] && suit[0]===suit[2] && suit[0]===suit[3] && suit[0]===suit[4]){
                    isAllTheSameSuit = true;
                }

                if (isAllTheSameSuit){
                    function isSequential(value) {
                        for (let i = 0; i < value.length; i++) {
                            if(value[i]==="ACE"){
                                value[i] = "1";
                            } else if(value[i]==="10"){
                                value[i] = "91"
                            } else if(value[i]==="JACK"){
                                value[i] = "92"
                            } else if(value[i]==="QUEEN"){
                                value[i] = "93"
                            } else if(value[i]==="KING"){
                                value[i] = "94"
                            }
                        }
                        const royalFlush = ["1", "91", "92", "93", "94"];
                        value.sort();

                        var is_same = (royalFlush.length == value.length) && royalFlush.every(function(element, index) {
                            return element === value[index]; 
                        });

                        if(is_same) {
                            isRoyalFlush = true;
                        } 

                        if(!isRoyalFlush){
                            // check if current value smaller than previous value
                            for(var i = 0; i < value.length; i++){
                                if(value[i]==="91"){value[i] ="10"}
                                    else if(value[i]==="92"){value[i] ="11"}
                                    else if(value[i]==="93"){value[i] ="12"}
                                    else if(value[i]==="94"){value[i] ="13"}
                            }
                            for (var i = 1, len = value.length; i < len; i++) {
                                if (parseInt(value[i])-1 === parseInt(value[i-1]) && parseInt(value[i])+1 === parseInt(value[i+1])) {
                                    isStraightFlush = true;
                                } else if(!isStraightFlush) {
                                    isFlush = true; break;
                                }
                            }
                        }
                    }
                    isSequential(value);

                    if(isFlush) { 
                        myHTMLOutput += "Flush";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; }

                    else if (isRoyalFlush){
                        myHTMLOutput += "Royal Flush";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput;
                    }
                    else if(isStraightFlush){
                        myHTMLOutput += "Straight Flush";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput;
                    }
                }
                //To check straight
                for (let i = 0; i < value.length; i++) {
                    if(value[i]==="ACE"){
                        value[i] = "1";
                    } else if(value[i]==="10"){
                        value[i] = "91"
                    } else if(value[i]==="JACK"){
                        value[i] = "92"
                    } else if(value[i]==="QUEEN"){
                        value[i] = "93"
                    } else if(value[i]==="KING"){
                        value[i] = "94"
                    }
                }
                value.sort();

                // To check three of a kind inside to check straight
                if((value[0]===value[1] && value[0]===value[2] && value[3]!==value[4])||
                    (value[0]!==value[1] && value[2]===value[3] && value[2]===value[4])||
                    value[1]===value[2] && value[1]===value[3] && value[0]!==value[4]){
                        isThreeofAKind = true;
                    }

                //To check straight
                for(var i = 0; i < value.length; i++){
                    if(value[i]==="91"){value[i] ="10"}
                        else if(value[i]==="92"){value[i] ="11"}
                        else if(value[i]==="93"){value[i] ="12"}
                        else if(value[i]==="94"){value[i] ="13"}
                }
                for (var i = 1, len = value.length; i < len; i++) {
                    if ((parseInt(value[i])-1 === parseInt(value[i-1]) && parseInt(value[i])+1 === parseInt(value[i+1]))&&
                    (parseInt(value[4])===parseInt(value[3])+1) && parseInt(value[i])-2===parseInt(value[i-2])) {
                        isStraight = true;
                    } 
                }

                // To check Four of a kind
                if ((value[0]===value[1] && value[0]===value[2] && value[0]===value[3])||
                    (value[0]===value[1] && value[0]===value[2] && value[0]===value[4])||
                    (value[0]===value[2] && value[0]===value[3] && value[0]===value[4])||
                    
                    (value[1]===value[2] && value[1]===value[3] && value[1]===value[4])||
                    (value[1]===value[0] && value[1]===value[3] && value[1]===value[4])||
                    (value[1]===value[0] && value[1]===value[2] && value[1]===value[3])){
                    isFourOfAKind = true;
                } 
                
                // To check full house
                value.sort();
                if((value[0]===value[1] && value[0]===value[2] && value[3]===value[4])||
                    (value[0]===value[1] && value[2]===value[3] && value[2]===value[4])){
                        isFullHouse = true;
                }

                // To check Two pairs 
                if((value[0]===value[1] && value[2]===value[3] && value[4]!==value[0]&& value[4]!==value[2])||
                    value[1]===value[2] && value[3]===value[4] && value[0]!==value[1] && value[0]!==value[3]||
                    value[0]===value[1] && value[3]===value[4] && value[2]!==value[0]&& value[2]!==value[3]){
                    isTwoPair = true;
                }

                // To check pair
                if(value[0]===value[1] && value[0]!==value[2] && value[0]!==value[3] && value[0]!==value[4]||
                    value[1]===value[2] && value[0]!==value[1] && value[0]!==value[2] && value[2]!==value[3]||
                    value[3]===value[4] && value[0]!==value[1] && value[0]!==value[2] && value[0]!==value[3]||
                    value[2]===value[3] && value[0]!==value[1] && value[0]!==value[2] && value[0]!==value[3]){
                    isPair = true;
                }

                if(!isRoyalFlush && !isFlush && !isStraightFlush){
                    if(isFourOfAKind) { 
                        myHTMLOutput += "Four of a kind";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                    }

                    else if(isFullHouse) { 
                        myHTMLOutput += "Full house";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                    }

                    else if(isStraight && !isRoyalFlush && !isStraightFlush && !isThreeofAKind && !isPair) { 
                        myHTMLOutput += "Straight";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                    }
                    
                    else if(isThreeofAKind){
                    myHTMLOutput += "Three of A Kind";
                    document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                    }

                    else if(isTwoPair){
                        myHTMLOutput += "Two pair";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                        }

                    else if(isPair){
                        myHTMLOutput += "Pair";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                        }
                    else {
                        myHTMLOutput += "High Card";
                        document.querySelector('#myCard').innerHTML = myHTMLOutput; 
                    }
                }
            }
            pokerHand();
        });
})();