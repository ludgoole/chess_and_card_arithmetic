var doudizhu = {
    //单个 一对 三张 炸弹
    isSameTimes: function(select, times) {
        var holdMap = utils.countMap(select);        
        var newHolds = utils.getNewHolds(select);
        for (k in holdMap) {
            if (holdMap[k] == times) {
                return true;
            }
            else {
                console.log('请重新选择')
                return false
            }
        }
    },

    //顺子 连队 飞机
    isSeriesTimes: function (select, isSeriesTimes) {
        var newHolds = utils.getNewHolds(select);

        for (var i=1; i<newHolds.length; i+=times) {
            if (newHolds[i] == newHolds[0] + i/times){
                return true;  
            }
            else {
                console.log('请重新选择')
                return false
            }
        }
    },

    //三带一 飞机带翅膀
    isThreesAndOnes: function(select) {
        var holdMap = utils.countMap(select);        
        var newHolds = utils.getNewHolds(select);
        var sum = 0;
        for (k in holdMap) {
            if(holdMap[k]%2 != 0){
                sum += holdMap[k]
            }
        };

        if(sum % 4 == 0) {
            return true;
        }
        else {
            console.log('请重新选择')
            return false
        }
  
    },

    //切除选中的牌
    cutSelect: function(holds, select) {
        var index = holds.indexOf(select[0]);
        var len = select.length;
        holds.splice(index, len)
    },

    //切除三代一 飞机带翅膀
    cutThreesAndOnes: function(holds, select) {
        var single = [];
        var index = -1;

        if( isThreesAndOnes(select) ) {
            var holdMap = utils.countMap(select); 
            for (var k in holdMap) {
                if (holdMap[k] == 1) {
                    index = select.indexOf(k);
                    select.splice(index, 1);

                    single.push(k);                
                    cutSelect(holds, single);
                    single = [];
                }               
            }
        }

        cutSelect(holds, select);
    }






}