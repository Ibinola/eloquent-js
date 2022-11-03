/* 1. Define a binding size of the board, and define a variable of an empty string " ", that stores a space or a hash or a new line.

2. Set a loop inside of a loop to generate a two dimensional grid: An outer loop is for rows to set board height ("i") and the inner loop is for columns to set board width ("j").

3. Start building the board line by line from left to right and top to bottom by checking the sum of the two counters ((i+j) % 2 == 0)

4. If the sum of the two counters is even; add a space (" ") to the board. if it is not even; then add a hash ("#") character to the board.

5. When the inner loop finished, add ("\n") character to the board to generate a new line and then move to the next row.

6. Print the board
*/


let size = 8;
let board = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            board += " "
        }
        else {
            board += "#"
        }
    }
    board += "\n"
}

console.log(board);

