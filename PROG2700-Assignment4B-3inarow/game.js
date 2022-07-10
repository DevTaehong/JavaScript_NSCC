(() => {
    // Soucrce: https://www.delftstack.com/howto/javascript/create-table-javascript/
    // Soucrce: https://stackoverflow.com/questions/62259233/javascript-get-table-cell-content-on-click
    fetch('https://threeinarowpuzzle.herokuapp.com/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.rows); // 6 rows
        console.log(data.rows[0]); // 1 row 6 cells
        console.log(data.rows[0][0].canToggle);
        console.log(data.rows[0][0].currentState);

        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let button = document.createElement('button');
        button.innerHTML = "Check";
        let x = document.createElement('INPUT');
        x.setAttribute("type", "checkbox");

        button.setAttribute('id', 'buttonId');
        table.setAttribute('id', 'tableId');
        tbody.setAttribute('id', 'tbodyId');

        table.appendChild(tbody);
        document.querySelector('#theGame').appendChild(table);
        document.querySelector('#theGame').appendChild(button);
        document.querySelector('#theGame').appendChild(x);
        
        
        for(let i = 0; i < data.rows.length; i++) {
            let id1 = i;
            let stringId1 = id1.toString();
            let rows = document.createElement('tr');
            rows.setAttribute('name', stringId1);
            for(let j = 0; j < data.rows.length; j++) {
                let rowdatas = document.createElement('td');
                let id = j + 5;
                let stringID = id.toString();

                if(data.rows[i][j].currentState === 0){
                    rowdatas.style.backgroundColor = 'grey';
                    rowdatas.backgroundColor = 'grey';
                } else if(data.rows[i][j].currentState === 1){
                    rowdatas.style.backgroundColor = 'blue';
                    rowdatas.backgroundColor = 'blue';
                } else{ 
                    rowdatas.style.backgroundColor = 'white';
                    rowdatas.backgroundColor = 'white';
                }
                let toggleToString = data.rows[i][j].canToggle;
                let stringToggle = toggleToString.toString();

                rowdatas.setAttribute('id', stringToggle);
                rowdatas.setAttribute('title', data.rows[i][j].correctState);
                rowdatas.setAttribute('class', data.rows[i][j].currentState)
                rows.appendChild(rowdatas);
            }
            tbody.appendChild(rows);
        }
        

        const tbody1 = document.querySelector('#tbodyId');
        const buttonEvent = document.querySelector("#buttonId");

        tbody1.addEventListener('click', function (e) {
            const cell = e.target.closest('td');
            if (!cell) {return;} // Quit, not clicked on a cell
            const row = cell.parentElement;

            if(cell.id === "true" && cell.backgroundColor === "grey"){
                    cell.style.backgroundColor = 'white';
                    cell.backgroundColor = 'white';
            } else if(cell.id === "true" && cell.backgroundColor === "white"){
                    cell.style.backgroundColor = 'blue';
                    cell.backgroundColor = 'blue';
            } else if(cell.id === 'true' && cell.backgroundColor === "blue"){
                    cell.style.backgroundColor = "grey";
                    cell.backgroundColor = "grey";
            }

            console.log("correct state: " + cell.title + "  currentState: "+ cell.backgroundColor);
        });


        buttonEvent.addEventListener("click", function () {
            for(var i = 0; i < data.rows.length; i++){
                let rowdatas = document.querySelectorAll('#true');
                console.log(rowdatas.item);
            }
        })


    })  


})();