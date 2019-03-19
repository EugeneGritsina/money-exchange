module.exports = function makeExchange(currency) {
    function error(property) {
        this.error = "You are rich, my friend! We don't have so much coins for exchange";
    }

    if (currency > 10000) {
        return new error();
    }
    
    class changeClass {}

    let obj = new changeClass();
    if (currency < 1) {
        return obj;
    }

    let half = 0;
    let quater = 0;
    let dimes = 0;
    let nickel = 0;
    let penny = 0;

    if (currency >= 50) {
        half = parseInt(currency / 50, 10);
        currency = currency % 50;
    }

    if (currency >= 25) {
        quater = parseInt(currency / 25, 10);
        currency = currency % 25;
    }

    if (currency >= 10) {
        dimes = parseInt(currency / 10,10);
        currency = currency % 10;
    }
    
    if (currency >= 5) {
        nickel = parseInt(currency / 5,10);
        currency = currency % 5;
    }

    penny = currency;

    if (half != 0) {
        obj["H"] = half;
    }
    if (quater != 0) {
        obj["Q"] = quater;
    }
    if (dimes != 0) {
        obj["D"] = dimes;
    }
    if (nickel != 0) {
        obj["N"] = nickel;
    }
    if (penny != 0) {
        obj["P"] = penny;
    }
    return obj;
}
// Your code goes here!
    // Return an object containing the minimum number of coins needed to make change