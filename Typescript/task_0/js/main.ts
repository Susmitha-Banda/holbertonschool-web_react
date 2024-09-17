interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "Kanna",
  lastName: "Jo",
  age: 84,
  location: "Seattle"
};

let student2: Student = {
  firstName: "Alex",
  lastName: "Key",
  age: 45,
  location: "Melbourne"
};

let studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  // Create table element
  const table = document.createElement('table');
  
  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['First Name', 'Location'];

  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  // Add the header row to the <thead>
  thead.appendChild(headerRow);
  
  // Add the <thead> to the table
  table.appendChild(thead);

  // Create the table body
  const tbody = document.createElement('tbody');

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    // Create a cell for the student's first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    // Create a cell for the student's location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Add the row to the <tbody>
    tbody.appendChild(row);
  });

  // Add the <tbody> to the table
  table.appendChild(tbody);

  // Add CSS styles for the table
  const style = document.createElement('style');
  style.textContent = `
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
  `;
  document.head.appendChild(style);

  // Create a container for the table and add it to the body
  const tableContainer = document.createElement('div');
  tableContainer.setAttribute('id', 'table-container');
  tableContainer.appendChild(table);
  document.body.prepend(tableContainer);
}

// Call the function to render the table
renderTable();
