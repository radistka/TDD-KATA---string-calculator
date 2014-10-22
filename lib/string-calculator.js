var Calculator = function(){
};
Calculator.prototype.add = function(string){
    if(string === ''){
        return 0;
    }
    else if(string.length >= 1){
        var match = /^\/{2}.*\n/.exec(string) || /^\/{2}.\[{1}.*\]{1}\n/.exec(string);
        if(match){
            var delimiter = match[0].substring(2, match[0].length - 1);
            console.log('del' + delimiter);
            var newString = string.substring(string.indexOf('\n')+1, string.length);
            if(delimiter.indexOf('[') !== -1){
                var delimiters = [];
                var matches = delimiter.split(/\[+|\]+/);
                for (var m = 0; m < matches.length; m++){
                    if(matches[m].length > 0){
                        delimiters.push(matches[m]);
                    }
                }
                for (var d = 0; d < delimiters.length; d++){
                    string = newString.split(delimiters[d]).join(',')
                    newString = string;
                }
            }
            else{
                string = newString.replace(new RegExp(delimiter, 'g'), ',');
            }
        }
        var modString = string.replace(/\n/g, ",");
        if(modString.search(/,{2,}/) === -1){
            var numbers = modString.split(',');
            var sum = 0;
            var negative = [];
            for(var i = 0; i < numbers.length; i++){
                if(parseInt(numbers[i]) < 0){
                    negative.push(numbers[i]);
                }
                if(parseInt(numbers[i]) < 1000){
                    sum += parseInt(numbers[i]);
                }
            }
            if(negative.length > 0){
                var errorStr = 'negatives not allowed :';
                for(var j = 0; j < negative.length; j++){
                    errorStr = errorStr + ' ' + negative[j]
                }
                return errorStr;
            }
            return sum;
        }
        else{
            return 'error'
        }
    }
};
module.exports = Calculator;