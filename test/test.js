const cards = [
    "TheFool",    "TheMagician",    "TheHighPriestess",
    "TheEmpress",    "TheEmperor",    "TheHierophant",
    "TheLovers",    "TheChariot",    "Strength",
    "TheHermit",    "Wheel_of_Fortune",    "Justice",    
    "The_Hanged_Man",    "Death",    "Temperance",
    "TheDevil",    "TheTower",    "TheStar",    "TheSun",
    "TheMoon",    "Judgement",    "TheWorld"
  ];

  const cardMeanings = {
    TheFool: "New beginnings, innocence, spontaneity, a free spirit",
    TheMagician: "Manifestation, resourcefulness, power, inspired action",
    TheHighPriestess: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    TheEmpress: "Femininity, beauty, nature, nurturing, abundance",
    TheEmperor: "Authority, establishment, structure, a father figure",
    TheHierophant: "Spiritual wisdom, religious beliefs, conformity, tradition",
    TheLovers: "Love, harmony, relationships, values alignment, choices",
    TheChariot: "Control, willpower, success, determination",
    Strength: "Inner strength, bravery, compassion, focus",
    TheHermit: "Introspection, solitude, inner guidance",
    Wheel_of_Fortune: "Change, cycles, inevitable fate, turning point",
    Justice: "Justice, fairness, truth, cause and effect",
    The_Hanged_Man: "Surrender, letting go, new perspectives, enlightenment",
    Death: "Endings, beginnings, change, transformation",
    Temperance: "Balance, moderation, being sensible, healing",
    TheDevil: "Bondage, addiction, materialism, ignorance",
    TheTower: "Disaster, upheaval, sudden change, revelation",
    TheStar: "Hope, faith, purpose, renewal, spirituality",
    TheSun: "Positivity, success, warmth, vitality, achievement",
    TheMoon: "Mystery, the subconscious, intuition, emotions",
    Judgement: "Judgement, rebirth, inner calling, absolution",
    TheWorld: "Completion, accomplishment, travel, perfect unity"
  };
  // Get the number of cards to draw
  const numCards = cards.length;
  const CardsDraw = 3;
  // Create a function to randomly select cards
  
  function drawCards() {
    // Get a random number between 0 and the number of cards
    // random select 3 cards no duplicate
    const randomIndexes = [];
    while (randomIndexes.length < CardsDraw) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
      }

    // Get the card at the random index
    const card = [];
    for (const randomIndex of randomIndexes) {
        card.push(cards[randomIndex]);
    }
  
    // Display the card
    document.getElementById("cards").innerHTML = "";
    for (const c of card) {
      document.getElementById("cards").innerHTML += `
        <img src="pics/Arcana/${c}.jpeg" alt="${c}">
      `;
    }
    document.getElementById("cards").style.display = "flex";
    document.getElementById("draw-cards").disabled = true;

    const reading = generateReading(card);



    // Display the reading in the output box
    const output = document.getElementById("reading");
    output.innerHTML = "";
    output.innerHTML += `<p>${reading.meaning}</p>`;
    output.innerHTML += `<p>${reading.cardM}</p>`;


    output.style.display = "block";
  }
  

  // Add an event listener to the button
  document.getElementById("draw-cards").addEventListener("click", drawCards);




  document.getElementById("reset").addEventListener("click", () => {
    // Clear the cards
    document.getElementById("draw-cards").disabled = false;
    document.getElementById("cards").innerHTML = "";
    document.getElementById("reading").innerHTML = "";
  });

  function generateReading(card) {
    // const title = "Past, Present, Future Reading";
    const meaning = `Your past card is ${card[0]}, your present card is ${card[1]}, and your future card is ${card[2]}.`;
  
    const cardM = `${card[0]} means ${cardMeanings[card[0]]}, ${card[1]} means ${cardMeanings[card[1]]},${card[2]} means ${cardMeanings[card[2]]}`;
    
    return {cardM,meaning};



  }