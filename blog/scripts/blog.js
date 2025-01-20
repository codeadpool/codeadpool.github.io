document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "Introduction to My Blog",
            date: "January 19, 2025",
            summary: "This is the first post on my blog, where I share updates about my projects and insights.",
            link: "posts/post1.html"
        },
        {
            title: "How I Built My Website",
            date: "January 18, 2025",
            summary: "Learn about the tools and technologies I used to create my portfolio website.",
            link: "#"
        },
        {
            title: "Exploring CSS Tricks",
            date: "January 17, 2025",
            summary: "A collection of my favorite CSS techniques to create visually stunning websites.",
            link: "#"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-card');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.summary}</p>
            <a href="${post.link}">Read more</a>
        `;

        blogPostsContainer.appendChild(postElement);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
});

