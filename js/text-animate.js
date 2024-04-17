function animateText() {
    const textElement = document.querySelector('.text-animate');
    const newTexts = [
      {
        text: 'Graphic Designer',
        styles: {
          backgroundImage: 'linear-gradient(45deg, #92FE9D, #65EDFF)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      },
      {
        text: 'UI Designer',
        styles: {
          backgroundImage: 'linear-gradient(45deg, #f2709c, #ff9472)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      },
      {
        text: 'Web Developer',
        styles: {
          backgroundImage: 'linear-gradient(60deg, #BB99ED, #5773ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      }
    ];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentTextObj = newTexts[currentTextIndex];
      const currentText = currentTextObj.text;
      const currentStyles = currentTextObj.styles;
      
      if (isDeleting) {
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
      } else {
        textElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
      }
  
      if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Wait before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % newTexts.length;
        setTimeout(type, 500); // Wait before typing new text
      } else {
        const typingSpeed = isDeleting ? 50 : 150;
        setTimeout(type, typingSpeed);
      }
  
      // Apply styles to the text element
      Object.assign(textElement.style, currentStyles);
    }
  
    // Start the animation
    type();
  }
  
  // Call the function to animate the text
  animateText();
  