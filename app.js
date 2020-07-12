// init github object from Github Class
const github = new Github();

// init ui object from UI Class
const ui = new UI();

// Search Input
const searchUser = document.querySelector("#searchUser");

// Search Input event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    github.getUser(userText).then((data) => {
      // console.log(data);
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
