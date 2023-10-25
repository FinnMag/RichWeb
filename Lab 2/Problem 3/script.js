document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const search = document.getElementById("searchButton");
    const userInfo = document.getElementById("userInfo");
    const repoList = document.getElementById("repoList");

    //Button Listener to search for profile
    search.addEventListener("click", () => {
        if (username.value.trim() == "") {
            alert("Must enter a username")
            return;
        }

        const gitUsername = username.value.trim();

        fetchProfile(gitUsername)
    })
})

function fetchProfile(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            return response.json();
        })

        .then((userDetails) => {
            userInfo.innerHTML = `
            <img src = "${userDetails.avatar_url}" id = "image" width = "90%" height = "90%">
            <p>Name: ${userDetails.name || "Not available"} </p>
            <p>Username: ${userDetails.login}</p>
            <p>Email: ${userDetails.email || "Not available"} </p>
            <p>Location: ${userDetails.location || "Not available"} </p>
            <p>Number of Gists: ${userDetails.public_gists}</p>`;
        })

    fetchRepos(username)
}

function fetchRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((repos) => {

            if (repos.length > 5) {
                repoList.style.maxHeight = "500px";
                repoList.style.overflowY = "auto";
            }

            repos.forEach((repo) => {
                repoList.innerHTML += `
                <p>Name: ${repo.name}</p>
                <p>Description: ${repo.description || "No description available"}</p>
                <hr>
            `;
            });

        })
}