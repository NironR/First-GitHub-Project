
const userListEl = document.querySelector(" .user-list")

async function main() {
    const users = await fetch ("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json()
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("")

}

main()

function showUserPosts(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/My%20Websites/My%20Websites/Random/user-posts-starter-20220602T234452Z-001/user-posts-starter/user.html`
}

function userHTML(user) {
 return `<div class="user-card" onclick ="showUserPosts(${user.id})">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>
    </div>
  </div>`
}