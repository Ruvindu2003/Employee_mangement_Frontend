function lodEmployee() {
    fetch("http://localhost:8080/employee/getAll")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let tabel = document.getElementById("employeeTable");
            data.forEach(element => {
                tabel.innerHTML +=
                    `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.position}</td>
                            <td>${element.department}</td>
                            <td>${element.salary}</td>
                            <td>${element.date_of_hire}</td>
                            <td>${element.phone_Number}</td>
                            <td>${element.email}</td>
                        </tr>
            `;

            });
        })

}

lodEmployee();

function addEmployee() {

    // console.log("addEmployee");
    

    let id = document.getElementById("id").value;
    let emp_name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;
    let date_of_hire = document.getElementById("dateOfHire").value;
    let phone_Number = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    

    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": id,
        "name": emp_name,
        "position": position,
        "department": department,
        "salary": salary,
        "date_of_hire": date_of_hire,
        "phone_Number": phone_Number,
        "email": email
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/employee/Employee-add", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

    function SearchEmployee() {
        let searchId = document.getElementById("id").value;
        console.log("Search");

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`http://localhost:8080/employee/Employee-search-by-id/${searchId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                document.getElementById("id").value = result.id;
                document.getElementById("name").value = result.name;
                document.getElementById("position").value = result.position;
                document.getElementById("department").value = result.department;
                document.getElementById("salary").value = result.salary;
                document.getElementById("dateOfHire").value = result.date_of_hire;
                document.getElementById("phone").value = result.phone_Number;
                document.getElementById("email").value = result.email;
            })
            .catch((error) => console.error(error));
    }

    function UpdateEmployee() {
        let id = document.getElementById("id").value;
        let emp_name = document.getElementById("name").value;
        let position = document.getElementById("position").value;
        let department = document.getElementById("department").value;
        let salary = document.getElementById("salary").value;
        let date_of_hire = document.getElementById("dateOfHire").value;
        let phone_Number = document.getElementById("phone").value;
        let email = document.getElementById("email").value;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": id,
            "name": emp_name,
            "position": position,
            "department": department,
            "salary": salary,
            "date_of_hire": date_of_hire,
            "phone_Number": phone_Number,
            "email": email
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:8080/employee/Employee-update", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    function DeleteEmployee() {
        let id = document.getElementById("id").value;
        console.log("Delete");

        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch(`http://localhost:8080/employee/Employee-Delete/${id}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                document.getElementById("id").value = "";
                document.getElementById("name").value = "";
                document.getElementById("position").value = "";
                document.getElementById("department").value = "";
                document.getElementById("salary").value = "";
                document.getElementById("dateOfHire").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
            })
            .catch((error) => console.error(error));
    }



