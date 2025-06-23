async function getEmployees() {

    try{
   let response = await fetch("http://localhost:3000/employees");
   const data = await response.json();
   renderEmployees(data);
    }
    catch (error) {
        console.error('Error fetching employee data',error);
    }



}
const renderEmployees = (data) => {
    let tableBody = document.getElementById("tbody");
    let rows = "";

    data.forEach((employee,index) => {
        rows += 
       <tr>
            <td>${index + 1}</td>
<td>${employee.salutation}.${employee.firstName} ${employee.lastName}</td>
<td>${employee.Email}</td>
<td>${employee.phone}</td>
<td>${employee.gender}</td>
<td>${employee.dob}</td>
<td>${employee.country}</td>
        </tr>;


       
    });
  tableBody.innerHTML = rows;      

};
getEmployees();