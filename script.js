const linksSocialMedia = {
  github: "paulinhorox",
  instagram: "pauliinhorox",
  youtube: "user-tv2zw3yp8x",
  facebook: "pauliinhorox",
  twitter: "paulinho.rox",
};
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url).then(response => {
    response.json()
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
  })
  
}

getGitHubProfileInfos()