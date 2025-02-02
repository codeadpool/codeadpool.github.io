document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: "Vertical Reuse",
            date: "January 18, 2025",
            summary: "how vertical reuse simplifies the verifcaiton stuff in the top level by making small changes in the low-block-level verificaiton",
            link: "/blog/posts/vertical_reuse.html",
        },
        {
            title: "UVM Harness",
            date: "January 19, 2025",
            summary: "Harness why and its uses",
            link: "/blog/posts/uvm_harness.html",
        },
        {
            title: "System Verilog Scheduling",
            date: "January 30, 2025",
            summary: "what statements in rtl execute in which part of the time slot, trust me there are 17 so...yeah",
            link: "/blog/posts/sv_scheduling.html",
        },
        {
            title: "CIFV parameters in uvm_config_db",
            date: "February 01, 2025",
            summary: "what are these parameters and what values can have and what do they mean if we use them",
            link: "/blog/posts/CIFV_uvm.html",

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
        `;

        postElement.addEventListener('click', () => {
            window.location.href = post.link;  // Navigate to the full post page
        });

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

  
// document.querySelectorAll(".copy-btn").forEach((button) => {
//     button.addEventListener("click", () => {
//       const codeBlock = button.parentElement.querySelector("pre");
//       navigator.clipboard.writeText(codeBlock.innerText).then(() => {
//         button.classList.add("copied");
//         setTimeout(() => button.classList.remove("copied"), 2000);
//       });
//     });
//   });
  
//   // Expand Large Code Blocks
//   document.querySelectorAll(".show-more").forEach((button) => {
//     button.addEventListener("click", () => {
//       const codeBlock = button.previousElementSibling;
//       codeBlock.style.maxHeight = "none";
//       button.style.display = "none";
//     });
//   });

document.querySelectorAll(".code-container pre code").forEach((block) => {
    let lines = block.textContent.split("\n");

    // Remove empty first & last lines
    while (lines.length > 0 && lines[0].trim() === "") lines.shift();
    while (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();

    // Detect the minimum indentation (excluding empty lines)
    let minIndent = Math.min(...lines.filter(line => line.trim() !== "").map(line => line.match(/^(\s*)/)[0].length));

    // Remove that indentation from all lines
    block.textContent = lines.map(line => line.slice(minIndent)).join("\n");
});
