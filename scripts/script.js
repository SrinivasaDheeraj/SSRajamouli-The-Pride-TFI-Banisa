// Movie data
const movies = {
    "student-no-1": { title: "Student No. 1", year: 2001, cast: "Jr. NTR, Gajala", producer: "Aswini Dutt", awards: "Nandi Award for Best Director (Rajamouli)", trailer: "https://www.youtube.com/embed/4IuEf0DLzMY?si=ip_tJ2e_PDs9ClL-" },
    "simhadri": { title: "Simhadri", year: 2003, cast: "Jr. NTR, Bhumika", producer: "V. Vijayendra Prasad", awards: "Filmfare Award for Best Film – Telugu", trailer: "https://www.youtube.com/embed/7Wu-FcGHND8?si=N3HuPDq5fXJ7UBwc" },
    "sye": { title: "Sye", year: 2004, cast: "Nithin, Genelia", producer: "A. Bharati", awards: "Nandi Award for Best Story Writer (Rajamouli)", trailer: "https://www.youtube.com/embed/EGZnoc-XwhQ?si=1HIY8iBEvcTxst4k" },
    "chatrapathi": { title: "Chatrapathi", year: 2005, cast: "Prabhas, Shriya", producer: "B.V.S.N. Prasad", awards: "Nandi Award for Best Villain (Bikku)", trailer: "https://www.youtube.com/embed/-68xQqnwi9I?si=3NFwB4Rz91bsKtLy" },
    "vikramarkudu": { title: "Vikramarkudu", year: 2006, cast: "Ravi Teja, Anushka", producer: "ML Kumar Chowdary", awards: "Huge commercial success but no major awards", trailer: "https://www.youtube.com/embed/zkKGloHo-kI?si=yssXNAfU_SCqnhv-" },
    "yama-donga": { title: "Yama Donga", year: 2007, cast: "Jr. NTR, Priyamani", producer: "Chiranjeevi Pedamallu", awards: "Filmfare Award for Best Director – Telugu", trailer: "https://www.youtube.com/embed/FA6H8kYJ5bc?si=GWBRQ9WkIWuOJEA7" },
    "magadheera": { title: "Magadheera", year: 2009, cast: "Ram Charan, Kajal", producer: "Allu Aravind", awards: "National Film Award for Best Choreography, Filmfare Award for Best Film – Telugu, Filmfare Award for Best Director – Telugu", trailer: "https://www.youtube.com/embed/NXfhuqDNxg4?si=RK5kmCfs5LiBmjqq" },
    "maryada-ramanna": { title: "Maryada Ramanna", year: 2010, cast: "Sunil, Saloni", producer: "Shobu Yarlagadda", awards: "Nandi Award for Best Screenplay", trailer: "https://www.youtube.com/embed/u0P85yVuaQc?si=xO0MTE88sttfPW5z" },
    "eega": { title: "Eega", year: 2012, cast: "Nani, Samantha", producer: "Sai Korrapati", awards: "National Film Award for Best Special Effects, Nandi Award for Best Director, Filmfare Award for Best Film – Telugu", trailer: "https://www.youtube.com/embed/01_8XnNolN4?si=HAZUucFpz0qgQpQX" },
    "baahubali-the-beginning": { title: "Baahubali: The Beginning", year: 2015, cast: "Prabhas, Tamannaah, Rana, Anushka", producer: "Shobu Yarlagadda, Prasad Devineni", awards: "National Film Award for Best Feature Film, Filmfare Award for Best Film – Telugu, Nandi Award for Best Director", trailer: "https://www.youtube.com/embed/3NQRhE772b0?si=Xdz4Ri7yTZiwqk8L" },
    "baahubali-the-conclusion": { title: "Baahubali: The Conclusion", year: 2017, cast: "Prabhas, Anushka, Rana, Tamannaah", producer: "Shobu Yarlagadda, Prasad Devineni", awards: "National Film Award for Best Popular Film, Filmfare Award for Best Film – Telugu, Nandi Award for Best Director", trailer: "https://www.youtube.com/embed/qD-6d8Wo3do?si=YeEAUefy4oIMd8-Q" },
    "rrr": { title: "RRR", year: 2022, cast: "Ram Charan, Jr. NTR, Alia Bhatt", producer: "DVV Danayya", awards: "Academy Award for Best Original Song ('Naatu Naatu'), Golden Globe Award for Best Original Song, New York Film Critics Circle Award for Best Director, Filmfare Award for Best Film – Telugu", trailer: "https://www.youtube.com/embed/KylLy-1G08U?si=y0I5IdyIu80fuIY0" }
  };
  
  // Fetch movie details for Moviedetails.html
  const urlParams = new URLSearchParams(window.location.search);
  const movie = urlParams.get('movie');
  
  if (movies[movie]) {
    document.getElementById("movieTitle").textContent = movies[movie].title;
    document.getElementById("movieYear").textContent = `Year: ${movies[movie].year}`;
    document.getElementById("movieCast").textContent = `Cast: ${movies[movie].cast}`;
    document.getElementById("movieProducer").textContent = `Producer: ${movies[movie].producer}`;
    document.getElementById("movieAwards").textContent = `Awards: ${movies[movie].awards}`;
    document.getElementById("movieTrailer").src = movies[movie].trailer;
  } else if (document.getElementById("movieTitle")) {
    document.getElementById("movieTitle").textContent = "Movie Not Found";
  }
  
  // Autocomplete suggestions
  function showSuggestions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    
    if (!searchTerm) {
      suggestionsDiv.style.display = 'none';
      return;
    }
  
    const matchingMovies = Object.keys(movies).filter(key => 
      movies[key].title.toLowerCase().includes(searchTerm)
    );
  
    if (matchingMovies.length > 0) {
      matchingMovies.forEach(key => {
        const suggestion = document.createElement('div');
        suggestion.textContent = movies[key].title;
        suggestion.onclick = () => {
          document.getElementById('searchInput').value = movies[key].title;
          suggestionsDiv.style.display = 'none';
          search(); // Trigger search on click
        };
        suggestionsDiv.appendChild(suggestion);
      });
      suggestionsDiv.style.display = 'block';
    } else {
      suggestionsDiv.style.display = 'none';
    }
  }
  
  // scripts/script.js
