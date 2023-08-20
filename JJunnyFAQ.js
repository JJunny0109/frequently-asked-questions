// Get HTML DOM Elements (JJunnyFAQ)
const JJunnyFAQ = document.querySelector('.JJunnyFAQ');

// function to create a new element
function createFAQ(numberOfFAQs) {
  for (let i = 0; i < numberOfFAQs; i++) {
    const detailsEl = document.createElement("details");

    // <summar> 요소를 생성하고 텍스트 내용을 설정합니다.
    const summaryEl = document.createElement("summary");
    summaryEl.textContent = "FAQ " + (i + 1);

    // <p> 요소를 생성하고 텍스트 내용을 설정합니다.
    const pEl = document.createElement("p");
    pEl.textContent = i + 1;
    
    // <details> 요소에 자식 요소들을 추가합니다.
    detailsEl.appendChild(summaryEl);
    detailsEl.appendChild(pEl);
    
    // 부모 요소에 <details> 요소를 추가합니다.
    JJunnyFAQ.appendChild(detailsEl);
  }
}

// function call
createFAQ(5);