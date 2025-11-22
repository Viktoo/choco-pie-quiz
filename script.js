// Character data with full descriptions
const characterData = {
    "Orion": {
        name: "ORION CHOCO PIE",
        image: "images/orion.png",
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
        image: "images/lotte.png",
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
        image: "images/dream-cake.png",
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
        image: "images/smores.png",
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
        image: "images/moon-pie.png",
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
        image: "images/mamut.png",
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
        image: "images/gansito.png",
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
        image: "images/cherry.png",
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
        image: "images/vienna.png",
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
        "text": "You're in a glass-walled boardroom on the 47th floor in Seoul. Q4 earnings meeting. The CEO just dropped a bomb: market share is tanking. What's your first thought?",
        "choices": {
            "This company's gone soft. We survived worse in the early days": [2, ["Orion", "Mamut"]],
            "Already composing the apology post in your head": [2, ["Lotte", "Gansito"]],
            "At least the view is incredible, very main character energy": [2, ["Dream Cake", "Cherry"]],
            "Guess I'm updating my LinkedIn tonight": [2, ["Smores", "Moon Pie"]]
        }
    },
    "2": {
        "text": "The marketing VP suddenly stands up, slams the table: 'Someone's been leaking our strategy to Lotte.' Dead silence. Everyone's looking around.",
        "choices": {
            "Stand up. 'Who the f*ck would do that?'": [3, ["Mamut", "Orion"]],
            "Lean over to whisper 'Oh SHIT this is insane' to whoever's next to you": [3, ["Cherry", "Dream Cake"]],
            "Sink into your chair, hoping nobody looks at you": [3, ["Gansito", "Lotte"]],
            "Stay neutral, observe who's sweating": [3, ["Smores", "Vienna"]]
        }
    },
    "3": {
        "text": "Security bursts in. 'Nobody leaves.' They start checking phones. The intern next to you is literally shaking. Do you...",
        "choices": {
            "Tell security to calm the hell down, you've got rights": [4, ["Mamut", "Vienna"]],
            "Try to comfort the intern, whisper 'it'll be okay'": [4, ["Gansito", "Smores"]],
            "Stress eat peanut M&Ms under the table": [4, ["Moon Pie", "Cherry"]],
            "Pull out your phone to document this before they take it": [4, ["Dream Cake", "Lotte"]]
        }
    },
    "4": {
        "text": "BANG. The lights cut. Emergency exit signs glow red. Someone screams. You hear glass shatter. What the actual f*ck is happening?",
        "choices": {
            "Continue": [5, []]
        }
    },
    "5": {
        "text": "Emergency lights flicker on. The window's smashed. CEO is gone. Like, GONE gone. Blood on the glass. You need to move. NOW.",
        "choices": {
            "Take charge: 'Everyone stay calm, we go together'": [6, ["Orion", "Mamut", "Vienna"]],
            "Grab your designer bag first, THEN panic": [6, ["Dream Cake", "Cherry"]],
            "Check if anyone's hurt before anything else": [6, ["Gansito", "Smores"]],
            "Start crying but also following everyone else": [6, ["Lotte", "Moon Pie"]]
        }
    },
    "6": {
        "text": "You're in the emergency stairwell. 47 floors down. Someone suggests splitting up - elevator shaft, stairs, or the sketchy service corridor?",
        "choices": {
            "Stairs. Old school. Reliable. The way it's been done since forever.": [7, ["Orion", "Smores"]],
            "Elevator shaft - we can rappel down like in the movies": [8, ["Mamut", "Cherry"]],
            "Service corridor seems... safer? Maybe?": [9, ["Vienna", "Gansito"]],
            "Can we just... vote? Please?": [10, ["Lotte", "Dream Cake"]]
        }
    },
    "7": {
        "text": "Fifteen floors down, your legs are screaming. Someone's having a breakdown. The stairwell door at floor 32 is slightly open, voices inside.",
        "choices": {
            "Keep going, don't engage with random shit": [11, ["Orion", "Vienna"]],
            "Push through the pain, we've survived worse": [11, ["Mamut", "Lotte"]],
            "We need a break anyway, maybe they can help": [11, ["Smores", "Gansito"]],
            "Honestly need to sit down and eat something": [11, ["Moon Pie", "Dream Cake"]]
        }
    },
    "8": {
        "text": "Elevator shaft is dark as hell. You're climbing down maintenance cables. Someone's livestreaming this on their phone. Seriously?",
        "choices": {
            "Keep climbing, fear is a choice": [11, ["Mamut", "Orion"]],
            "Make jokes about how you're definitely dying": [11, ["Cherry", "Moon Pie"]],
            "Stay close to the group, safety in numbers": [11, ["Gansito", "Smores"]],
            "Ask them to angle the camera better, your good side": [11, ["Dream Cake", "Lotte"]]
        }
    },
    "9": {
        "text": "Service corridor smells like kimchi and industrial cleaner. Fluorescent lights buzz. You emerge into... a luxury penthouse? What?",
        "choices": {
            "This is highly unusual and improper": [11, ["Vienna", "Orion"]],
            "The AESTHETIC. Are those original Eames chairs?": [11, ["Dream Cake", "Cherry"]],
            "Sorry sorry sorry for intruding": [11, ["Gansito", "Lotte"]],
            "Act natural. We belong here. Confidence is key.": [11, ["Smores", "Moon Pie"]]
        }
    },
    "10": {
        "text": "Mid-vote, two people start screaming at each other about which route. It's getting physical. Someone might actually throw hands.",
        "choices": {
            "Side with whoever's been here longer, they know better": [11, ["Orion", "Vienna"]],
            "Jump between them, try to mediate": [11, ["Gansito", "Smores"]],
            "This is honestly great content": [11, ["Cherry", "Dream Cake"]],
            "Suggest we take all three routes? Please stop yelling?": [11, ["Moon Pie", "Mamut"]]
        }
    },
    "11": {
        "text": "Ground level. You burst out into Gangnam at 2am. Neon everywhere. A woman in Chanel approaches. 'You're bleeding. Follow me.' Sketchy or savior?",
        "choices": {
            "Hell no. Trust nobody.": [12, ["Mamut", "Vienna"]],
            "Thank her profusely, accept help": [12, ["Gansito", "Smores"]],
            "Cautious but desperate, follow at a distance": [12, ["Orion", "Lotte"]],
            "Is that the limited edition Chanel?": [12, ["Cherry", "Dream Cake"]]
        }
    },
    "12": {
        "text": "She leads you underground. Like, DEEP underground. Concrete tunnel opens into... an illegal fight club? Cage in the center. Crowd going wild.",
        "choices": {
            "This is absolutely medieval. Do they not have regulations here?": [13, ["Vienna", "Orion"]],
            "Wait this is actually the coolest thing I've ever seen": [13, ["Dream Cake", "Cherry"]],
            "Is there food? When's the last time we ate?": [13, ["Moon Pie", "Gansito"]],
            "How do we get out of here?": [13, ["Smores", "Lotte"]]
        }
    },
    "13": {
        "text": "The crowd parts. In the cage: your CEO. Alive. Fighting. He sees you. 'Get in here. You want answers? Earn them.' He's serious.",
        "choices": {
            "F*ck it. Let's go. *cracks knuckles*": [14, ["Orion", "Mamut"]],
            "Beg someone else to go instead": [14, ["Gansito", "Smores"]],
            "Negotiate: 'What do I get if I win?'": [14, ["Dream Cake", "Vienna"]],
            "Panic. Visible panic. Laugh nervously.": [14, ["Lotte", "Cherry"]]
        }
    },
    "14": {
        "text": "You're in the cage. CEO is across from you. Bell rings. He charges. You've got 3 seconds. What's your move?",
        "choices": {
            "Duck and counter - technique over brute force": [15, ["Vienna", "Smores"]],
            "Meet him head on, full aggression": [15, ["Mamut", "Orion"]],
            "Dodge, talk it out: 'We can discuss this!'": [15, ["Gansito", "Lotte"]],
            "Trip, fall, accidentally headbutt him": [15, ["Moon Pie", "Cherry"]]
        }
    },
    "15": {
        "text": "You're on the ground. He's standing over you. Then - he laughs. Helps you up. 'You passed. Now we talk.' This was a test? Are you f*cking kidding?",
        "choices": {
            "'This was always a test. I knew it.'": [16, ["Orion", "Vienna"]],
            "'Oh thank GOD I thought I was gonna die'": [16, ["Gansito", "Smores"]],
            "'Did someone film that? I need that footage'": [16, ["Dream Cake", "Cherry"]],
            "'Can we PLEASE eat now?'": [16, ["Moon Pie", "Lotte"]]
        }
    },
    "16": {
        "text": "Private room upstairs. CEO explains: the 'leak' was planned. The window break? Staged. This whole night? Corporate team building. EXTREME team building.",
        "choices": {
            "You've got to be sh*tting me": [17, ["Mamut", "Moon Pie"]],
            "Well that was... innovative? I guess?": [17, ["Smores", "Lotte"]],
            "This is insane even by Korean corporate standards": [17, ["Vienna", "Orion"]],
            "This would look AMAZING in my memoir": [17, ["Dream Cake", "Cherry"]]
        }
    },
    "17": {
        "text": "CEO: 'Those who made it here get promoted. Tomorrow, 9am sharp. Don't be late.' Everyone's processing. How do you react?",
        "choices": {
            "Nod. Respect the old-school loyalty test.": [18, ["Orion", "Vienna"]],
            "Cry from relief and stress and confusion": [18, ["Gansito", "Lotte"]],
            "Immediately post a cryptic story about 'crazy night'": [18, ["Cherry", "Dream Cake"]],
            "Ask where the after-party food is": [18, ["Moon Pie", "Mamut"]]
        }
    },
    "18": {
        "text": "You're in a taxi at 5am. Sun's coming up over Han River. Driver asks: 'Rough night?' You think about everything. One word to describe it:",
        "choices": {
            "Unforgettable": [0, ["Orion", "Vienna"]],
            "Iconic": [0, ["Dream Cake", "Cherry"]],
            "Intense": [0, ["Gansito", "Smores"]],
            "Insane": [0, ["Moon Pie", "Mamut"]],
            "Overwhelming": [0, ["Lotte"]]
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

            <img src="${character.image}" alt="${character.name}" class="character-image">

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
