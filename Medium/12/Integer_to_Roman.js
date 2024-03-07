/**
 * integer to Roman
 */
var intToRoman = function(num) {
    let res='';
    let index =1;
    while (num>0) {
        let remainder=num%10;
        res=numberToRoman(remainder*index) + res;
        index*=10;
        num=Math.floor(num/10);
    }
    return res;
};

let numberToRoman=function(num){
    if(1<num && num<4){
        return ''.padEnd(num,'I');
    }else if(num==4){
        return 'IV';
    }else if(num==5){
        return 'V';
    }else if(num>5 && num<9){
        return 'V'.padEnd(num-4, 'I');
    }else if(num==9){
        return 'IX';
    }else if(num==10){
        return 'X';
    }else if(num>10 && num<40){
        return 'X'.padEnd((num-10)/10 + 1, 'X');
    }else if(num==40){
        return 'XL';
    }else if(num==50){
        return 'L';
    }else if(num>50 && num<90){
        return 'L'.padEnd((num-50)/10 +1, 'X');
    }else if(num==90){
        return 'XC';
    }else if(num==100){
        return 'C';
    }else if(num>100 && num<400){
        return 'C'.padEnd((num-100)/100 +1, 'C');
    }else if(num==400){
        return 'CD';
    }else if(num==500){
        return 'D';
    }else if(num>500 && num<900){
        return 'D'.padEnd((num-500)/100 +1, 'C');
    }else if(num==900){
        return 'CM';
    }else if(num==1000){
        return 'M';
    }
    return '';
}
let num = 58;
let res=intToRoman(num);
console.log(res);