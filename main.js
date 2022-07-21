const drawBtn = document.getElementById('button');
const placeholder01 = document.getElementById("placeholder01");
const placeholder02 = document.getElementById("placeholder02");

drawBtn.addEventListener('click', sendApiRequest);

let draw_url = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1"

async function sendApiRequest(){
    let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    data = await response.json();
    

    let deck_id = data.deck_id;
    
    let draw_url02 = draw_url.replace("<<deck_id>>", deck_id);


    let draw_response = await fetch(draw_url02);
    draw_data = await draw_response.json();
    

    card_url = draw_data.cards[0].image;
    list.push(card_url);
  

    const image = new Image();
    image.src = card_url;

    if (placeholder01.className === "empty"){
      document.getElementById("placeholder01").appendChild(image);
      placeholder01.classList.remove("empty");
      placeholder01.classList.toggle("nonEmpty");
    
    }
    else if (placeholder01.className === "nonEmpty") {
      placeholder02.appendChild(image);
      placeholder01.classList.remove("nonEmpty");
      placeholder01.classList.toggle("empty");
      

    }
    
  
}

