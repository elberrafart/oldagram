const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const vanGoghAvatarURL = posts[0].avatar;
const avatarImage = document.getElementById("van-gho");
avatarImage.src = vanGoghAvatarURL;

const vanGoghPostURL = posts[0].post;
const postImage = document.getElementById("van-gogh-post")
postImage.src = vanGoghPostURL

const vanGoghUsernameURL = posts[0].username
const vanGoghUsername = document.getElementById("vanGoghUN")
vanGoghUsername.innerText = vanGoghUsernameURL

const gusAvatarURL = posts[1].avatar;
const gusAvatarImage = document.getElementById("gus-img");
gusAvatarImage.src = gusAvatarURL;

const gusAvatarPostURL = posts[1].post;
const gusPostImage = document.getElementById("gus-post");
gusPostImage.src = gusAvatarPostURL;

const gusUsernameURL = posts[1].username
const gusUsername = document.getElementById("gusUN")
gusUsername.innerText = gusUsernameURL