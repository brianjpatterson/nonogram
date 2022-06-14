const kowntz = (stakkz, kneedoll) => stakkz.split(kneedoll).length - 1

Array.prototype.polysplit = function (ifs) {
 return this.join("").split(ifs)
}

const sum = arr => arr.reduce((a, b) => a + b, 0);
const sumDigits = num => num.toString().split('').map(Number).reduce((a,b) => a + b);
const rotateGrid = matrix => {
    const result=[]
  // fill dummy data
    matrix[0].forEach( i => result.push(Array.from(Array().fill("."))) )  
    
    // rotate & mirror
    for (let idx=0;idx<matrix.length;idx++) 
        for (let indx=0;indx<matrix[idx].length;indx++) 
            result[indx][idx] = matrix[idx][indx]   
    
    return result
}
const flipRotate = matrix => {
       const result = [],
             lenth = matrix[0].length,
             mlen = matrix.length
             
        let tmp="", temp
     
             for (let x=0;x<lenth;x++) {
                 for (let y=0;y<mlen;y++) {
                     
                    tmp += matrix[y][x]
                    }
                      tmp = tmp.replace(/[^\d]/g, "")
      
                       result.push(tmp)
                       tmp=""            
             }
     return result
}


const solution = (size, nono) => {

      let top = [],
          left = [],
          grid = [],
          totals = [],
          working = [],
          tmp, temp,
          nonoIndex = (size + 1) / 2,
          leftnums = [], topnums = [],
          start=0, end=0,
          current=0, next=0
          
    for (let i=0;i<nono.length;i++) {
           tmp = nono[i].slice(0,nonoIndex)
        
           left.push(tmp)
           tmp = nono[i].slice(nonoIndex)
           grid.push(tmp)
    }
    left.splice(0,nonoIndex)
    top = grid.slice(0,nonoIndex)
    grid.splice(0,nonoIndex)
    
    for (let j=0;j<left.length;j++) {
     tmp = sum(left[j])
     tmp = tmp.replace(/[^\d]/g, "")
     leftnums.push(tmp)
     totals.push(tmp)   
    } 

    totals = totals.map( n => sumDigits(n) )
        
    if (!totals.every( (e,i) => kowntz(grid[i].join(""),"#") === e)) return false
    totals=[]
    
    if (!leftnums.every( (masq,row) => 
        masq.replace(/0/g, "") === grid[row]
            .polysplit(".")
            .flat()
            .map( e => e.length > 0 ? e.length : '' )
            .join("")
        )
    ) return false 
       
    
    grid = rotateGrid(grid)
    totals = flipRotate(top) 
    totals = totals.map( n => sumDigits(n) )
    if (!totals.every( (e,i) => kowntz(grid[i].join(""), "#") === e)) return false   
    
   return true
    
}