document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchField = document.getElementById("searchField");
    const resultDiv = document.getElementById("result");
  
    function fetchData() {
      const query = searchField.value.trim();
      const url = "superheroes.php?query=" + encodeURIComponent(query);
  
      resultDiv.innerHTML = "<p>Loading...</p>"; // show loading text
  
      fetch(url)
        .then(response => response.text())
        .then(data => {
          // Show the PHP response inside the result div (not alert)
          resultDiv.innerHTML = data;
        })
        .catch(error => {
          resultDiv.innerHTML = "<p>There was an error fetching data.</p>";
          console.error(error);
        });
    }
  
    searchBtn.addEventListener("click", fetchData);
  
    // Optional: Pressing "Enter" also searches
    searchField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        fetchData();
      }
    });
  });