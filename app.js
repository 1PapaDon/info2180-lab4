document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchField = document.getElementById("searchField");
  
    function fetchAndAlert() {
      const q = searchField.value.trim();
      const url = "superheroes.php?query=" + encodeURIComponent(q);
  
      // fetch text from PHP endpoint
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error("Network response was not OK");
          return response.text();
        })
        .then(text => {
          // show whatever HTML/text PHP returned inside an alert
          alert(text);
        })
        .catch(err => {
          console.error(err);
          alert("There was an error fetching the superhero list.");
        });
    }
  
    searchBtn.addEventListener("click", fetchAndAlert);
  
    // optional: pressing Enter runs the search
    searchField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fetchAndAlert();
    });
  });