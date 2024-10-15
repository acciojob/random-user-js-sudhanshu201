// Global variable to store the user data
let currentUserData = null;

document.getElementById('getUser').addEventListener('click', getUser);
document.getElementById('ageButton').addEventListener('click', () => displayAdditionalInfo('age'));
document.getElementById('emailButton').addEventListener('click', () => displayAdditionalInfo('email'));
document.getElementById('phoneButton').addEventListener('click', () => displayAdditionalInfo('phone'));

function getUser() {
  // Fetch a random user from the API
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      currentUserData = data.results[0]; // Store the user data globally
      displayUser(currentUserData);
      clearAdditionalInfo(); // Clear additional info when a new user is loaded
    })
    .catch(error => console.error('Error fetching user:', error));
}

function displayUser(user) {
  // Display the user's name and large image
  const userImage = document.getElementById('userImage');
  const userName = document.getElementById('userName');
  
  userImage.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

function displayAdditionalInfo(attribute) {
  const additionalInfo = document.getElementById('additionalInfo');
  
  if (!currentUserData) {
    additionalInfo.textContent = "No user data available.";
    return;
  }

  // Determine the info to display based on the button clicked
  let infoText = '';
  switch (attribute) {
    case 'age':
      infoText = `Age: ${currentUserData.dob.age}`;
      break;
    case 'email':
      infoText = `Email: ${currentUserData.email}`;
      break;
    case 'phone':
      infoText = `Phone: ${currentUserData.phone}`;
      break;
  }

  additionalInfo.textContent = infoText;
}

function clearAdditionalInfo() {
  // Clears the additional info displayed under the "Additional Info" section
  document.getElementById('additionalInfo').textContent = '';
}

// Initial load
getUser();
