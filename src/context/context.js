import { createContext, useContext, useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import { KAYAK_URL, PATH } from "../constants/constants";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [airlinesData, setAirlinesData] = useState({
    allData: [],
    filteredData: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    OW: false,
    ST: false,
    SA: false,
  });

  const fetchData = async () => {
    try {
      let response = await fetchJsonp(`${KAYAK_URL}${PATH}`, {
        jsonpCallback: "jsonp",
      });
      let data = await response.json();
      if (data) {
        setAirlinesData({ allData: data, filteredData: data });
      } else {
        setAirlinesData({ allData: [], filteredData: [] });
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  // const fetchData = () => {
  //   fetchJsonp(`${KAYAK_URL}${PATH}`, {
  //     jsonpCallback: "jsonp",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data) {
  //         setAirlinesData({ allData: data, filteredData: data });
  //       } else {
  //         setAirlinesData({ allData: [], filteredData: [] });
  //       }

  //       setIsLoading(false);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(true);
  //     });
  // };
  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandler = (e) => {
    const target = e.target;
    const value = target.checked;
    const name = e.target.name;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filterByCheckbox = () => {
    const selectedFilters = [];
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        selectedFilters.push(key);
      }
    }
    if (!selectedFilters.length) {
      setAirlinesData({
        ...airlinesData,
        filteredData: airlinesData.allData,
      });
    } else {
      let tempData = [...airlinesData.allData];
      const filteredItems = tempData.filter((item) =>
        selectedFilters.includes(item.alliance)
      );
      setAirlinesData({
        ...airlinesData,
        filteredData: filteredItems,
      });
    }
  };
  useEffect(() => {
    filterByCheckbox();
  }, [filters]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        airlinesData,
        filters,
        onChangeHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