function loadTimeline() {
  const timelineContainer = document.getElementById('timelineContainer');
  Object.keys(movies).forEach(key => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `<h3>${movies[key].year}</h3><p>${movies[key].title}</p>`;
    
    timelineContainer.appendChild(item);
  });
}
document.addEventListener('DOMContentLoaded', loadTimeline);


  // Search functionality
  function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const movieResults = document.getElementById('movieResults');
    movieResults.innerHTML = ''; // Clear previous results
  
    if (!searchTerm) {
      alert("Please enter a movie name or cast member to search!");
      return;
    }
  
    // Check if search term matches a movie title
    const movieKey = Object.keys(movies).find(key => 
      movies[key].title.toLowerCase() === searchTerm
    );
  
    if (movieKey) {
      // Redirect to movie details page if exact match
      window.location.href = `movie-details.html?movie=${movieKey}`;
      return;
    }
  
    // Otherwise, search for cast member and show movie cards
    const matchingMovies = Object.keys(movies).filter(key => 
      movies[key].cast.toLowerCase().includes(searchTerm)
    );
  
    if (matchingMovies.length > 0) {
      matchingMovies.forEach(key => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
          <img src="images/${key}.jpg" alt="${movies[key].title}">
          <h3>${movies[key].title}</h3>
          <p>Year: ${movies[key].year}</p>
          <p>Cast: ${movies[key].cast}</p>
          <a href="movie-details.html?movie=${key}">More Details</a>
        `;
        movieResults.appendChild(movieCard);
      });
    } else {
      movieResults.innerHTML = '<p>No movies or cast member found for this name</p>';
    }
  
    document.getElementById('suggestions').style.display = 'none'; // Hide suggestions
  }
  
  // Back button functionality
  function goBack() {
    window.history.back();
  }

// Popup functionality for upcoming-project.html
document.addEventListener('DOMContentLoaded', function() {
  const updatesBtn = document.getElementById('updatesBtn');
  const popupCard = document.getElementById('popupCard');
  const closeBtn = document.getElementById('closeBtn');

  if (updatesBtn && popupCard && closeBtn) {
    // Show popup when Updates button is clicked
    updatesBtn.onclick = function() {
      popupCard.style.display = 'block';
    };

    // Hide popup when close button is clicked
    closeBtn.onclick = function() {
      popupCard.style.display = 'none';
    };

    // Hide popup when clicking outside the popup content
    window.onclick = function(event) {
      if (event.target === popupCard) {
        popupCard.style.display = 'none';
      }
    };
  }
});

  // scripts/script.js
function loadRating() {
  const starsContainer = document.getElementById('starRating');
  const movie = urlParams.get('movie');
  if (!movie) return;

  const rating = localStorage.getItem(`rating-${movie}`) || 0;
  starsContainer.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = `star ${i <= rating ? 'filled' : ''}`;
    star.innerHTML = '★';
    star.onclick = () => setRating(movie, i);
    starsContainer.appendChild(star);
  }
}

function setRating(movie, value) {
  localStorage.setItem(`rating-${movie}`, value);
  loadRating();
}

document.addEventListener('DOMContentLoaded', loadRating);



