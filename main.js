const APIURL = "https://api.github.com/users/";

const getUserDetails = async (username) => {
  try {
    const response = await fetch(APIURL + username);
    const data = await response.json();

    const main = document.getElementById("main");
    const createUserCard = `
    <div class="card md-12" style="max-width: 600px">
      <div class="col-md-4">
        <img
          src="${data.avatar_url}"
          class="img-fluid rounded-start"
          alt="User Avatar">
          </div>
        <div class="col-md-6">
            <h2 class="card-title">${data.name}</h2>
            <p class="card-text">${data.bio || "No bio available"}</p>
            <ul>
              <li>Followers: ${data.followers}</li>
              <li>Following: ${data.following}</li>
              <li>Repos: ${data.public_repos}</li>
            </ul>
            <ul>
            <li>Twitter: ${data.twitter_username}</li>
            <li>Location: ${data.location || "Not available"}</li>
          </ul>
            <p class="card-text">
              <small class="text-muted">Last updated: ${data.updated_at}</small>
            </p>
          </div>
    </div>
  </div>`;
    main.innerHTML = createUserCard;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

const formSubmit = (event) => {
  event.preventDefault();
  const searchBox = document.querySelector("#search");
  if (searchBox.value.trim() !== "") {
    getUserDetails(searchBox.value);
  }
};

document.getElementById("form").addEventListener("submit", formSubmit);
