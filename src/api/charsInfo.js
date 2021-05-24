let baseUrl = "https://www.breakingbadapi.com/api/";

export function getApi() {
  return fetch(`${baseUrl}characters`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function getApiQuote(author) {
    return fetch(`${baseUrl}quote/random?author=${author}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    }).then(response => response.json())
      .catch((error) => {throw error})
  }