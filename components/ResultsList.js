import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";

export default function ResultsList({ title, results }) {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5,
    }
});