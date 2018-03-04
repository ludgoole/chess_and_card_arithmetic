var utils = {
    countHolds: function(holds) {
        var holdMap = {};
        for (var i=0; i<holds.length; i++) {
            if (!json[holds[i]]) {
                json[holds[i]] = 1;
            }
            json[holds[i]]++;
        }
        return holdMap;
    },

    sortHolds: function (holds) {
        holds.sort(function(a, b) {
            return a-b;
        })
    },

    copyHolds: function(holds) {
        return holds.slice(0);
    },

    // compose: function(f,g) {
    //     return function(x) {
    //       return f(g(x));
    //     };
    // },
    getNewHolds: function(holds) {
        var newHolds = copyMap(holds);
        this.sortMap(newHolds);
        return newHolds
    },
}

module.exports = utils;