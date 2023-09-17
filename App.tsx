import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-white">
      <View className="w-full h-[80px] flex flex-row items-center justify-between bg-red-500">
        <Text className="text-[20px] ">Header Here</Text>
        <Text className="text-[20px] ">Header Here2</Text>
      </View>
      <Text>Open up App.tsx to start working on your appppr!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
