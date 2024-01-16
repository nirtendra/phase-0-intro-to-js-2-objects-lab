
let employee = {
   
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee = { ...employee };
    employee[key] = value;
    return employee;
  }


 // console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }


  
  //console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))
  
  function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }


  //  deleteFromEmployeeByKey(employee, 'name')
  


  
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
   
    return employee;
  }


  
  // destructivelyDeleteFromEmployeeByKey(employee, 'name')