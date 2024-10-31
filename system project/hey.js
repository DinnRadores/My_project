// Sample recipe data (replace with your actual data)
var recipes = [
    { name: "beef pares", image: "pics/beef_pares.png", link: "pares.html" },
    { name: "sisig", image: "pics/pork_sisig.png", link: "sisig.html" },
    { name: "Adobo", image: "pics/chicken adobo.png", link: "adobo_recipe.html" },
    { name: "Giniling", image: "pics/giniling.jpg", link: "giniling.html" },
    { name: "adobong sitaw", image: "pics/sitaw.png", link: "adobong_sitaw.html" },
    { name: "Munggo", image: "pics/mungo.jpg", link: "munggo.html" },
    { name: "menudo", image: "pics/menudo.png", link: "menudo.html" },
    { name: "sinigang", image: "pics/sinigang.png", link: "sinigang.html" },
    { name: "kare kare", image: "pics/karekare.png", link: "kare_kare.html" },
    { name: "ginataang isda", image: "pics/ginataang_isda.jpg", link: "ginataang_isda.html" },
    // Add more recipes here
];

// Function to display all recipes
function displayAllRecipes() {
    var resultsContainer = document.getElementById("recipeResults");
    resultsContainer.innerHTML = '';
    recipes.forEach(function(recipe) {
        var resultItem = document.createElement("div");
        var link = document.createElement("a");
        link.href = recipe.link;
        link.innerHTML = '<img src="' + recipe.image + '" alt="' + recipe.name + '"><br>' + recipe.name;
        resultItem.appendChild(link);
        resultsContainer.appendChild(resultItem);
    });
}

// Function to display search results
function searchRecipes() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var resultsContainer = document.getElementById("recipeResults");
    var originalList = document.getElementById("originalList");

    // If originalList is not yet created, create it
    if (!originalList) {
        originalList = document.createElement("div");
        originalList.id = "originalList";
        originalList.innerHTML = resultsContainer.innerHTML; // Save original list
        resultsContainer.parentNode.insertBefore(originalList, resultsContainer);
    }

    // Hide original list
    originalList.style.display = "none";

    resultsContainer.innerHTML = '';

    var matchingRecipes = recipes.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(input);
    });

    matchingRecipes.forEach(function(recipe) {
        var resultItem = document.createElement("div");
        var link = document.createElement("a");
        link.href = recipe.link;
        link.innerHTML = '<img src="' + recipe.image + '" alt="' + recipe.name + '"><br>' + recipe.name;
        resultItem.appendChild(link);
        resultsContainer.appendChild(resultItem);
    });
}
