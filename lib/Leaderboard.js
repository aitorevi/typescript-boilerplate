"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unificatePositionsTie = exports.addPosition = exports.sortWithScore = exports.sortWithName = exports.leaderboard = void 0;
function leaderboard(players) {
    var resultLeaderboard = players;
    resultLeaderboard = sortWithName(resultLeaderboard);
    resultLeaderboard = sortWithScore(resultLeaderboard);
    resultLeaderboard = addPosition(resultLeaderboard);
    resultLeaderboard = unificatePositionsTie(resultLeaderboard);
    return resultLeaderboard;
}
exports.leaderboard = leaderboard;
function sortWithName(players) {
    var playersSorted = __spreadArray([], players, true);
    playersSorted.sort(function (a, b) {
        return a.name.localeCompare(b.name); // Compara los nombres alfabéticamente
    });
    return playersSorted;
}
exports.sortWithName = sortWithName;
function sortWithScore(players) {
    var sortPlayersByScore = __spreadArray([], players, true);
    sortPlayersByScore.sort(function (a, b) {
        return b.score - a.score;
    });
    return sortPlayersByScore;
}
exports.sortWithScore = sortWithScore;
function addPosition(players) {
    return players.map(function (player, index) { return (__assign(__assign({}, player), { position: index + 1 })); });
}
exports.addPosition = addPosition;
function unificatePositionsTie(players) {
    return players.map(function (player, index) {
        if (index > 0 && player.score === players[index - 1].score) {
            return __assign(__assign({}, player), { position: players[index - 1].position });
        }
        return player;
    });
}
exports.unificatePositionsTie = unificatePositionsTie;
//# sourceMappingURL=Leaderboard.js.map