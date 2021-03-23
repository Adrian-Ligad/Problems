// 599. Minimum Index Sum of Two Lists
// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. 
// If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let list1Object = {}
    for(let i = 0; i < list1.length; i += 1) {
        list1Object[list1[i]] = i
    }
    let index = Infinity, result = [];
    for(let i = 0; i < list2.length; i++) {
        let restaurant = list2[i]
        if(list1Object[restaurant] !== undefined) {
            if(list1Object[list2[i]] + i < index) {
                index = list1Object[list2[i]] + i
                result = [list2[i]]
            }
            else if(list1Object[list2[i]] + i === index) {
                result.push(list2[i])
            }
        }
    }
    return result
};