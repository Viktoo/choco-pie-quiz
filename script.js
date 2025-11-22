// Character data with full descriptions
const characterData = {
    "Orion": {
        name: "ORION CHOCO PIE",
        strengths: [
            "Been there, done that, got the wrapper to prove it",
            "Commands respect without even trying, natural authority vibes",
            "Knows every shortcut and life hack from decades of experience"
        ],
        weaknesses: [
            "\"Back in my day\" every conversation gets old fast",
            "Refuses to adapt to new trends or methods",
            "Gets nostalgic about literally everything, even bad things"
        ],
        catchphrases: [
            "\"I was doing this before it was cool\"",
            "\"Kids these days don't know what REAL choco pie culture is\""
        ],
        alignment: "Lawful 70%, Neutral 25%, Chaotic 5% / Good 60%, Neutral 35%, Evil 5%",
        hiddenTalent: "Can identify the exact year and batch of any choco pie by taste alone, terrifyingly accurate",
        peerReviews: [
            "\"Orion literally invented half the moves we use today but won't stop reminding us\" - Lotte Choco Pie",
            "\"I asked for advice and got a 40-minute story about 1974. Worth it though?\" - Dream Cake",
            "\"The only one who remembers my birthday without Facebook reminders\" - Gansito"
        ]
    },
    "Lotte": {
        name: "LOTTE CHOCO PIE",
        strengths: [
            "Works twice as hard to prove themselves constantly",
            "Actually really talented but never gets credit for it",
            "Loyal to a fault, always shows up when needed"
        ],
        weaknesses: [
            "Crippling imposter syndrome despite being genuinely good",
            "Compares themselves to Orion literally every single day",
            "Overcompensates with try-hard energy that backfires"
        ],
        catchphrases: [
            "\"I'm just as good! Right? ...Right?\"",
            "\"No yeah I'm fine! Totally fine! Why wouldn't I be fine??\""
        ],
        alignment: "Lawful 40%, Neutral 50%, Chaotic 10% / Good 80%, Neutral 15%, Evil 5%",
        hiddenTalent: "Secretly the best at creative problem-solving under pressure but never takes credit for it",
        peerReviews: [
            "\"Lotte needs to chill and realize they're actually amazing\" - Smores",
            "\"Always trying to one-up me, it's exhausting but also kinda sad\" - Orion Choco Pie",
            "\"Bought me a gift 'just because' then apologized for it being weird??\" - Chocopie Cherry"
        ]
    },
    "Dream Cake": {
        name: "DREAM CAKE",
        strengths: [
            "Impeccable taste and aesthetic in literally everything",
            "Networked with everyone who matters, ultimate connector",
            "Makes the ordinary look extraordinary through sheer presentation"
        ],
        weaknesses: [
            "Cannot function without proper lighting and ambiance",
            "Spends rent money on aesthetic purchases regularly",
            "Judges people based on their Instagram grid layout"
        ],
        catchphrases: [
            "\"It's giving... not it\"",
            "\"Omg this would look SO good on my feed\""
        ],
        alignment: "Lawful 20%, Neutral 30%, Chaotic 50% / Good 40%, Neutral 55%, Evil 5%",
        hiddenTalent: "Can thrift literally anything and make it look like it costs thousands of dollars",
        peerReviews: [
            "\"Dream Cake took a photo of me and I literally didn't recognize myself (in a good way)\" - Moon Pie",
            "\"Showed up to a casual hangout in designer everything, made me feel underdressed in my own house\" - Smores",
            "\"Exhausting but necessary, like a very pretty alarm clock\" - Chocopie Vienna Cake"
        ]
    },
    "Smores": {
        name: "SMORES",
        strengths: [
            "Reliable as gravity, you can count on them always",
            "No drama, no fuss, just gets things done quietly",
            "Makes everyone feel comfortable and accepted around them"
        ],
        weaknesses: [
            "So plain that people literally forget they're there sometimes",
            "Never speaks up about their own needs or wants",
            "Settles for mediocre because \"it's fine I guess\""
        ],
        catchphrases: [
            "\"I'm fine with whatever you guys want\"",
            "\"Yeah I can do that\" (even when they definitely can't)"
        ],
        alignment: "Lawful 60%, Neutral 40%, Chaotic 0% / Good 95%, Neutral 5%, Evil 0%",
        hiddenTalent: "Can fix literally anything with duct tape, a paperclip, and sheer determination",
        peerReviews: [
            "\"Smores has been my emergency contact for 6 years and I trust them with my life\" - Gansito",
            "\"Boring? Yes. Would I be lost without them? Also yes\" - Dream Cake",
            "\"The only person who actually listens when I talk\" - Lotte Choco Pie"
        ]
    },
    "Moon Pie": {
        name: "MOON PIE",
        strengths: [
            "Unapologetically themselves, zero shame about anything ever",
            "Knows every diner, food truck, and buffet within 50 miles",
            "Surprisingly good at giving life advice between bites"
        ],
        weaknesses: [
            "\"One more won't hurt\" (Narrator: It did hurt)",
            "Cannot walk past a food establishment without entering",
            "Gets winded going up a single flight of stairs"
        ],
        catchphrases: [
            "\"You gonna finish that?\"",
            "\"It's bulking season year-round baby\""
        ],
        alignment: "Lawful 10%, Neutral 20%, Chaotic 70% / Good 70%, Neutral 25%, Evil 5%",
        hiddenTalent: "Competitive eater who holds three local records but never brags about it",
        peerReviews: [
            "\"Moon Pie ate my leftovers and then bought me dinner to make up for it\" - Mamut",
            "\"Simultaneously the most and least judgemental person I know\" - Dream Cake",
            "\"They're living their truth and I respect that honestly\" - Chocopie Cherry"
        ]
    },
    "Mamut": {
        name: "MAMUT",
        strengths: [
            "Will absolutely throw hands for their friends no questions asked",
            "Intimidating presence that solves problems before they start",
            "Survived things that would break most people, battle-tested"
        ],
        weaknesses: [
            "Solves everything with violence or threat of violence",
            "Terrible at expressing emotions that aren't anger",
            "Holds grudges from the literal Bronze Age"
        ],
        catchphrases: [
            "\"Say that again. I dare you\"",
            "\"I've fought worse\" (true but concerning)"
        ],
        alignment: "Lawful 30%, Neutral 20%, Chaotic 50% / Good 65%, Neutral 25%, Evil 10%",
        hiddenTalent: "Makes the most delicate and beautiful origami, refuses to explain this contradiction",
        peerReviews: [
            "\"Mamut punched a guy for me and I didn't even ask, legend behavior\" - Orion Choco Pie",
            "\"Scary on the outside, marshmallow on the inside, will deny this if confronted\" - Gansito",
            "\"Started a fight at my birthday party but like, in my defense\" - Chocopie Vienna Cake"
        ]
    },
    "Gansito": {
        name: "GANSITO",
        strengths: [
            "Radiates warmth and kindness like a portable sun",
            "Remembers small details about people that make them feel seen",
            "Can defuse any tense situation with gentle humor"
        ],
        weaknesses: [
            "Lets people walk all over them constantly",
            "Apologizes for things that aren't even their fault",
            "Cannot say no even when they absolutely should"
        ],
        catchphrases: [
            "\"No no it's okay! I don't mind!\"",
            "\"You look like you need a hug :)\""
        ],
        alignment: "Lawful 50%, Neutral 45%, Chaotic 5% / Good 98%, Neutral 2%, Evil 0%",
        hiddenTalent: "Bakes therapeutic cookies that somehow actually make people feel better about their problems",
        peerReviews: [
            "\"Gansito is too pure for this world and I'm scared someone's gonna ruin them\" - Smores",
            "\"Literally cried when I raised my voice, felt terrible for three weeks\" - Mamut",
            "\"The emotional support friend we all need but don't deserve\" - Lotte Choco Pie"
        ]
    },
    "Cherry": {
        name: "CHOCOPIE CHERRY",
        strengths: [
            "Always knows the tea before it even starts brewing",
            "Impeccable fashion sense that sets trends others follow",
            "Makes everything fun and exciting with their energy"
        ],
        weaknesses: [
            "Cannot keep a secret to save their life",
            "Spends 3 hours getting ready for a 15-minute errand",
            "Starts drama just because things were \"too boring\""
        ],
        catchphrases: [
            "\"Omg you didn't hear this from me but-\"",
            "\"Wait this outfit or THIS outfit??\""
        ],
        alignment: "Lawful 15%, Neutral 25%, Chaotic 60% / Good 50%, Neutral 40%, Evil 10%",
        hiddenTalent: "Can read people's intentions and red flags instantly, the human lie detector",
        peerReviews: [
            "\"Cherry told everyone about my crush and it actually worked out so like, thanks?\" - Dream Cake",
            "\"Changes outfits more than I change my mind\" - Chocopie Vienna Cake",
            "\"The gossip is annoying but also I NEED to know everything they know\" - Moon Pie"
        ]
    },
    "Vienna": {
        name: "CHOCOPIE VIENNA CAKE",
        strengths: [
            "Sophisticated taste and cultural knowledge that's actually impressive",
            "High standards that push others to improve themselves",
            "Honest to a fault, will tell you the truth you need"
        ],
        weaknesses: [
            "Looks down on literally everyone not from their hometown",
            "Pronunciation corrector at parties, universally hated for this",
            "\"In Europe we do it better\" every conversation"
        ],
        catchphrases: [
            "\"Well in Vienna we would NEVER-\"",
            "\"How quaint\" (derogatory)"
        ],
        alignment: "Lawful 80%, Neutral 15%, Chaotic 5% / Good 30%, Neutral 60%, Evil 10%",
        hiddenTalent: "Actually really good at code-switching and blending in when they want to, just chooses not to",
        peerReviews: [
            "\"Vienna corrected my pronunciation of croissant at Starbucks, I've never recovered\" - Smores",
            "\"Pretentious but their wine recommendations are genuinely perfect every time\" - Dream Cake",
            "\"Called my kitchen 'rustic' and I'm still not sure if it was an insult\" - Orion Choco Pie"
        ]
    }
};

