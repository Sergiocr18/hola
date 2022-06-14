var mainObj = [
	{
		name: "Kapil",
		age: 21,
		status: "Active",
		telefono: "21345667",
	},
	{
		name: "John",
		age: 28,
		status: "Inactive",
		telefono: "1231332",
	},
	{
		name: "Deos",
		age: 18,
		status: "Active",
		telefono: "54654654",
	},
];
// console.table([
// 	[mainObj[0].name, mainObj[0].age],
// 	[mainObj[1].name, mainObj[1].age],
// ]);

var k = "<tbody id='tblStocks'>";
for (i = 0; i < mainObj.length; i++) {
	k += "<tr>";
	k += "<td>" + mainObj[i].name + "</td>";
	k += "<td>" + mainObj[i].age + "</td>";
	k += "<td>" + mainObj[i].status + "</td>";
	k += "<td>" + mainObj[i].telefono + "</td>";
	k += "</tr>";
}
k += "<tr><td style='text-align:center'colspan=4>ASD</td></tr>";
k += "<tr><td style='text-align:center'colspan=3>total</td><td>46</td></tr>";
k += "</tbody>";
document.getElementById("tableData").innerHTML = k;

function exportData() {
	/* Get the HTML data using Element by Id */
	var table = document.getElementById("tblStocks");

	/* Declaring array variable */
	var rows = [];

	//iterate through rows of table
	for (var i = 0, row; (row = table.rows[i]); i++) {
		// console.log(row.cells.length);
		//rows would be accessed using the "row" variable assigned in the for loop
		//Get each cell value/column from the row
		column1 = "";
		column2 = "";
		column3 = "";
		column4 = "";
		if (row.cells.length == 1) {
			column1 = row.cells[0].innerText;
		}

		if (row.cells.length == 2) {
			column1 = row.cells[0].innerText;
			column2 = row.cells[1].innerText;
		}
		if (row.cells.length == 3) {
			column1 = row.cells[0].innerText;
			column2 = row.cells[1].innerText;
			column3 = row.cells[2].innerText;
		}
		if (row.cells.length == 4) {
			column1 = row.cells[0].innerText;
			column2 = row.cells[1].innerText;
			column3 = row.cells[2].innerText;
			column4 = row.cells[3].innerText;
		}
		column1 = row.cells[0].innerText;
		// console.log(column1);
		// console.log(column2);
		// console.log(column3);
		console.log(column4);
		/* add a new records in the array */
		rows.push([column1, column2, column3, column4]);
	}

	csvContent = "data:text/csv;charset=utf-8,";
	/* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
	rows.forEach(function (rowArray) {
		row = rowArray.join(",");
		csvContent += row + "\r\n";
	});

	/* create a hidden <a> DOM node and set its download attribute */
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "Stock_Price_Report.csv");
	document.body.appendChild(link);
	/* download the data file named "Stock_Price_Report.csv" */
	link.click();
}
function updateAvatarPosition(e) {
	var avatar = document.getElementById("avatar");
	avatar.style.left = e.x - 20 + "px";
	avatar.style.top = e.y + "px";
}
document.onmousemove = updateAvatarPosition;
