

//CIRCLE Effect 

document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.gradient-circle');
    const colors = ['#7089bc', '#c67c78', '#ad689b', '#9d5cb1', '#4e6674', '#364750', '#e67e22', '#95a5a6', '##9484e4', '#34495e', '#6f89bb', '##adcdcd'];
    const colorCount = colors.length;

    let animationStarted = false;
    let scrollTimeout;


    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

 // Start the floating animation when the circle comes into view

 if (!animationStarted) {
    // Start the floating animation when the circle comes into view
    if (scrollPosition > circle.offsetTop - window.innerHeight && scrollPosition < circle.offsetTop + circle.offsetHeight) {
      circle.style.animationPlayState = 'running';
      animationStarted = true;
    }
  }

      // Change colors based on scroll position
      const index = Math.floor(scrollPosition / (window.innerHeight / colorCount)) % colorCount;
      const color1 = colors[index];
      const color2 = colors[(index + 1) % colorCount];
      const color3 = colors[(index + 2) % colorCount];

      // Apply the new colors
      circle.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
      // Apply the floating animation
      circle.style.transform = `translateY(${scrollPosition / 3}px)`; // Adjust the division factor for the desired float speed

// Clear any previous timeout
clearTimeout(scrollTimeout);

// Set a timeout to check if scrolling has stopped after 100 milliseconds
scrollTimeout = setTimeout(() => {
  // If no scroll events occur within 200 milliseconds, pause the animation
  circle.style.animationPlayState = 'paused';
  animationStarted = false;
}, 100);


    });
  });



  //Adding background gradient

  document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.gradient-bg');
    const colors2 = ['#7089bc', '#c67c78', '#ad689b', '#9d5cb1', '#4e6674', '#364750', '##9484e4', '#34495e', '#6f89bb', '##adcdcd', '#986432', '#95a5a6',];
    const colorCount2 = colors2.length;

    window.addEventListener('scroll', function () {
      const scrollPosition2 = window.scrollY;

      // Change colors based on scroll position
      const index2 = Math.floor(scrollPosition2 / (window.innerHeight / colorCount2)) % colorCount2;
      const color1 = colors2[index2];
      const color2 = colors2[(index2 + 1) % colorCount2];
      const color3 = colors2[(index2 + 2) % colorCount2];

      // Apply the new colors
      intro.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
      
    });
  });