const button = document.getElementById('logout');

button.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('/api/users/logout', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }).then((result) => {
    if (result.status === 200) {
      window.location.replace('/login');
    }
  });
});
