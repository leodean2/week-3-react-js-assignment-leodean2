   import { useEffect, useState } from 'react';

   const DataFetcher = () => {
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('https://jsonplaceholder.typicode.com/posts');
           const result = await response.json();
           setData(result);
         } catch (err) {
           setError(err);
         } finally {
           setLoading(false);
         }
       };
       fetchData();
     }, []);

     if (loading) return <div>Loading...</div>;
     if (error) return <div>Error: {error.message}</div>;

     return (
       <ul>
         {data.map(item => (
           <li key={item.id}>{item.title}</li>
         ))}
       </ul>
     );
   };
    export default DataFetcher;