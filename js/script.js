document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts');
    const posts = ['post1.md', 'post2.md'];

    posts.forEach(post => {
        fetch(`posts/${post}`)
            .then(response => response.text())
            .then(data => {
                const postTitle = data.split('\n')[0].replace('# ', '');
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h2><a href="post.html?post=${post}">${postTitle}</a></h2>`;
                postsContainer.appendChild(postElement);
            });
    });
});
