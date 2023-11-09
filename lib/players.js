"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Leaderboard_1 = require("./Leaderboard");
var players = [
    { name: "Ana", score: 1000 },
    { name: "Alex", score: 500 },
    { name: "Juana", score: 500 },
    { name: "Luisa", score: 200 }
];
var result = (0, Leaderboard_1.leaderboard)(players);
console.log(result);
//# sourceMappingURL=players.js.map