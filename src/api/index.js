import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const apiKey = "AIzaSyCMkOqgHHD35e-Bta-z7Fl-yYkFNmerut4";

export * from "./search/search";
export * from "./videoStats/videoStats";
export * from "./videoDetails/videoDetails";
