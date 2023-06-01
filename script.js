document.addEventListener("DOMContentLoaded", function() {
    const map = document.querySelector("#india-map");
    const searchInput = document.querySelector("#search-input");
    const placesList = document.querySelector("#places-list");
  
    map.addEventListener("click", function(event) {
      const target = event.target;
      if (target.tagName === "AREA") {
        const key = target.dataset.key;
        highlightPlace(key);
      }
    });
  
    placesList.addEventListener("click", function(event) {
      const target = event.target;
      if (target.tagName === "LI") {
        const key = target.dataset.key;
        highlightPlace(key);
      }
    });
  
    searchInput.addEventListener("input", function() {
      const searchText = searchInput.value.toLowerCase();
      Array.from(placesList.children).forEach(function(place) {
        const placeName = place.innerText.toLowerCase();
        if (placeName.includes(searchText)) {
          place.style.display = "block";
        } else {
          place.style.display = "none";
        }
      });
    });
  
    function highlightPlace(key) {
      const area = document.querySelector(`area[data-key="${key}"]`);
      if (area) {
        area.classList.add("highlight");
        setTimeout(function() {
          area.classList.remove("highlight");
        }, 2000);
      }
    }
  });
  