module.exports = {
    values : [],

    read: function(...args) {
        this.values = [];
        for (let arg of args) {
            if (isNaN(arg)) {
                console.log("Invalid number type: %s", arg);
                throw new TypeError("Invalid number type");
            }

            let n = Number(arg);
            this.values.push(n);
        }
    },

    sum: function() {
        sum = 0;
        for (let i of this.values)
            sum += i;
        return sum;
    },

    mul: function() {
        sum = 1;
        for (let i of this.values)
            sum *= i;
        return sum; 
    }
};