/* Todo: Check if correct for all values, fix infinite loops on non-existent sums */

function subsetSum(set, total) {
    var n = set.length;
    var lb=0, ub=1<<n;
    set.sort();
    var x = set.length;
    while(lb<=ub) {
        sum=0;
        for(var i=0;i<n;i++) {
            if(x&(1<<i)) {
                sum += set[i];
            }
        }
        if(sum==total) {
            var ans=[];
            for(var k=0;k<n;k++) {
                if(x&(1<<k)) {
                    ans.push(set[k]);
                }
            }
            return ans;
        }
        if(sum<total) {
            lb=x;
            x = Math.floor((x+ub)/2);
        } else {
        	  ub = x;
            x = Math.ceil((x+lb)/2);
        }
    }
    return 0;
}


console.log(subsetSum([1,2,3,4], 5)); //[2, 3]
