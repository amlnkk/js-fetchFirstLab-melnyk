"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані.";
"Поверніть дані користувачів у форматі масиву";
"Дані мають включати такі поля, як id та name.";

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const users = [];

      for (let i = 0; i < data.length; i++) {
        const user = data[i];

        users.push({
          id: user.id,
          name: user.name,
        });
      }

      return users;
    });
}

console.log(fetchUsers());

module.exports = fetchUsers;
