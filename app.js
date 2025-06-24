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

const form = document.getElementById("addEmployeeForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
e.preventDefault();

const employee = {
salutation: document.getElementById("salutation").value,
firstName: document.getElementById("firstName").value,
lastName: document.getElementById("lastName").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
dob: document.getElementById("dob").value,
gender: document.getElementById("gender").value,
qualifications: document.getElementById("qualifications").value,
address: document.getElementById("address").value,
city: document.getElementById("city").value,
state: document.getElementById("state").value,
country: document.getElementById("country").value,
username: document.getElementById("username").value,
password: document.getElementById("password").value,
};

fetch("/employees", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(employee),
})
.then((res) => {
if (!res.ok) {
return res.json().then((err) => {
throw new Error(err.errors.join(", "));
});
}
return res.json();
})
.then((data) => {
message.textContent = "Employee added successfully!";
message.style.color = "green";
form.reset();
})
.catch((err) => {
message.textContent = "Error: " + err.message;
message.style.color = "red";
});
});
