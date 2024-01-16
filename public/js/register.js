const form = document.getElementById('formContainer');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const result = {};
  data.forEach((value, key) => {
    return (result[key] = value);
  });
  fetch('/api/users/register', {
    method: 'POST',
    body: JSON.stringify(result),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((result) => {
    if (result.status === 200) {
      window.location.replace('/login');
    }
  });
});
