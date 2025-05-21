
document.addEventListener('DOMContentLoaded', () => {

    CreateBoard();
    ChessPieces();


    function CreateBoard() {

        const
            table = document.createElement('table');

        table.addEventListener('click', Distributor);
        table.setAttribute('id', 'chessboard');

        document.getElementById('table').appendChild(table);

        for (let row = 0; row < 10; row++) {

            document.getElementById('chessboard').appendChild(document.createElement('tr')).setAttribute('id', `tr_${row}`);

            for (let col = 0; col < 10; col++) {

                document.getElementById(`tr_${row}`).appendChild(document.createElement('td')).setAttribute('id', `tr_${row}_td_${col}`);

                const
                    td = document.getElementById(`tr_${row}_td_${col}`);


                td.dataset.type = 'border';

                if (col === 9 || row === 0)
                    td.classList.add('rotate_180');

                if (row === 0 || row === 9)
                    td.innerText = !(col === 0 || col === 9) ? "HGFEDCBA"[col - 1] : ' ';
                else if (col === 0 || col === 9)
                    td.innerText = !(row === 0 || row === 9) ? row : ' ';
                else
                    td.dataset.type = (row % 2 === col % 2 ? 'light' : 'dark');
            }
        }
    }
    function ChessPieces() {

        let
            table = document.getElementById('chessboard'),
            order = [1, 2, 3, 4, 5, 3, 2, 1],
            chessboard = [[], [], [], [], [], [], [], []];



        Array.from(table.children).forEach((tr_item, tr_index) => {

            if (tr_index !== 0 && tr_index !== table.children.length - 1) {

                Array.from(tr_item.children).forEach((td_item, td_index) => {

                    if (td_index !== 0 && td_index !== tr_item.children.length - 1) {

                        chessboard[tr_index - 1].push(td_item);
                    }
                });
            }
        });

        chessboard.forEach((row, index_1) => {

            row.forEach((col, index_2) => {

                if (index_1 === 1) {
                    col.dataset.chess_piece = pieces[0];
                    col.dataset.team = 'light';

                    col.innerText = participants[1][0];
                }
                else if (index_1 === 6) {
                    col.dataset.chess_piece = pieces[0];
                    col.dataset.team = 'dark';

                    col.innerText = participants[1][0];
                }
                else if (index_1 === 0) {
                    col.dataset.chess_piece = pieces[order[index_2]];
                    col.dataset.team = 'light';

                    col.innerText = participants[1][order[index_2]];
                }
                else if (index_1 === 7) {
                    col.dataset.chess_piece = pieces[order[index_2]];
                    col.dataset.team = 'dark';

                    col.innerText = participants[1][order[index_2]];
                }
                else {
                    col.dataset.chess_piece = 'null';
                    col.dataset.team = 'null';

                    col.innerText = ' ';
                }
            });
        });
    }
    //alert(notification[0]);
    //confirm('Принять вызов от Player_' + 36797357);
    //prompt('Режимы игры:\n\n1) Блитз\n2) Рапид\n3) Заочная');
});