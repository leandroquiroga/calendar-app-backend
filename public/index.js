const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('input_name').value;
  let email = document.getElementById('input_email').value;
  let pass = document.getElementById('input_pass').value;

  let information = {name, email, pass};

  let informationJSON = JSON.stringify(information);

  fetch('http://localhost:4000/auth/register', {
      method: 'post',
      body: informationJSON,
  });
});