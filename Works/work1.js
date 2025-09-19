// Fetch data from JSONPlaceholder
const tableBody = document.getElementById("userTable");

// Dummy roles and status to assign randomly
const roles = ["Admin", "Publisher", "Reviewer", "Moderator"];
const statusTypes = ["Active", "Inactive", "Suspended"];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.slice(0, 10).forEach((user, index) => {
      const role = roles[Math.floor(Math.random() * roles.length)];
      const status = statusTypes[Math.floor(Math.random() * statusTypes.length)];

      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${role}</td>
          <td class="status ${status.toLowerCase()}"><span></span>${status}</td>
          <td class="action-btns">
            <button class="edit">⚙</button>
            <button class="delete">✖</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  });
