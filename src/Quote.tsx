import { useEffect, useState } from "react";

interface Quote {
  quote: string;
}

function App() {
  const [quote, setQuote] = useState<Quote>();

  //   useEffect(() => {
  //     const fetchQuote = async () => {
  //       const response = await fetch("https://api.kanye.rest");
  //       const jsonBody: Quote = await response.json();
  //       setQuote(jsonBody);
  //     };

  //     fetchQuote();
  //   }, []);

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((jsonBody) => setQuote(jsonBody));
  }, []);

  return (
    <>
      <h1>Kanye quote app</h1>
      {quote && (
        <>
          <p>
            <b>{quote.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
