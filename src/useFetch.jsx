import {useState, useEffect} from "react"
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
       .then( res => {
        if(!res.ok) {
          throw Error("Could not fetch the data for that resource.")
        }
        return res.json();|
      })
      .then(data => {
        setData(data);
        setIspending(false);
      })
      .catch(err => {
          setIspending(false);
          setError(err.message);
      })
    }, 1000);
  }, [url])
  return (
    {data, isPending, error}
  )
}