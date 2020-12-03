const url =
  'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=24ecceb71360404aa7c4a32034a7e31d';

export async function getNews() {
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}
