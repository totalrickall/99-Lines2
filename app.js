document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let buttonText = document.createTextNode('Sing!');
    button.appendChild(buttonText);
    document.body.appendChild(button);

    let friends = ["Trent", "Josh", "Rucker", "Rob", "Michael"];


    button.addEventListener('click', function () {
        
        function sing() {
            for (i = 0; i < friends.length; i++) {
                console.log(friends[i]);
                let friend = friends[i];
                let board = document.createElement('div');
                let names = document.createElement('h3');
                let namesText = document.createTextNode(friend);
                names.appendChild(namesText);
                document.body.appendChild(names);
                board.className = 'friend';
                document.body.appendChild(board);
                
                for (j = 99; j > 0; j--) {
                    let paragraph = document.createElement('p');
                    if (j > 2) {
                        let lyrics1 = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file`);
                        paragraph.appendChild(lyrics1);

                    } else if (j === 2) {
                        let lyrics2 = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
                        paragraph.appendChild(lyrics2);
                    } else {
                        let lyrics3 = document.createTextNode(`${j} line of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file`);
                        paragraph.appendChild(lyrics3);
                    }
                    board.appendChild(paragraph);
                }
            }
        };
        sing();
    });

});