//your JS code here. If required.
<script>
  // Function to create a promise for the form submission
  function processFormSubmission(age, name) {
    return new Promise((resolve, reject) => {
      if (age >= 18) {
        setTimeout(() => {
          resolve(`Welcome, ${name}. You can vote.`);
        }, 4000);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (!age || !name) {
      alert('Please fill in all fields.');
      return;
    }

    processFormSubmission(age, name)
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert(error);
      });
  }

  // Event listener to handle form submission
  const form = document.getElementById('userForm');
  form.addEventListener('submit', handleSubmit);
</script>
