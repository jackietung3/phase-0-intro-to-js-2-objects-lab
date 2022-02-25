const employee = {
    name: {

    },
    streetAddress: {

    }
}    

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const new_emp = Object.assign({},employee)
    delete new_emp[key]
    return new_emp
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

