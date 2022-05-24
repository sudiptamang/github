// const light = document.querySelectorAll("light");
const darkModeToggle = document.querySelector(".light");
const octocatContainer = document.querySelector(".octocatContainer");
const input = document.querySelector(".Github");
const button = document.querySelector(".button");

let darkmode = false;
let githubUsers = [];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-theme");
  if (darkmode == true) {
    darkModeToggle.textContent = "Dark";
  } else {
    darkModeToggle.textContent = "Light";
  }
  darkmode = !darkmode;
}

function searchUser() {
  const searchTerm = input.value || "octocat";
  console.log("searchTerm", searchTerm);
  fetch(`https://api.github.com/users/${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      githubUsers = data;
      // document.querySelector('img').src = data.avatar_url;
      // document.querySelector('.name').textContent = data.name;
      userDetails(data);
    });
  function userDetails(data) {
    let html = "";
    html =
      html +
      `
    <div class="octocat">
    <div>
    <img src='${data.avatar_url}' class="photo" />
    </div>
    <div>
      <h4 class="name">${data.name}</h4>
      <p class="oct">octocat</p>
      <p class="profile">This profile has no bio</p>
    </div>
    <p class="date">Joined ${data.created_at}</p>
  </div>
  <div class="repos">
    <div class="eight">
      <span>Repos</span>
      <h1>${data.public_repos}</h1>
    </div>
    <div class="eight">
      <span>Followers</span>
      <h1>${data.followers}</h1>
    </div>
    <div class="eight">
      <span>Following</span>
      <h1>${data.following}</h1>
    </div>
  </div>
  <div class="footer">
    <div class="foot">
      <h4>${data.location}</h4>
      <h4>${data.blog}</h4>
    </div>
    <div class="foot">
      <h4>${data.twitter_username}</h4>
      <h4>${data.company}</h4>
    </div>
  </div>

    `;
    octocatContainer.innerHTML = html;
  }
}
function sudip() {
  searchUser();
}

searchUser();
darkModeToggle.addEventListener("click", myFunction);
button.addEventListener("click", sudip);
