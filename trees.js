/* 1)   637 Average of levels in binary tree 
    Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array. 
*/
    const tree637 = (root) => {
        function TreeNode( val, left, right) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
        }

        var averageOfLevels = function(root) {
            const result = []
            const que = [root]
            while(que.length) {
                const queL = que.length
                let total = 0
                for(let i = 0; i < queL; ++i) {
                    const node = que.shift()
                    total += node.val
                    if(node.left) que.push(node.left)
                    if(node.right) que.push(node.right)
                }
                result.push((total/queL))
            }
            return result
        };
        return averageOfLevels(root)
    }

/* 2) 111 Minimum Depth of binary tree
    Given a binary tree, find its minimum depth.
    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/
const tree111 = (root) => {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var minDepth = function(root) {
        if(root === null) return 0
        let que = [[root,1]]
        while(que.length > 0) {
            let queL = que.length
            for(let i = 0; i < queL; ++i) {
                let [node, level] = que.shift()
                if(!node.left && !node.right) return level
                if(node.left) que.push([node.left, level + 1])
                if(node.right) que.push([node.right, level + 1])
                
            }
        }
    };
    return minDepth(root)
}

/* 103 Binary Tree Zigzag Level ORder Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).
*/
const tree103 = (root) => {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var zigzagLevelOrder = function(root) {
        if(root === null) return []
        const result = []
        //push into que: true = right first, false = left first
        const que = [root]
        let direction = false
        while(que.length > 0) {
            let queL = que.length
            let curDepth = []
            for(let i = 0; i < queL; ++i) {
                let node = que.shift()
                curDepth.push(node.val)
                    if(node.left) que.push(node.left)
                    if(node.right) que.push(node.right)
            }
            if(direction) swap(curDepth)
            direction = !direction
            result.push(curDepth)
            
        }
        return result
        
        function swap(array) {
            let left = 0, right = array.length - 1
            while(left < right) {
                let temp = array[left]
                array[left] = array[right]
                array[right] = temp
                left++
                right--
            }
        }
    };

    return zigzagLevelOrder(root)
}

/* 199. Binary Tree Right Side View
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

const tree199 = (root) => {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var rightSideView = function(root) {
        if(root === null) return []
        let result = [], que = [root]
        while(que.length > 0) {
            let seen = false
            let queL = que.length;
            for(let i = 0; i < queL; ++i) {
                let node = que.shift()
                if(!seen) {
                    seen = true
                    result.push(node.val)
                }
                if(node.right) que.push(node.right)
                if(node.left) que.push(node.left)
            }
        }
        return result
    };
    return rightSideView(root)
}

/* 112. Path Sum
Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.
*/

const tree112 = (root) => {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var hasPathSum = function(root, targetSum) {
        return recursion(root, 0)
        function recursion ( node, val ) {
            if(node === null) return false
            let newVal = val + node.val
            if(!node.left && !node.right) return newVal === targetSum ? true : false
            let left = recursion(node.left, newVal)
            let right = recursion(node.right, newVal)
            if( left || right ) return true
            return false
        }
    };
    return hasPathSum(root)
}

/* 113. Path Sum II
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.
A leaf is a node with no children.
*/

const tree113 = (root) => {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var pathSum = function(root, targetSum) {
        let result = []
        recursion(root,[],0)
        
        function recursion(node, stack, val) {
            if(node === null) return;
            let newVal = val + node.val
            let currentStack = [...stack]
            currentStack.push(node.val)
            if(!node.left && !node.right && newVal === targetSum) return result.push(currentStack)
            recursion(node.left, currentStack, newVal)
            recursion(node.right, currentStack, newVal)
        }
        return result
    };    
    var pathSum = function(root, targetSum) {
        let result = [], stack = []
        recursion(root)
        
        function recursion(node, val = 0) {
            if(node === null) return;
            let newVal = val + node.val
            stack.push(node.val)
            if(!node.left && !node.right && newVal === targetSum) result.push([...stack])
            recursion(node.left, newVal)
            recursion(node.right, newVal)
            stack.pop()    
        }
        return result
    };
    return pathSum(root)
}

/* Binary Tree level order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

const tree102 = (root) => {
    const result = []
    if(!root) return result
    let que = [root]
    while(que.length > 0) {
        const queL = que.length, level = []
        for(let i = 0; i < queL; i++) {
            let node = que.shift()
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
            level.push(node.val)
        }
        result.push(level)
    }
    return result
}

/* 101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

var tree101 = (root) => {
    const que = [root.left, root.right]
    while(que.length > 0) {
        let queLHalf = que.length/2, queVals = [], queValsReversed = []
        for( let i = 0; i < queLHalf; i++) {
            let node = que.shift()
            if(node === null) {
                queVals.push(null);
                continue;
            }
            que.push(node.left)
            que.push(node.right)
            queVals.push(node.val)
        }
        for( let i = 0; i < queLHalf; i++) {
            let node = que.shift()
            if(node === null) {
                queValsReversed.push(null);
                continue;
            }
            que.push(node.right)
            que.push(node.left)
            queValsReversed.push(node.val)
        }
        let longest = Math.max(queVals.length, queValsReversed.length)
        for(let j = 0; j < longest; j++) {
            // console.log(queVals, queValsReversed)
            if(queVals[j] !== queValsReversed[j]) return false
        }
    }
    return true
};