document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  document.querySelector(
    "header p"
  ).innerText = `Bringing you the latest updates from around the world - ${date}`;
});
document.addEventListener("DOMContentLoaded", () => {
  fetchNewsArticles();
});

async function fetchNewsArticles() {
  try {
    const response = await fetch("https://api.example.com/news");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayNewsArticles(data.articles);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function displayNewsArticles(articles) {
  const container = document.getElementById("news-articles");
  container.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("article");

    articleElement.innerHTML = `
            <img src="${article.imageUrl}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
        `;

    container.appendChild(articleElement);
  });
}
