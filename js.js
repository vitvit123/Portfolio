const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const hiddenTopElements = document.querySelectorAll('.hidden_Top');
hiddenTopElements.forEach(element => {
    observer.observe(element);
  });

const hiddenRightElements = document.querySelectorAll('.hidden_right');
hiddenRightElements.forEach(element => {
    observer.observe(element);
  });
  const hiddenBottomElements = document.querySelectorAll('.hidden_bottom');
  hiddenBottomElements.forEach(element => {
    observer.observe(element);
  });
  const hiddenPopUPElements = document.querySelectorAll('.hidden_PopUp');
  hiddenPopUPElements.forEach(element => {
    observer.observe(element);
  });


      function openTelegram() {
    window.open('https://t.me/HengDevit');
  }
  $(document).ready(function() {
    $("a.nav-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
  });


document.getElementById("downloadButton").addEventListener("click", function() {
  this.classList.add("gradient-border"); 
});

    });



  const projects = [
    {
      title: "School Management",
      description: "School management systems streamline administrative tasks, enhance communication between stakeholders, and improve overall efficiency in educational institutions.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/SchoolManagementJAVA.git"
    },
    {
      title: "Timer",
      description: "We develop timer apps to help users manage their time effectively, boost productivity, and stay focused on tasks by providing customizable timing solutions for various activities.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/Timer.git"
    },
    {
      title: "Acleda Cantent",
      description: "We create the ACLEDA Content System to deliver relevant and up-to-date information to users, fostering financial literacy, and enhancing customer engagement through informative content tailored to their needs.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/Acleda-Cantent.git"
    },
    {
      title: "Coffee Shop",
      description: "We create coffee shop management systems to streamline operations, improve customer service, and boost efficiency, ensuring a delightful experience for both owners and patrons.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/monykappa/CafeShop.git"
    },
    {
      title: "Calculator",
      description: "We design calculators to provide quick and accurate solutions for various mathematical calculations, simplifying tasks and improving efficiency in both professional and everyday settings.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/Calculator.git"
    },
    {
      title: "Weather API",
      description: "I create this weather application to provide real-time weather updates and forecasts, helping users plan their activities and stay informed about current weather conditions.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/WeatherAPI.git"
    },
    {
      title: "ACLEDA APP UI",
      description: "The ACLEDA app UI is designed to offer users a seamless, secure, and personalized banking experience. Its layout prioritizes easy navigation and accessibility to essential banking features.",
      imageUrl: "IMG/wood-mulch-bkdmb5-64_600.jpg",
      githubLink: "https://github.com/vitvit123/SchoolManagementJAVA.git"
    },
    
  ];

  function createProjectCard(project) {
    return `
      <div class="col-lg-4 mb-4 hidden_PopUp show">
        <div class="card bg-dark text-white shadow" style="background-color: #171717 !important;">
        <img style="height: 100%;" src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
            <h2 class="card-title">${project.title}</h2>
            <p class="card-text">${project.description}</p>
          </div> 
          <div class="card-footer bg-transparent border-top-0 d-flex justify-content-center">
            <a href="${project.githubLink}" class="btn btn-primary" target="_blank">
              <i class="fab fa-github mr-2"></i>View on GitHub
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Function to render project cards
  function renderProjectCards() {
    const projectCardsContainer = document.getElementById("projectCards");
    projectCardsContainer.innerHTML = ""; 
    projects.forEach(project => {
      const projectCardHtml = createProjectCard(project);
      projectCardsContainer.innerHTML += projectCardHtml;
    });
  }

  renderProjectCards();


var scrollToTopBtn = document.getElementById("scrollToTopBtn");




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  
});
