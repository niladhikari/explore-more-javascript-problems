function removeDuplicateValue(Name) {
    let uniqeName = [];
    for (let i = 0; i < Name.length; i++) {
        const friendName = Name[i];
        // let index = uniqeName.indexOf(element);
        if (uniqeName.includes(friendName) === false) {
            uniqeName.push(friendName);
        }
    }
    return uniqeName;
}

const Names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];
let uniqeNames = removeDuplicateValue(Names);
console.log('Uniqe Numbers:',uniqeNames);