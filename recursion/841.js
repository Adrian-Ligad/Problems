// 841. Keys and Rooms
// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    let visited = {}
    let que = [0]
    while(que.length !== 0) {
        let room = que.shift()
        if(visited[room]) continue;
        visited[room] = true
        que.push(...rooms[room])
        
    }
    
    return Object.keys(visited).length === rooms.length
};

//var canVisitAllRooms = function(rooms) {
//     let keys = {"0": true}
//     backTrack(0)
//     return Object.keys(keys).length === rooms.length
    
//     function backTrack( roomNumber, visited = {} ) {
//         if(visited[roomNumber]) return;
//         visited[roomNumber] = true
//         let room = rooms[roomNumber]
//         for(let j = 0; j < room.length; j++) {
//             let roomToVisit = room[j];
//             keys[roomToVisit] = true
//             backTrack(room[j], visited)
//         }
//     }
// };