document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "UVM Harness",
            date: "January 19, 2025",
            summary: "Harness why and its uses",
            link: "/blog/posts/uvm_harness.html"
        },
        {
            title: "Vertical Reuse",
            date: "January 18, 2025",
            summary: "Learn about the tools and technologies I used to create my portfolio website.",
            link: "/blog/posts/vertical_reuse.html"
        },
        {
            title: "System Verilog Scheduling",
            date: "January 30, 2025",
            summary: "how scheduling works in systemverilog",
            link: "/blog/posts/sv_scheduling.html"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.summary}</p>
            <a href="${post.link}">Read more</a>
        `;

        blogPostsContainer.appendChild(postElement);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".code-container").forEach(container => {
        const copyBtn = container.querySelector(".copy-btn");
        const codeBlock = container.querySelector("pre code");

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                copyBtn.innerText = "Copied!";
                setTimeout(() => {
                    copyBtn.innerText = "Copy";
                }, 1500);
            });
        });
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

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    }

    // Show Full Post on Click
    document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelectorAll('.full-post').forEach(post => post.style.display = 'none');
        document.querySelector(targetId).style.display = 'block';
    });
    });

    // Back to Blog
    document.querySelectorAll('.back-to-blog').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.full-post').forEach(post => post.style.display = 'none');
    });
});

