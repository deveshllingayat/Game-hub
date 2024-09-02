// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  // slug: string;
  // games_count: number;
}
//this way we have hide our endpoint /genres from directly exposing in the component
// const useGenres = ()=> useData<Genre>('/genres');
// we have copied the data from the request and stored in data folder> genres.ts because genres will be same for each user so 
// we dont send a request each time instead we display the same data of the results each time to optimize performance
const useGenres = () => ({ data: genres, isLoading: false, error: null });

//We have built a generic hook useData for same functionality that we have used above
// interface FetchGenresResponse{
//     count:number;
//     results: Genre[];
// }
// const useGenres = ()=>{
//     const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//
//     return () => controller.abort();
//   }, []);
//   return { genres, error, isLoading };
// }

export default useGenres;
