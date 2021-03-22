// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0; i < sortedIntervals.length - 1; i++) {
        let next = i + 1
        if(sortedIntervals[next][0] <= sortedIntervals[i][1]) {
            let max = Math.max(sortedIntervals[next][1], sortedIntervals[i][1])
            sortedIntervals[i][1] = max
            sortedIntervals.splice(i + 1, 1)
            i -= 1
        }
    }
    return sortedIntervals
};