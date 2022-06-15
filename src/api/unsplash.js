import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZfbtNYwcqSKq-FC1gaj46Fr26kXgO0PAX3WRQzSCNIE",
  },
});
