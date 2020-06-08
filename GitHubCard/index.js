/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const khwanchaiGit = document.querySelector('.cards')
function khwanchaiCard(gitId){
  const firstDivCard = document.createElement('div')
  firstDivCard.classList.add('card')

  const imageCard = document.createElement('img')
  firstDivCard.appendChild(imageCard)

  const seConddiv = document.createElement('div')
  seConddiv.classList.add('card-info')

  const seCondH3 = document.createElement('h3')
  seCondH3.classList.add('name')
  const seCondA = document.createElement('a')

  const seCondP1 = document.createElement('p')
  seCondP1.classList.add('username')

  const seCondP2 = document.createElement('p')
  const seCondP3 = document.createElement('p')
  const seCondP4 = document.createElement('p')
  const seCondP5 = document.createElement('p')
  const seCondP6 = document.createElement('p')
 
    
  firstDivCard.appendChild(seConddiv)
  seConddiv.appendChild(seCondH3)
  seConddiv.appendChild(seCondP1)
  seConddiv.appendChild(seCondP2)
  seConddiv.appendChild(seCondP3)
  seCondP3.appendChild(seCondA)
  seConddiv.appendChild(seCondP4)
  seConddiv.appendChild(seCondP5)
  seConddiv.appendChild(seCondP6) 

  imageCard.src = gitId.avatar_url
  seCondH3.textContent = gitId.login
  seCondP1.textContent = gitId.name
  seCondP2.textContent = `Location: ${gitId.location}`
  seCondP3.textContent = `Profile: ` + gitId.html_url
  seCondA.href = gitId.html_url
  seCondA.textContent = `${gitId.html_url}`
  seCondP4.textContent = `Followers: ${gitId.followers}`
  seCondP5.textContent = `Following: ${gitId.following}`
  seCondP6.textContent = `Bio: ${gitId.bio}`

  return firstDivCard
}
axios.get('https://api.github.com/users/khwanchaiwill')

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
.then( (response) =>{
  console.log('This is the good path keep going', response.data)
    
    khwanchaiGit.appendChild(khwanchaiCard(response.data))
  
})
.catch((error) => {
  console.log('This is make me headache error',error)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "javavick-Lambda",
  "mrsimpson3000",
  "rabithole",
  "rmurdoc90",
  "NicoleYOsborn"
];

function getFollowers(followers){
axios.get(`https://api.github.com/users/${followers}`)
.then( res => {
console.log('We will see the data here', res.data)
  const followCard = khwanchaiCard(res)
  khwanchaiGit.appendChild(followCard)
})
.catch(err =>{
console.log('hold on this is not right', err)
})
}
  followersArray.forEach((item) =>{
  getFollowers(item);

})
// followersArray.forEach((item) => {
//   const firstDivCard = getFollowers(item)
//   khwanchaiGit.prepend(khwanchaiCard(firstDivCard))
// })

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
