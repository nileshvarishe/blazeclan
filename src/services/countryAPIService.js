import axios from "axios";

//fetch country data from "rapidapi"
export const fetchCountries = async () => {
    return axios({
        method: "GET",
        url: "https://restcountries-v1.p.rapidapi.com/all",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "9d01bd09b6msh28ecc0191ae81cbp1afa12jsn8977574f94d8",
          useQueryString: true,
        },
      }).then((response) => {
        return response.data;
      });
}
