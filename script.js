//your code here
document.getElementById('getUser').addEventListener('click', getUser);

function getUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      displayUser(user);
    })
    .catch(error => console.error('Error fetching user:', error));
}

function displayUser(user) {
  const userImage = document.getElementById('userImage');
  const userName = document.getElementById('userName');

  userImage.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

function displayAdditionalInfo(attribute) {
  const additionalInfo = document.getElementById('additionalInfo');
  const user = data.results[0];
  let infoText = '';

  switch (attribute) {
    case 'age':
      infoText = `Age: ${user.dob.age}`;
      break;
    case 'email':
      infoText = `Email: ${user.email}`;
      break;
    case 'phone':
      infoText = `Phone: ${user.phone}`;
      break;
  }

  additionalInfo.textContent = infoText;
}

// Initial load
getUser();
