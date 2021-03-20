// 1079. Letter Tile Possibilities

// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

/**
 * @param {string} tiles
 * @return {number}
 */
 var numTilePossibilities = function(tiles) {
    const tilesObj = {}
    let count = 0
    for( let i = 0; i < tiles.length; i++ ) {
        if(!tilesObj[tiles[i]]) tilesObj[tiles[i]] = 0
        tilesObj[tiles[i]] += 1
    }
    backTrack() 
    return count
    
    function backTrack() {
        if(Object.keys(tilesObj).length === 0) return;
        for(let tile in tilesObj) {
            count += 1
            tilesObj[tile] -= 1
            if(tilesObj[tile] < 1) delete tilesObj[tile]
            backTrack()
            if(!tilesObj[tile]) tilesObj[tile] = 0
            tilesObj[tile] += 1
        }
    }
};