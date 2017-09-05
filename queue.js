var stack = {
	build: function() {
  	var height = 0;
  	var data = [];
    return {
    	size: function() {
      	return height;
      },
      push: function(x) {
      	data.push(x);
        height++;
      },
      pop: function() {
      	if(height<1) {
        	return null;
        }
        height--;
        return data.pop();
      },
      toString: function() {
      	return JSON.stringify({height: this.size(), data: JSON.stringify(data,2)},null,'  ');
      }
    }
  }
}

var queue = {
	build: function() {
  	var height = 0;
    var s1 = stack.build();
    var s2 = stack.build();
    return {
    	size: function() {
     		return height;
      },
      push: function(x) {
      	s1.push(x);
        height++;
      },
      pop: function() {
      	if(height<1) {
        	return null;
        }
        var x = s2.pop();
        if(x == null) {
        	while(true) {
          	var y = s1.pop();
            if(y == null) {
            	break;
            }
            s2.push(y);
          }
          x = s2.pop();
        }
        height--;
        return x;
     	},
      toString: function() {
        return JSON.stringify({height: this.size(), stack1: s1.toString(), stack2: s2.toString()},null,'  ');
      }
    }
  }
}
