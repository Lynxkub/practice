function validAnagram(str1 , str2) {
    if(str1.length !== str2.length) return false;
    const freq1 = freqCounter(str1);
    const freq2 = freqCounter(str2);
    for(let key in freq1) {
        if(freq1[key] !== freq2[key]) return false;
    }
    return true;
}

function freqCounter(str) {
    const obj = {};
    for(let i of String(str)) {
        obj[i] = (obj[i] + 1) || 1;
    }
    return obj;
}


function constructNote(msg , letters) {
    const freq1 = freqCounter(msg);
    const freq2 = freqCounter(letters);
    for(let key in freq1) {
        if(freq1[key] > freq2[key]) return false
    }
    return true;
}

function averagePair(arr , avg) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
    if((arr[left] + arr[right]) / 2 === avg) return true;
    if((arr[left] + arr[right]) / 2 > avg) {
        right--
    }else {
        left++
    }
    }
    return false;
}

function twoArrayObject(arr1 , arr2) {
    const obj = {};
    let currSpot = 0
    while(currSpot < arr1.length) {
        obj[arr1[currSpot]] = arr2[currSpot] || null;
        currSpot++
    }
    return obj;
}


// function freqMap(nums) {
//     const map = new Map();
//     for(let num in String(nums)) {
      
//        if(map.has(num)) {
//            map.set(num , map.get(num) + 1);
//        }else {
//            map.set(num , 1)
//        }
        
//     }
//     return map;
// }

function sameFrequency(nums1 , nums2) {
    if(nums1.length !== nums2.length) return false;
    let freq1 = freqCounter(nums1);
    let freq2 = freqCounter(nums2);
    for(let key in freq1) {
        if(freq1[key] !== freq2[key]) return false;
    }
    return true
}


function separatePositive(arr) {
    for(let i = arr.length -1; i >= 0; i--) {
        if(arr[i] < 0) {
            let cut = arr.splice(i , 1);
            arr.push(cut[0]);
            
        }
    }
    return arr;
}

function freqMap(str) {
    const map = new Map();
    let count = 1
    for(let letter of str) {
        if(map.has(letter)) {
            map.set(`${letter}${count}` , 1)
            count ++
        }else{
            map.set(letter , 1)
        }
    }
    return map;
}

function isSubsequence(str1 , str2) {
   let str1Idx=0;
   let str2Idx = 0;
   if(!str1) return true;
   while(str2Idx < str2.length) {
       if(str2[str2Idx] === str1[str1Idx]) {
           str1Idx += 1;
       }
       if(str1Idx === str1.length) return true;
       str2Idx +=1;
   }
   return false;
}

function setMaker(arr) {
    const set = new Set();
    for(let i of arr) {
        set.add(i);
    }
    return set;
}

function countPairs(arr , num) {
    let answers = [];
    let arrSet = setMaker(arr)
    for(let i = 0; i< arr.length; i++) {
        let  diff = num - arr[i];
        if(arrSet.has(arr[i]) && arrSet.has(diff) && arr[i] !== diff){
           if(answers.indexOf(arr[i]) === -1){
            answers.push(arr[i] , diff)
           }
        }
    }
    return (answers.length / 2 || 0);
}