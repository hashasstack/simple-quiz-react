import { Quiz } from "./components/Quiz";
import { Start } from "./components/Start";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
        {/* Start page */}
        <Start />
        {/* Quiz page */}
        <Quiz />
    </DataProvider>
  );
}

export default App;
