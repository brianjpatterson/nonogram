Array.prototype.polycount = function (criteria) {
    return this.join("").split(criteria).length - 1 }
    
Array.prototype.polyint = function () {
    return this.map(e => parseInt(e)) }
    
String.prototype.polycount = function (criteria) {
    return this.split(criteria).length - 1 }

Array.prototype.polysplit = function (ifs) {
    return this.join("").split(ifs) }

Array.prototype.polysum = function (subject) {
    return this.reduce((a,b) => a + b, 0) }

Array.prototype.sliceAll = function (criteria) {
    return this.filter(e=>e !== criteria) }

const rotateGrid = matrix => {
    const result=[]
    matrix[0].forEach( i => result.push(Array.from(Array().fill("."))) )  
    for (let idx=0;idx<matrix.length;idx++) 
        for (let indx=0;indx<matrix[idx].length;indx++) 
            result[indx][idx] = matrix[idx][indx]   
    return result }

const nonoCheck = (row, idx) => {
    const nums = row.slice(0,idx).sliceAll("-").polyint()
    const grid = row.slice(idx).polysplit(".").map( e => 
        e.polycount("#")).sliceAll(0)
    return JSON.stringify(grid) === JSON.stringify(nums) ?
        true : false }

const solution = (size, nono) => {
    let nonoIndex = Math.floor((size + 1) / 2),
          nonoTop = rotateGrid(nono).slice(nonoIndex),     
         nonoLeft = nono.map( (e,i) => 
                    i >= idx ? e.slice(0) : '').slice(idx)
    
    if (nonoTop.every(e=>nonoCheck(e,nonoIndex)) &&
        nonoLeft.every(e=>nonoCheck(e,nonoIndex)))
        return true        
    return false   
}