// Game data structure
const gameData = {
    "1": {
        "text": "You're at the Annual Choco Pie Convention in Snackville! It's the biggest event of the year. What are you most excited about?",
        "choices": {
            "Meeting industry legends and learning from the originals": [2, ["Orion", "Vienna"]],
            "Networking and making connections with everyone": [2, ["Dream Cake", "Cherry"]],
            "The free snack buffet (obviously)": [2, ["Moon Pie", "Gansito"]],
            "Just happy to be here with friends": [2, ["Smores", "Lotte"]]
        }
    },
    "2": {
        "text": "During the keynote speech, someone in the audience shouts a rude comment at the speaker. What's your reaction?",
        "choices": {
            "Stand up and tell them to shut up": [3, ["Mamut", "Orion"]],
            "Whisper to friends about the drama": [3, ["Cherry", "Dream Cake"]],
            "Feel uncomfortable but stay quiet": [3, ["Gansito", "Smores"]],
            "Try to validate both perspectives": [3, ["Lotte", "Vienna"]]
        }
    },
    "3": {
        "text": "Suddenly, the convention center goes dark! A massive hand crashes through the ceiling and scoops everyone up!",
        "choices": {
            "Continue": [4, []]
        }
    },
    "4": {
        "text": "When you wake up, you're trapped in a human's kitchen pantry with your fellow choco pies! What's your first move?",
        "choices": {
            "Take charge and organize an escape plan": [5, ["Orion", "Mamut", "Vienna"]],
            "Look for the most aesthetic exit route": [5, ["Dream Cake", "Cherry"]],
            "Check if everyone is okay first": [5, ["Gansito", "Smores"]],
            "Panic a little but try to help": [5, ["Lotte", "Moon Pie"]]
        }
    },
    "5": {
        "text": "You spot three possible escape routes: a window, an air vent, and a small gap under the door. Which do you suggest?",
        "choices": {
            "The window - classic and proven method": [6, ["Orion", "Smores"]],
            "The air vent - adventurous and exciting": [7, ["Mamut", "Cherry"]],
            "The door gap - safest option": [8, ["Vienna", "Gansito"]],
            "Let's vote on it democratically": [9, ["Lotte", "Dream Cake"]]
        }
    },
    "6": {
        "text": "You choose the window route. It's stuck! How do you handle this setback?",
        "choices": {
            "\"In my day, windows actually opened properly\"": [10, ["Orion", "Vienna"]],
            "Try harder! Push with all your might": [10, ["Mamut", "Lotte"]],
            "Look for oil or something to loosen it": [10, ["Smores", "Gansito"]],
            "Take a snack break to think": [10, ["Moon Pie", "Dream Cake"]]
        }
    },
    "7": {
        "text": "The air vent is dark and spooky. As you crawl through, you hear strange noises.",
        "choices": {
            "Keep going, fear is for the weak": [10, ["Mamut", "Orion"]],
            "Make jokes to lighten the mood": [10, ["Cherry", "Moon Pie"]],
            "Stay close to friends for comfort": [10, ["Gansito", "Smores"]],
            "Document this for your story later": [10, ["Dream Cake", "Lotte"]]
        }
    },
    "8": {
        "text": "Squeezing under the door, you emerge into a fancy dining room with a dinner party happening!",
        "choices": {
            "Observe the proper etiquette and cross carefully": [10, ["Vienna", "Orion"]],
            "This is so aesthetic! What a vibe": [10, ["Dream Cake", "Cherry"]],
            "Apologize profusely as you scurry past": [10, ["Gansito", "Lotte"]],
            "Just blend in and act natural": [10, ["Smores", "Moon Pie"]]
        }
    },
    "9": {
        "text": "During the vote, two friends start arguing about which route is best. What do you do?",
        "choices": {
            "Side with whoever sounds more experienced": [10, ["Orion", "Vienna"]],
            "Try to mediate and find compromise": [10, ["Gansito", "Smores"]],
            "This drama is everything right now": [10, ["Cherry", "Dream Cake"]],
            "Suggest we just try all three": [10, ["Moon Pie", "Mamut"]]
        }
    },
    "10": {
        "text": "You've escaped the house! But now you're in an unfamiliar neighborhood. A friendly Croissant approaches offering help.",
        "choices": {
            "\"I don't trust them, something's off\"": [11, ["Mamut", "Vienna"]],
            "Accept help graciously and thank them": [11, ["Gansito", "Smores"]],
            "Accept but keep your guard up": [11, ["Orion", "Lotte"]],
            "\"Omg are they single?\"": [11, ["Cherry", "Dream Cake"]]
        }
    },
    "11": {
        "text": "The Croissant leads you to the mystical realm of Candy Kingdom! Everything is made of sweets. First impression?",
        "choices": {
            "Impressive architecture, but where I'm from we do it better": [12, ["Vienna", "Orion"]],
            "THIS IS SO INSTAGRAMMABLE": [12, ["Dream Cake", "Cherry"]],
            "Is it okay if we eat some of this?": [12, ["Moon Pie", "Gansito"]],
            "Practical question: how do we get home?": [12, ["Smores", "Lotte"]]
        }
    },
    "12": {
        "text": "A Sugar Crystal Guard stops you. \"State your business in Candy Kingdom!\" they demand.",
        "choices": {
            "\"We demand safe passage, we're lost travelers\"": [13, ["Orion", "Mamut"]],
            "Explain politely and apologize for intrusion": [13, ["Gansito", "Smores"]],
            "Compliment their uniform and try to charm them": [13, ["Dream Cake", "Cherry"]],
            "\"We're actually really important back home\"": [13, ["Lotte", "Vienna"]]
        }
    },
    "13": {
        "text": "The guard says you must entertain the Candy King to earn passage home. What's your talent?",
        "choices": {
            "Tell stories from the old days": [14, ["Orion", "Vienna"]],
            "Perform an elaborate dance number": [14, ["Cherry", "Dream Cake"]],
            "Make everyone laugh with humble self-deprecating humor": [14, ["Lotte", "Gansito"]],
            "Show off your impressive eating skills": [14, ["Moon Pie", "Mamut"]]
        }
    },
    "14": {
        "text": "The Candy King is amused! \"You may ask for one thing before you leave,\" he says.",
        "choices": {
            "Ask for wisdom and knowledge": [15, ["Orion", "Vienna"]],
            "Ask for supplies to help the whole group": [15, ["Gansito", "Smores"]],
            "Ask for something cool for the aesthetic": [15, ["Dream Cake", "Cherry"]],
            "Ask for snacks for the journey": [15, ["Moon Pie", "Lotte"]]
        }
    },
    "15": {
        "text": "On the journey home, your group is tired and morale is low. What do you do?",
        "choices": {
            "Give a motivational speech about the old days": [16, ["Orion", "Mamut"]],
            "Offer encouraging words and check on everyone": [16, ["Gansito", "Smores"]],
            "Turn it into a fun game or challenge": [16, ["Cherry", "Dream Cake"]],
            "\"Are we there yet? I need food\"": [16, ["Moon Pie", "Lotte"]]
        }
    },
    "16": {
        "text": "You finally see Snackville in the distance! One last obstacle: a rickety bridge over a chocolate river.",
        "choices": {
            "\"Back in my day, bridges were actually sturdy\"": [17, ["Orion", "Vienna"]],
            "Test it carefully and proceed methodically": [17, ["Smores", "Lotte"]],
            "YOLO let's run across!": [17, ["Mamut", "Cherry"]],
            "Make sure everyone crosses safely, go last": [17, ["Gansito", "Dream Cake"]]
        }
    },
    "17": {
        "text": "You've made it back to Snackville! The whole town celebrates your return. How do you celebrate?",
        "choices": {
            "Share stories and lessons from the journey": [18, ["Orion", "Vienna"]],
            "Throw a huge party for everyone": [18, ["Cherry", "Dream Cake"]],
            "Quiet celebration with close friends": [18, ["Smores", "Gansito"]],
            "Hit up every restaurant in town": [18, ["Moon Pie", "Mamut"]]
        }
    },
    "18": {
        "text": "Final question: Someone asks you to describe the adventure in one word. What do you say?",
        "choices": {
            "\"Educational\" or \"Nostalgic\"": [0, ["Orion", "Vienna"]],
            "\"Aesthetic\" or \"Iconic\"": [0, ["Dream Cake", "Cherry"]],
            "\"Meaningful\" or \"Together\"": [0, ["Gansito", "Smores"]],
            "\"Delicious\" or \"Intense\"": [0, ["Moon Pie", "Mamut"]],
            "\"Validating\" or \"Challenging\"": [0, ["Lotte"]]
        }
    }
};

