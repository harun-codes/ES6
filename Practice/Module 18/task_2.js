
const buildProfileCard = (user) => {

    return `${user.name} ${user.title} at ${user.company}`

}

const user = {
    name: 'Arif',
    title: "Developer",
    company: "Programming Hero"

}

console.log(buildProfileCard(user))