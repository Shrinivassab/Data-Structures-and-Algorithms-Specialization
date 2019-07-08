function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let str1Length = str1.length;
    let str2Length = str2.length;
    let j = 0;
    for(let i = 0; i < str2Length && j < str1Length; i++) {
        if(str1[j] === str2[i]) {
            j++;
        }
    }
    return (j === str1Length);
}

// isSubsequence('hello', 'hello world');
// isSubsequence('abc', 'acb')
isSubsequence('sing', 'string');


/*Alternate Solution*/

/*function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}*/