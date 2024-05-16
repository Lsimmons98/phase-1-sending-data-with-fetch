function submitData(name, email) {
  const paragraph = document.createElement('p');

  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'name': name,
      'email': email
    })
  })
  .then(resp => resp.json())
  .then(user => {
    document.querySelector('body').appendChild(paragraph).textContent = user.id
  })
  .catch(() => document.querySelector('body').appendChild(paragraph).textContent = 'FetchError: request to http://localhost:3000/users failed, reason: Unauthorized Access')
}


 
  

