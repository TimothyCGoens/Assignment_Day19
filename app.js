let newsDisplay = document.getElementById('newsDisplay')

let newsItems = news.articles.map(function(news) {

  return `
          <li class="article">
          <a href="${news.url}" class="articleTitle">${news.title}</a>
          <h6 class="authorName">${news.author}</h6>
          <p class="articleDescription">${news.description}</p>
          <img src =${news.urlToImage}>
          <p class="timePublished">${news.publishedAt}</p>
          </li>`
})
newsDisplay.innerHTML = newsItems.join('')
