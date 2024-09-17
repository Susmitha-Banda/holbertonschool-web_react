/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: "Kanna",
    lastName: "Jo",
    age: 84,
    location: "Seattle"
};
var student2 = {
    firstName: "Alex",
    lastName: "Key",
    age: 45,
    location: "Melbourne"
};
var studentsList = [student1, student2];
// Function to render the table
function renderTable() {
    // Create table element
    var table = document.createElement('table');
    // Create table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['First Name', 'Location'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    // Add the header row to the <thead>
    thead.appendChild(headerRow);
    // Add the <thead> to the table
    table.appendChild(thead);
    // Create the table body
    var tbody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        // Create a cell for the student's first name
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        // Create a cell for the student's location
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        // Add the row to the <tbody>
        tbody.appendChild(row);
    });
    // Add the <tbody> to the table
    table.appendChild(tbody);
    // Add CSS styles for the table
    var style = document.createElement('style');
    style.textContent = "\n    table {\n      border-collapse: collapse;\n      width: 100%;\n    }\n    th, td {\n      border: 1px solid #ccc;\n      padding: 10px;\n      text-align: left;\n    }\n    th {\n      background-color: #f4f4f4;\n    }\n  ";
    document.head.appendChild(style);
    // Create a container for the table and add it to the body
    var tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', 'table-container');
    tableContainer.appendChild(table);
    document.body.prepend(tableContainer);
}
// Call the function to render the table
renderTable();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPQSxJQUFJLFFBQVEsR0FBWTtJQUN0QixTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsSUFBSTtJQUNkLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQztBQUVGLElBQUksUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsV0FBVztDQUN0QixDQUFDO0FBRUYsSUFBSSxZQUFZLEdBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFbkQsK0JBQStCO0FBQy9CLFNBQVMsV0FBVztJQUNsQix1QkFBdUI7SUFDdkIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU5QyxzQkFBc0I7SUFDdEIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLElBQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQVU7UUFDeEIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM1QixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRUgsb0NBQW9DO0lBQ3BDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFN0IsK0JBQStCO0lBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFekIsd0JBQXdCO0lBQ3hCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztRQUMxQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLDZDQUE2QztRQUM3QyxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELGFBQWEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRS9CLDJDQUEyQztRQUMzQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM1QyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlCLDZCQUE2QjtRQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsK0JBQStCO0lBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFekIsK0JBQStCO0lBQy9CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxzT0FhbkIsQ0FBQztJQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpDLDBEQUEwRDtJQUMxRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDckQsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsd0NBQXdDO0FBQ3hDLFdBQVcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5sZXQgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogXCJLYW5uYVwiLFxuICBsYXN0TmFtZTogXCJKb1wiLFxuICBhZ2U6IDg0LFxuICBsb2NhdGlvbjogXCJTZWF0dGxlXCJcbn07XG5cbmxldCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkFsZXhcIixcbiAgbGFzdE5hbWU6IFwiS2V5XCIsXG4gIGFnZTogNDUsXG4gIGxvY2F0aW9uOiBcIk1lbGJvdXJuZVwiXG59O1xuXG5sZXQgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSB0YWJsZVxuZnVuY3Rpb24gcmVuZGVyVGFibGUoKSB7XG4gIC8vIENyZWF0ZSB0YWJsZSBlbGVtZW50XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgXG4gIC8vIENyZWF0ZSB0YWJsZSBoZWFkZXJcbiAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCBoZWFkZXJzID0gWydGaXJzdCBOYW1lJywgJ0xvY2F0aW9uJ107XG5cbiAgaGVhZGVycy5mb3JFYWNoKGhlYWRlclRleHQgPT4ge1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICB0aC50ZXh0Q29udGVudCA9IGhlYWRlclRleHQ7XG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBoZWFkZXIgcm93IHRvIHRoZSA8dGhlYWQ+XG4gIHRoZWFkLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG4gIFxuICAvLyBBZGQgdGhlIDx0aGVhZD4gdG8gdGhlIHRhYmxlXG4gIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcblxuICAvLyBDcmVhdGUgdGhlIHRhYmxlIGJvZHlcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gIHN0dWRlbnRzTGlzdC5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgY2VsbCBmb3IgdGhlIHN0dWRlbnQncyBmaXJzdCBuYW1lXG4gICAgY29uc3QgZmlyc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICAgIHJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVDZWxsKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYSBjZWxsIGZvciB0aGUgc3R1ZGVudCdzIGxvY2F0aW9uXG4gICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgIHJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkNlbGwpO1xuXG4gICAgLy8gQWRkIHRoZSByb3cgdG8gdGhlIDx0Ym9keT5cbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9KTtcblxuICAvLyBBZGQgdGhlIDx0Ym9keT4gdG8gdGhlIHRhYmxlXG4gIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcblxuICAvLyBBZGQgQ1NTIHN0eWxlcyBmb3IgdGhlIHRhYmxlXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgdGFibGUge1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB0aCwgdGQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgdGFibGUgYW5kIGFkZCBpdCB0byB0aGUgYm9keVxuICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYmxlLWNvbnRhaW5lcicpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0YWJsZUNvbnRhaW5lcik7XG59XG5cbi8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgdGFibGVcbnJlbmRlclRhYmxlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=