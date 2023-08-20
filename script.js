// Get HTML DOM Elements
const QuestionBtn = document.querySelectorAll('.question-btn');

// Add Event Listeners
QuestionBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      const question = event.currentTarget.parentElement.parentElement;
      question.classList.toggle('show-text');
    });
  }
);