
class Calculator{
    constructor(){
        //properties
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045;
    }

    //getter

    get pi(){
        return `PI (${this.PI})`;
       
       
    }
    get e(){
        return `'Euler's number ${this.E}`;
        
    }
    
    //methods

    ratio(x,y,width){
       const height = width *(x/y)
        return `height is ${height} on ratio ${x}:${y}`;

    }

    percentage (x,y){
      const percentage = (x/y)*100
      return `${percentage}%`

    }

    add (x,y){
        const addition= x+y
      return addition;

    }

    subtract(x,y){
        const deduction=y-x
        return deduction;

    }

    multiply(x,y){
        return x*y
    }

    divide(x,y){
        if(y === 0){
            return `divisor can not be zero`
        }
        return x/y
    }

    modulation(x,y){
        if(y !== 0){
            return x % y
            
        }else{
            return `divisor can not be zero`
        }
        
    }

    elevate(x,y){
        return Math.pow(x, y);

    }

    sqrt(x){
        return Math.sqrt(x)
    }

}

const calculate = new Calculator()
console.log(calculate.PI);
console.log(calculate.E);

console.log(calculate.ratio(5,10,300))//return: 'height is --- on ratio x:y'
console.log(calculate.percentage(80,100)) // return the percentage of x in y.
console.log(calculate.add(80,100));  // Returns the sum of x added to y.

console.log(calculate.subtract(80,100)); // Returns the difference of x subtracted from y.
console.log(calculate.multiply(80,100));  // Returns the product of x multiplied by y.
console.log(calculate.divide(80,100));  // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
console.log(calculate.modulation(80,100)); // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
console.log(calculate.elevate(8,2));  // Returns the power of x elevated to y.
console.log(calculate.sqrt(8)); // Returns the square root of x.