// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { query } = req.query;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
  .then(response => response.json())
  .then(data => {
    res.status(200).json({
      word: query,
      meanings: data[0].meanings[0].definitions
    });
  })
  .catch(error => res.status(500).json({error: error}));
}
