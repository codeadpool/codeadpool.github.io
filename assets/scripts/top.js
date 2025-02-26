document.addEventListener('DOMContentLoaded', () => {
    const projectList = [
        {
            title: "UVM-Based Verification of Asynchronous FIFO",
            tools: "UVM, VCS, SV",
            summary: "Verified an asynchronous FIFO with independent read/write interfaces and clock domain crossing.",
            link: "/projects/list/afifo.html",
        },
        {
            title: "UVM-Based Verification of a SRAM Memory array",
            tools: "UVM, VCS, SV",
            summary: "UVM/SV testbench for SRAM using CRV, directed tests for corner cases, SVAs for protocol checking, factory overrides for test specifics.",
            link: "/projects/list/sram.html",
        }
    ];

    const projectListContainer = document.getElementById('project-list');
    projectList.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.tools}</p>
            <p>${project.summary}</p>
        `;

        projectElement.addEventListener('click', () => {
            window.location.href = project.link;  // Navigate to the full post page
        });

        projectListContainer.appendChild(projectElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get clean current path
  const currentPath = window.location.pathname
      .replace(/\/index\.html$/, '') // Remove index.html
      .replace(/.html$/, '') // Remove .html extension
      .replace(/\/$/, '') // Remove trailing slash
      .toLowerCase();

  // Select all navigation links
  const navLinks = document.querySelectorAll('.sidebar a, .sub-sidebar a');

  navLinks.forEach(link => {
      // Get clean link path
      const linkUrl = new URL(link.href, window.location.origin);
      let linkPath = linkUrl.pathname
          .replace(/\/index\.html$/, '')
          .replace(/.html$/, '') // Remove .html extension
          .replace(/\/$/, '')
          .toLowerCase();

      // Special mapping for section indexes
      const sectionMap = {
          'blog': 'blog/posts',      // Maps blog.html to blog/posts
          'projects': 'projects/list' // Maps projects.html to projects/list
      };

      // Convert main section links to their directory paths
      if (sectionMap[linkPath]) {
          linkPath = sectionMap[linkPath];
      }

      // Check active state
      const isActive = currentPath === linkPath || 
                      currentPath.startsWith(linkPath + '/');

      // Set initial active state
      if (isActive) {
          link.classList.add('active');
      }

      // Click handler
      link.addEventListener('click', function(e) {
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
      });
  });
});