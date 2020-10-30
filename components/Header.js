// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement ('span');

    div.className = "header";
    span.className = "date";
    span2.className = 'temp';

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    span.textContent = 'MARCH 28, 2020'
    h1.textContent = "lambda Times"
    span2.textContent = '98°'

    return div;

}

const headerDiv = document.querySelector('div.header-container')
headerDiv.appendChild(Header())