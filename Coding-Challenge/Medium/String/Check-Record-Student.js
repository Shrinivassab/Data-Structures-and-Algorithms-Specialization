/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var noOfAbsent = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            noOfAbsent++;
            if (noOfAbsent === 2) {
                return false;
            }
        }

        if ((s[i] === 'L') && (s[i + 1] === 'L') && (s[i + 2] === 'L'))  {
            return false;
        }
    }
    return true;
};


checkRecord('PPLLAAA');