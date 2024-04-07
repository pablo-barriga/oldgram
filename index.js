const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]
let sectionContainer = document.getElementById("section-container")
for(let i = 0; i < posts.length; i++){

    let divContainer = document.createElement("div")
    divContainer.className = "container"
    let divPost = document.createElement("div")
    divPost.className = "post"
    let divPostHeader = document.createElement("div")
    divPostHeader.className = "post-header"


    let profilePic = document.createElement("img")
    profilePic.className = "profile-pic"
    profilePic.src = `${posts[i].avatar}`
    profilePic.alt = `profile pic of ${posts[i].name}`
    divPostHeader.append(profilePic)

    let postMeta = document.createElement("div")
    postMeta.className = "post-metadata"
    let name = document.createElement("p")
    name.className = "name"
    name.textContent = `${posts[i].name}`
    postMeta.append(name)
    let location = document.createElement("p")
    location.className = "location"
    location.textContent = `${posts[i].location}`
    postMeta.append(location)

    divPostHeader.append(postMeta)
    divPost.append(divPostHeader)

    let image = document.createElement("img")
    image.className = "selfie"
    image.src = `${posts[i].post}`
    image.alt = `selfie of ${posts[i].name}`
    divPost.append(image)
    let icons = document.createElement("div")
    icons.className = "icons"
    addIcons(icons, i)
    divPost.append(icons)

    let likes = document.createElement("p")
    likes.className = "likes"
    likes.textContent = `${posts[i].likes} likes`
    divPost.append(likes)
    let comment = document.createElement("p")
    comment.className = "comment"
    comment.innerHTML += `<span class = 'username'>${posts[i].username}</span> ${posts[i].comment}`
  
    divPost.append(comment)

    divContainer.append(divPost)
    sectionContainer.append(divContainer)
    

}


function addIcons(icons){
    let iconsArr = []
    for(let i  = 0; i < 3; i++){
        const icon = document.createElement("img")
        icon.className = "icon"
        icons.append(icon)
        iconsArr.push(icon)
        
    }
    iconsArr[0].src = "images/icon-heart.png"
    iconsArr[0].addEventListener("click", function(event){
        let postContainer = event.target.closest('.container');
        if (!postContainer) return; // Ensure we found a post container
    
        // Find the index of the post within your posts array
        let postIdx = Array.from(postContainer.parentNode.children).indexOf(postContainer);
        console.log(postContainer)
        console.log(postContainer.parentNode.children)
        let likesClass = postContainer.querySelector(".likes")
        likes(likesClass, postIdx)
  
    })
    iconsArr[1].src = "images/icon-comment.png"
    iconsArr[2].src = "images/icon-dm.png"

}

function likes(likesClass, postIdx){
    if(posts[postIdx].liked){
        posts[postIdx].liked = false
        posts[postIdx].likes--
        likesClass.textContent = `${posts[postIdx].likes} likes`
    }else{
        posts[postIdx].liked = true
        posts[postIdx].likes++
        likesClass.textContent = `${posts[postIdx].likes} likes`
        
    }
}