// Personality tracking
const personalities = {
    "Orion": 0,
    "Lotte": 0,
    "Dream Cake": 0,
    "Smores": 0,
    "Moon Pie": 0,
    "Mamut": 0,
    "Gansito": 0,
    "Cherry": 0,
    "Vienna": 0
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]);
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) {
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealCharacter();
    } else {
        renderState(currentState);
    }
}

function revealCharacter() {
    let maxCount = 0;
    let maxCharacter = '';

    for (const [character, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCharacter = character;
        }
    }

    const character = characterData[maxCharacter];
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    choicesContainer.innerHTML = '';

    const resultHTML = `
        <div id="result-container">
            <h2>You are...</h2>
            <div class="character-name">${character.name}</div>

            <div class="character-details">
                <h3>Strengths:</h3>
                <ul>
                    ${character.strengths.map(s => `<li>${s}</li>`).join('')}
                </ul>

                <h3>Weaknesses:</h3>
                <ul>
                    ${character.weaknesses.map(w => `<li>${w}</li>`).join('')}
                </ul>

                <h3>Catchphrases:</h3>
                <ul>
                    ${character.catchphrases.map(c => `<li>${c}</li>`).join('')}
                </ul>

                <h3>Alignment:</h3>
                <p>${character.alignment}</p>

                <h3>Hidden Talent:</h3>
                <p>${character.hiddenTalent}</p>

                <h3>Peer Reviews:</h3>
                <ul>
                    ${character.peerReviews.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>

            <button class="share-button" onclick="shareResult()">Share Your Result</button>
        </div>
    `;

    storyText.innerHTML = resultHTML;
}

function shareResult() {
    const shareText = "I just found out what Choco Pie I am! Take the quiz and find your match!";

    if (navigator.share) {
        navigator.share({
            title: 'What Choco Pie Are You?',
            text: shareText,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText + " " + window.location.href);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Link copied to clipboard!');
    }).catch(() => {
        alert('Please copy the link manually: ' + window.location.href);
    });
}

function startGame() {
    document.getElementById('homescreen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    // Game is ready
    console.log('Choco Pie Quiz loaded!');
};
