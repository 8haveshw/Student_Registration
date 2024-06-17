const studentform = document.getElementById("studentform");
// console.log(studentform);

// const studenttable = document.getElementById("student-table").getElementsByTagName("tbody")[0];
const studenttable = document.getElementById("student-table").querySelector("tbody");
// console.log(studenttable);
let students = [];

// Adding a student

studentform.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const studentClass = document.getElementById("class").value;
    const contactNumber = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    students.push({ name, studentClass, contactNumber, address });
    renderTable();
    var result_style = document.getElementById('student-table').style;
    result_style.display = 'table';
    studentform.reset();
});

function renderTable() {
     studenttable.innerHTML = "";
    students.forEach(function (student, index) {
        const row = studenttable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.textContent = student.name;
        cell2.textContent = student.studentClass;
        cell3.textContent = student.contactNumber;
        cell4.textContent = student.address;
        cell5.innerHTML = `<button class="button" onclick="editStudent(${index})">Edit</button> <button class="button" onclick="deleteStudent(${index})">Delete</button>`
    });
}

// Editing a student

function editStudent(index) {
    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("class").value = student.studentClass;
    document.getElementById("contact").value = student.contactNumber;
    document.getElementById("address").value = student.address;

    students.splice(index, 1);
    renderTable();
}

// Deleteing a student


function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}