const eventData = {
    'arrival': {
        title: '✈️ Arrival Day + Room Surprise - Full Day Together',
        time: '8:00 AM - 8:00 PM',
        location: 'Airbnb, Cairo',
        description: '8:00 AM: Pick up friend from home\n9:00-11:00 AM: Reveal decorated room surprise, breakfast together\n11:00 AM-1:00 PM: Rest and get comfortable, Netflix\n1:00-2:30 PM: Order lunch in together\n2:30-6:00 PM: Gentle time together, shows, cuddling\n6:00-7:30 PM: Dinner together (order in)\n7:30-8:00 PM: Prepare for drop off\n8:00 PM: Drop off at home\n\nEmotional Safety Focus: Soft landing, gentle start, comfortable environment',
        notes: 'First day together - take it slow, let them see the room surprise, order favorite food, gentle and nurturing',
        booking: 'No reservations needed - just rest day and room surprise'
    },
    'relaxed': {
        title: '🏠 Relaxed Weekend - Netflix & Cooking',
        time: '8:00 AM - 8:00 PM',
        location: 'University + Airbnb',
        description: '8:00 AM: Pick up for classes\n10:00-12:45 PM: University classes (wait nearby/home)\n12:45-2:00 PM: Lunch together between classes\n2:00-2:50 PM: University class (wait nearby)\n3:00-6:00 PM: Netflix & cooking at home\n6:00-8:00 PM: Dinner together, cuddle time\n8:00 PM: Drop off at home\n\nEmotional Safety Focus: Building domestic comfort, relaxed weekend',
        notes: 'Let them choose what to cook and what to watch. Building domestic comfort.',
        booking: 'Grocery ingredients ready\nNetflix setup'
    },
    'pizza': {
        title: '🍕 Pizza Hut Surprise - Full Day with Classes',
        time: '8:00 AM - 8:00 PM',
        location: 'University + Pizza Hut + Home',
        description: '8:00 AM: Pick up for classes\n11:30-12:45 PM: University class (wait nearby/home)\n12:45-3:30 PM: Home, lunch together, rest\n3:30-4:45 PM: University class (wait nearby/home)\n5:00-7:00 PM: Pizza Hut surprise - favorite place!\n7:00-8:00 PM: Back home, chill time\n8:00 PM: Drop off at home\n\nEmotional Safety Focus: Fun surprise, casual dining, building routine',
        notes: 'Pizza Hut is a favorite! Make it a fun surprise. Find location near airbnb or university.',
        booking: 'Find nearest Pizza Hut location\nNo reservation needed'
    },
    'zitouni': {
        title: '🥂 Zitouni Fancy Dinner - Single Class Day',
        time: '8:00 AM - 8:00 PM',
        location: 'University + Four Seasons Hotel Cairo - Zitouni Restaurant',
        description: '8:00 AM: Pick up for class\n11:30-12:45 PM: Single university class\n1:00-5:30 PM: Home, rest and get ready for fancy dinner\n5:30-6:00 PM: Drive to Zitouni\n6:00-8:00 PM: Fancy white tablecloth dinner at Zitouni\n8:00 PM: Drop off at home\n\nEmotional Safety Focus: Supporting schedule, fancy experience showing effort',
        notes: 'CAR RENTAL DAY 1 - Single class day perfect for fancy dinner. White tablecloth, Nile views.',
        booking: 'MUST BOOK: Zitouni Restaurant +20 (2) 2791 6877 for 6:00 PM\nCar rental needed'
    },
    'pyramids': {
        title: '🏺 PYRAMIDS DAY - Skip Single Class for Morning Adventure',
        time: '8:00 AM - 8:00 PM',
        location: 'Pyramids of Giza, Egypt',
        description: '8:00 AM: Pick up (SKIP SINGLE TUESDAY CLASS)\n8:30-9:30 AM: Drive to Pyramids (CAR RENTAL DAY 2)\n9:30 AM-1:00 PM: Explore Pyramids complex - morning is best!\n1:00-2:00 PM: Lunch at nearby restaurant\n2:00-3:00 PM: Drive back home\n3:00-6:00 PM: Rest at home, recover from adventure\n6:00-8:00 PM: Dinner together, cuddle time\n8:00 PM: Drop off at home\n\nEmotional Safety Focus: Skip only ONE class for special experience',
        notes: 'CAR RENTAL DAY 2 - Perfect timing! Morning pyramids visit, only miss one class. Take lots of photos!',
        booking: 'Book Pyramids tickets: egymonuments.gov.eg (EGP 700 entry + EGP 1000 Great Pyramid)\nCar rental needed\nRestaurant near pyramids'
    }
};

// Modal functionality
const modal = document.getElementById('eventModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Add click event listeners to all clickable days
document.querySelectorAll('.day.clickable').forEach(day => {
    day.addEventListener('click', function() {
        const eventType = this.getAttribute('data-event');
        const date = this.getAttribute('data-date');
        showEventDetails(eventType, date);
    });
});

function showEventDetails(eventType, date) {
    const event = eventData[eventType];
    if (!event) {
        alert('Event details coming soon! This day includes all the activities shown.');
        return;
    }

    // Format date
    const dateObj = new Date(date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Update modal content
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDate').textContent = formattedDate;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDate').textContent = formattedDate;
    document.getElementById('eventTime').textContent = event.time;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('eventNotes').textContent = event.notes;
    document.getElementById('bookingInfo').textContent = event.booking;

    modal.style.display = 'block';
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(function() {
        const btn = element.nextElementSibling;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        
        setTimeout(function() {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}
