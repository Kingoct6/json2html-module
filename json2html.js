export default function json2html(data) {
  // Define the fixed headers
  const headers = ["Name", "Age", "Gender"];

  // Start building the HTML table as a string
  let html = `<table data-user="saiharshil6@gmail.com">`;
  html += "<thead><tr>";

  // Generate table header row with fixed columns
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead>";

  // Generate table body rows
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
