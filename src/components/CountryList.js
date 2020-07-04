import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { fetchCountries } from "../services/countryAPIService";

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //check whether countrylist has data or not
    if (!countryList.length) {
      (async () => {
        let countries = await fetchCountries();
        //set the countrylist data
        setCountryList(countries);
        //After fetching country data loading become false
        setIsLoading(false);
      })();
    }
  });

  return (
    <div>
      <MaterialTable
        title="Country List"
        options={{ toolbar: true }}
        data={countryList}
        columns={[{ title: "Countries", field: "name" }]}
        isLoading={isLoading}
      ></MaterialTable>
    </div>
  );
};

export default CountryList;
