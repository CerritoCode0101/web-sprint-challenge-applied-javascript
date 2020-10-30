// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector("div.cards-container");

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((response) => {
    let articleCard = response.data.articles;
    console.log(articleCard);

    Object.entries(articleCard).forEach((articleloop) => {
      console.log(articleloop[1]);
      articleloop[1].forEach((article) =>
        cardContainer.appendChild(cardMaker(article))
      );
    });
  }).catch((err) => {
    console.log(err);
  });





function cardMaker(obj){
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    div.className = "card";
    div2.className = "headline";
    div3.className = "author";
    div4.className = "img-container";

    div.append(div2, div3);
    div3.append(div4, span);
    div4.appendChild(img);

    div2.textContent = obj.headline;
    div3.textContent = obj.authorName;
    img.src = obj.authorPhoto;

    div2.addEventListener('click',function(){
        console.log(div2.textContent)
    } )

    return div

}