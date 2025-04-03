// Arrays for excuses, compliments, and gift ideas
const excuses = [
    "My alarm didn't go off because my cat unplugged it during the night.",
    "I was abducted by aliens who were running late themselves.",
    "I got caught in a time loop and had to solve it before I could move on.",
    "My coffee maker gained sentience and refused to make coffee until we had a heart-to-heart.",
    "I was practicing my quick-change routine and got stuck between outfits.",
    "My neighbor's Wi-Fi password changed, and I had to help them remember it.",
    "My GPS took me to a parallel universe version of this location.",
    "I found a treasure map in my cereal this morning and ethically couldn't ignore it.",
    "My shadow refused to follow me, so I had to convince it to come along.",
    "I was trapped in an epic staring contest with my reflection.",
    "My houseplants staged an intervention about my watering schedule.",
    "A squirrel stole my car keys and I had to negotiate their return.",
    "I was selected for a random citizen time-travel experiment.",
    "My smart home locked me in until I correctly answered three riddles.",
    "I had to stop and help a family of ducks cross a five-lane highway.",
     "My GPS started speaking in riddles and would only give directions if I solved them first.",
     "I was ready to leave when my reflection in the mirror refused to mimic me, so I had to negotiate terms.",
     "A street musician played a song so catchy that everyone on the sidewalk spontaneously broke into choreographed dance.",
     "My neighbor's garden gnomes rearranged themselves into a roadblock and demanded a toll.",
    "I was trapped in my driveway by an extremely determined door-to-door philosopher.",
    "My car only starts when you compliment it sincerely, and today it was being particularly needy.",
    "I got caught in a localized shower of maple syrup and had to wash my car before driving.",
    "My shoelaces formed a union and went on strike right as I was heading out the door.",
    "The elevator in my building was feeling nostalgic and stopped at every floor to reminisce about its past."
];

const compliments = [
    "Your creativity is like a firework display—brilliant, unexpected, and captivating.",
    "You have the rare ability to make complex ideas feel simple and accessible.",
    "Your laughter is so genuine it makes everyone around you feel instantly happier.",
    "You navigate challenges with the grace of a dancer and the strength of a mountain.",
    "The way you really listen when others speak makes people feel truly valued.",
    "Your kindness creates ripples that reach people in ways you'll never even know.",
    "You bring the perfect balance of thoughtfulness and spontaneity to everything you do.",
    "Your unique perspective makes conversations with you an adventure every time.",
    "The care you put into details shows a level of respect for your work that's truly inspiring.",
    "You have an extraordinary talent for finding beauty in situations others might overlook.",
    "Your courage to be authentic gives others permission to do the same.",
    "The enthusiasm you bring to new experiences is absolutely contagious.",
    "You have a gift for making people feel comfortable even in unfamiliar situations.",
    "Your resilience in difficult times is a quiet kind of superpower.",
    "The way you express gratitude transforms ordinary moments into special ones.",
    "Your imagination flows like a river of stars—endless, illuminating, and guiding others to new possibilities.",
"You have an extraordinary gift for turning ordinary moments into memorable experiences.",
"Your enthusiasm is so contagious it transforms even the most reluctant participants into eager collaborators.",
"You approach difficult situations with the precision of a master craftsman and the patience of time itself.",
"The way you remember small details about others shows a depth of caring that makes everyone feel significant.",
"Your generosity creates a sanctuary where people feel safe to be their authentic selves.",
"You bring the perfect blend of wisdom and playfulness that makes learning from you a joyful journey.",
"Your ability to see patterns where others see chaos makes conversations with you truly enlightening.",
"You express yourself with the clarity of morning light and the warmth of an afternoon sun.",
"The confidence you bring to challenges inspires others to discover strength they didn't know they possessed."
];

