const employee = {
    name: "Megan Fox",
    streetAddress: "500 west 125 st"
};

function updateEmployeeWithKeyAndValue(obj, name, address){
    const update = {
        ...obj,[name]: address  //...obj =>copy of the object employee
    }                        //[name]  => key we want to update
    return update;
};                           //address => new value of the key

function destructivelyUpdateEmployeeWithKeyAndValue(empl,name,street){
    empl[name] = street
    return empl;
   
}

function deleteFromEmployeeByKey(obj,name){
    const nonDestrDelete = {
        ...obj[name]
    }
    return nonDestrDelete;
}

function destructivelyDeleteFromEmployeeByKey(obj,name){
    delete obj[name];
    return obj;           
}


