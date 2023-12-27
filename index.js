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

const mainEl = document.querySelector('main')

function createPostProfileEl(name, location, avatar) {
    const postProfileEl = document.createElement('div')
    postProfileEl.classList.add('post-profile')
    postProfileEl.innerHTML = `
        <img class="profile" src="${avatar}" alt="profile picture">
        <div>
            <h2>${name}</h2>
            <p>${location}</p>
        </div>
    `
    return postProfileEl
}

function createPostEl(src) {
    const imgEl = document.createElement('img')
    imgEl.classList.add('post-image')
    imgEl.setAttribute('src', src)
    imgEl.classList.add('post-img')
    return imgEl
}

function createIconsEl(likes, id) {
    const iconContainerEl = document.createElement('div')
    iconContainerEl.classList.add('icon-container')

    const heartIconEl = document.createElement('img')
    heartIconEl.classList.add('icon')
    heartIconEl.setAttribute('src', 'images/icon-heart.png')
    heartIconEl.addEventListener('click', () => {
        const likeEl = document.querySelectorAll('[data-id]')
        likeEl.forEach(like => {
            if (like.dataset.id === id) {
                posts.forEach(post => {
                    if (post.username === id) {
                        post.likes += 1
                    }
                })
                renderPosts()
            }
        })
    })

    const commentIconEl = document.createElement('img')
    commentIconEl.classList.add('icon')
    commentIconEl.setAttribute('src', 'images/icon-comment.png')

    const dmIconEl = document.createElement('img')
    dmIconEl.classList.add('icon')
    dmIconEl.setAttribute('src', 'images/icon-dm.png')

    iconContainerEl.appendChild(heartIconEl)
    iconContainerEl.appendChild(commentIconEl)
    iconContainerEl.appendChild(dmIconEl)
    return iconContainerEl
}

function createLikeEl(count, id) {
    const likeEl = document.createElement('span')
    likeEl.classList.add('font-bold')
    likeEl.textContent = `${count} likes`
    likeEl.dataset.id = id
    return likeEl
}

function createCommentEl(name, comment) {
    const commentEl = document.createElement('p')
    const commenterEl = document.createElement('span')
    commenterEl.classList.add('font-bold')
    commenterEl.textContent = name
    commentEl.appendChild(commenterEl)
    commentEl.innerHTML += comment
    return commentEl
}

function createPostBodyEl(likes, name, comment, id) {
    const postBodyEl = document.createElement('div')
    postBodyEl.classList.add('post-body')
    const likeEl = createLikeEl(likes, id)
    const iconsEl = createIconsEl(likes, id)
    const commentEl = createCommentEl(name, comment)

    postBodyEl.appendChild(iconsEl)
    postBodyEl.appendChild(likeEl)
    postBodyEl.appendChild(commentEl)

    return postBodyEl
}

function createArticleEl(name,location,avatar,post,comment,likes, username) {
    const articleEl = document.createElement('article')
    articleEl.classList.add('post-container')

    const postProfile = createPostProfileEl(name, location, avatar)
    const postImg = createPostEl(post)
    const postBody = createPostBodyEl(likes, name, comment, username)

    articleEl.appendChild(postProfile)
    articleEl.appendChild(postImg)
    articleEl.appendChild(postBody)

    return articleEl
}

function renderPosts () {
    mainEl.innerHTML = ""
    posts.forEach(post => {
        const article = createArticleEl(post.name, post.location, post.avatar, post.post, post.comment, post.likes, post.username)
        mainEl.appendChild(article)
    })
}

renderPosts()
