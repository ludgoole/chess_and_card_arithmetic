var niuniu = {
    hasNiu: function(holds) {
        var len = holds.length
        for (var i=0; i<len; i++){
           for (var j=0; j<len; j++){
               if (j == i){
                   continue;
               }
               for(var k=0; k<len; k++) {
                   if(k == j || k == i){
                       continue;
                   }
                   if (holds[i] + holds[j] + holds[k] % 10 == 0) {
                       return true;
                   }
                   else {
                       console.log(' has not niu')
                       return false
                   }
               }
           } 
        }
    }
}