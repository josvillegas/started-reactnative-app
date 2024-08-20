import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListingsDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ListingsDetails {id}</Text>
    </View>
  );
};

export default ListingsDetails;

const styles = StyleSheet.create({});
