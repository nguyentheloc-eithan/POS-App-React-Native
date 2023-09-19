import RootComponent from './screens';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});
export default function App() {
  return <RootComponent />;
}
