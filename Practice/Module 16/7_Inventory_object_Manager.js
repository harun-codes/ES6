const manageInventoryObject = (obj, action) => {

    if(typeof obj !== "object" || obj === null || Array.isArray(obj)){
        return "Invalid"
    }

    const validActions = [
        'keys',
        'values',
        'entries',
        'seal',
        'freeze'
    ]
    if(!validActions.includes(action) && !action.startsWith("delete:"))
    {
        return "Invalid"
    }

    if(action === 'keys'){
        return Object.keys(obj)
    }
    if(action === 'values'){
        return Object.values(obj)
    }
    if(action === 'entries'){
        return Object.entries(obj)
    }

    if(action.startsWith("delete:")){
        const propName = action.slice(7)
        
        const newObj = {...obj}
        delete newObj[propName]
    
    }

    if(action === 'seal'){
        return Object.seal(obj)
    }

    if(action === "freeze"){
        return Object.freeze(obj)
    }

    return "Invalid"
}

const inventory = {
  laptop: 10,
  mouse: 25,
  keyboard: 15
};


// keys
console.log(manageInventoryObject(inventory, "keys"));
// ["laptop", "mouse", "keyboard"]


// values
console.log(manageInventoryObject(inventory, "values"));
// [10, 25, 15]


// entries
console.log(manageInventoryObject(inventory, "entries"));
// [["laptop", 10], ["mouse", 25], ["keyboard", 15]]


// delete
console.log(
  manageInventoryObject(inventory, "delete:mouse")
);
// { laptop: 10, keyboard: 15 }


// seal
const sealedInventory = manageInventoryObject(
  inventory,
  "seal"
);

console.log(sealedInventory);


// freeze
const frozenInventory = manageInventoryObject(
  inventory,
  "freeze"
);

console.log(frozenInventory);


// Invalid object
console.log(
  manageInventoryObject([], "keys")
);
// Invalid


// Invalid action
console.log(
  manageInventoryObject(inventory, "update")
);
// Invalid
