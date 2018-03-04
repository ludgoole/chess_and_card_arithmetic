var utils = require('utils');
var mahjong = {

    cutSameTimes: function(holds, times) {
        var holdMap = utils.countMap(holds);                
        var newHolds = utils.getNewHolds(holds);
        var index = -1;

        for (k in holdMap) {
            if (holdMap[k] == times) {
                for (var i=0; i<newHolds.length; i++) {
                    index = newHolds.indexOf(k);
                    newHolds.splice(index, 1);
                    i--;
                }
            }
        }

        return holds;
    },

    getSeriesIndexs: function(holds, amount) {
        var newHolds = utils.getNewHolds(holds);
        var prevCard = newHolds[0];
        var index = 0;
        var prevCards = [];
        var indexs = [];

        for (var i=0; i<newHolds.length; i++) {
            prevCard = newHolds[i]
            index = i;
            prevCards.push(prevCard);
            indexs.push(index);
            for (var j=1; j<newHolds.length; j++) {
                if (newHolds[j] == prevCard + 1){
                    prevCard = newHolds[j];
                    index = j;
                    prevCards.push(prevCard);
                    indexs.push(index);
                }
            }
            if (indexs.length == amount){
                return indexs;
            }
            else {
                prevCards = [];
                indexs = [];
            }   
        }
    },

    cutSeriesAmount: function (holds, amount) {
        var newHolds = utils.getNewHolds(holds);        
        var indexs = getSeriesIndexs(holds, amount)

        if (indexs != null) {
            for (var i=0; i<indexs.length; i++){
                var j =0;
                newHolds.splice(indexs[i]-j, 1);
                j++;
            }
        }

        return newHolds;
       
    }

    
}