import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResult();
  // console.log(results);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Ucuz Restorantlar"
        results={filterResultsByPrice("₺")}
      />
      <ResultsList
        title="Uygun Restorantlar"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="Pahalı Restorantlar"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