const giftIdeas = [
    "A custom playlist with songs that remind you of them with a handwritten note explaining each choice.",
    "A 'reasons why you're amazing' jar with 30 colorful notes they can open whenever they need a boost.",
    "A DIY hot chocolate kit with premium chocolate, homemade marshmallows, and a unique mug.",
    "A subscription to MasterClass in a subject they've always wanted to explore.",
    "A personalized star map showing the night sky from the exact place and time you met.",
    "A set of locally-made specialty foods from your area (honey, jam, coffee, etc.).",
    "A 'movie night emergency kit' with gourmet popcorn, candy, and a streaming service gift card.",
    "A custom phone case featuring artwork from their favorite artist or a photo they love.",
    "A set of 'adventure coupons' for experiences you can do together (picnic, hike, museum day).",
    "A carefully curated box of samples from local bakeries or chocolatiers.",
    "A virtual cooking class with a chef from their favorite cuisine.",
    "A houseplant selected specifically for their space and care level, with decorative pot.",
    "A personalized crossword puzzle with clues about your relationship and their interests.",
    "A donation to a cause they care about with a thoughtful card explaining why you chose it.",
    "A digital photo frame pre-loaded with favorite memories and set up ready to use.",
    "A 'parallel universe' memory book with photo edits showing adventures you 'could have had' in alternate timelines - like if you were pirates, space explorers, or medieval knights.",
"A 'personal mythology kit' where you commission an artist to create a superhero identity for them, complete with origin story, costume design, and powers based on their personality traits.",
"A 'mystery doorway subscription' that delivers a miniature handcrafted door each month to place around their home, each leading to an imaginative tiny world with a continuing story.",
"A 'sound landscape' created by a composer using recordings from meaningful places in their life, mixed into a beautiful ambient audio experience.",
"A 'timetravel breakfast' service that recreates historically accurate morning meals from different time periods and cultures, delivered monthly with historical context cards.",
"A custom-made puzzle where the completed image reveals a QR code leading to a video montage of friends and family sharing their favorite memories together.",
"A 'garden of impossible flowers' with handcrafted botanical sculptures that combine elements from different plants into beautiful imaginary species they can 'grow' indoors.",
"A 'personal festival kit' with custom flags, wristbands, and a curated playlist celebrating them as the headliner, plus a mini stage setup for their living room.",
"A commissioned voice recording from their favorite fictional character's voice actor delivering a personalized message or reading a special text.",
"A 'sensory time capsule' with scents, sounds, textures, and tastes that capture your shared experiences, professionally packaged for them to revisit treasured memories."
    
];

// Navigation function
function navigate(page) {
    // Hide all pages first
    document.getElementById('home').classList.add('hidden');
    document.getElementById('excuse').classList.add('hidden');
    document.getElementById('compliment').classList.add('hidden');
    document.getElementById('gift').classList.add('hidden');
    
    // Show the selected page
    document.getElementById(page).classList.remove('hidden');
    
    // Clear any previously generated content when navigating
    document.getElementById('excuse-output').textContent = '';
    document.getElementById('compliment-output').textContent = '';
    document.getElementById('gift-output').textContent = '';
}

// Generator functions with animations
function generateExcuse() {
    const outputElement = document.getElementById('excuse-output');
    animateGeneration(outputElement, excuses);
}

function generateCompliment() {
    const outputElement = document.getElementById('compliment-output');
    animateGeneration(outputElement, compliments);
}

function generateGift() {
    const outputElement = document.getElementById('gift-output');
    animateGeneration(outputElement, giftIdeas);
}

// Animation function for generating content
function animateGeneration(element, array) {
    // First, make the output fade out
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease';
    
    // After fade out, change the content and fade back in
    setTimeout(() => {
        // Get random item from the array
        const randomIndex = Math.floor(Math.random() * array.length);
        element.textContent = array[randomIndex];
        
        // Fade in with the new content
        element.style.opacity = '1';
        element.style.transition = 'opacity 0.5s ease';
    }, 300);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Start on home page
    navigate('home');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Press 'H' for home
        if (event.key === 'h' || event.key === 'H') {
            navigate('home');
        }
        // Press 'E' for excuse generator
        else if (event.key === 'e' || event.key === 'E') {
            navigate('excuse');
        }
        // Press 'C' for compliment generator
        else if (event.key === 'c' || event.key === 'C') {
            navigate('compliment');
        }
        // Press 'G' for gift ideas
        else if (event.key === 'g' || event.key === 'G') {
            navigate('gift');
        }
        // Press spacebar to generate within a page
        else if (event.key === ' ' && !document.getElementById('home').classList.contains('hidden') === false) {
            if (!document.getElementById('excuse').classList.contains('hidden')) {
                generateExcuse();
            } else if (!document.getElementById('compliment').classList.contains('hidden')) {
                generateCompliment();
            } else if (!document.getElementById('gift').classList.contains('hidden')) {
                generateGift();
            }
        }
    });
    
    // Apply smooth hover effects to all buttons
    const buttons = document.querySelectorAll('.interactive-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
        });
    });
});

// Add confetti effect for compliments
function showConfetti() {
    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);
    
    // Create confetti pieces
    const colors = ['#ff5252', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        confettiContainer.appendChild(confetti);
        
        // Animate confetti falling
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 3;
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: 'translateY(' + window.innerHeight + 'px) rotate(' + (Math.random() > 0.5 ? '' : '-') + '360deg)', opacity: 0 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            fill: 'forwards'
        });
    }
    
    // Remove confetti container after animation
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 6000);
}

// Add confetti to compliment generation
const originalGenerateCompliment = generateCompliment;
generateCompliment = function() {
    originalGenerateCompliment();
    showConfetti();
};