import { Text, View, Image } from "react-native";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#03F244",
        tabBarInactiveTintColor: "#CDCDE0",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Netstats",
        }}
      />
        <Tabs.Screen
        name="settings"
        options={{
          title: "Netstats",
        }}
      />
    </Tabs>
  );
};

export default _layout;
