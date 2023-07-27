

// q- 1528. Shuffle String


const s = "codeleet"
const indices = [4,5,6,7,0,2,1,3]

var restoreString = function(s, indices) {
    let str = ''
    for(let i=0; i<indices.length; i++){
        console.log(indices[i],s[indices[i]]);
        str += s[indices[i]]
    }
    console.log(str); 
};

restoreString(s,indices)