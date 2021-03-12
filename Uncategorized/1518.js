/*1518. Water Bottles
Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
The operation of drinking a full water bottle turns it into an empty bottle.
Return the maximum number of water bottles you can drink
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let numBottlesLeft = numBottles, remainder = 0, numBottlesDrank = 0
    while(numBottlesLeft > 0) {
        let curRemainder = (numBottlesLeft+ remainder) % numExchange
        numBottlesDrank += numBottlesLeft
        numBottlesLeft = Math.floor((numBottlesLeft + remainder)/numExchange)
        remainder = curRemainder
        
    }
    return numBottlesDrank
};