window.onload = sendApiRequest;


drawBtn = document.getElementById("button");

let draw_url = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1"

async function sendApiRequest(){
    let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    data = await response.json();
    console.log(data);

    let deck_id = data.deck_id;
    console.log(deck_id);

    
    let draw_url02 = draw_url.replace("<<deck_id>>", deck_id);


    let draw_response = await fetch(draw_url02);
    draw_data = await draw_response.json();
    console.log(draw_data);


    let remaining = data.remaining;
    console.log(remaining);

  drawBtn()
}

