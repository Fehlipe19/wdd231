const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const telephone = params.get("telephone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

function displayTable() {
  const container = document.querySelector("#display-required-info");

  container.innerHTML = "";
  container.innerHTML = `
        <table>
            <tr>
                <th>First Name: </th>
                <td>${firstName}</td>
            </tr>
            <tr>
                <th>Last Name: </th>
                <td>${lastName}</td>
            </tr>
            <tr>
                <th>Email: </th>
                <td>${email}</td>
            </tr>
            <tr>
                <th>Phone Number: </th>
                <td>${telephone}</td>
            </tr>
            <tr>
                <th>Organization Name: </th>
                <td>${organization}</td>
            </tr>
            <tr>
                <th>Time Submitted: </th>
                <td>${timestamp}</td>
            </tr>
        </table>
    `;
}

document.addEventListener("DOMContentLoaded", displayTable);
