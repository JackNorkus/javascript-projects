const whoWon = require('../RPS.js');

describe("whoWon", function() {
    test("returns 'TIE!' if the players tie.", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });
    test("returns 'Player 2 wins!' if player 1 chooses rock and player 2 chooses paper.", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    });
    test("returns 'Player 2 wins!' if player 1 chooses paper and player 2 chooses scissors.", function() {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });
    test("returns 'Player 2 wins!' if player 1 chooses scissors and player 2 chooses rock.", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!');
    });
    test("returns 'Player 1 wins!' if player 1 beats player 2.", function() {
        let output = whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
    });
});