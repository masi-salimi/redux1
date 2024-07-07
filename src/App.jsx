import "./App.css";
import { Provider } from "react-redux";
import store from "./features/store";
import CackeContainer from "./components/CackeContainer";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";


function App() {
  return (
    <Provider store={store}>
      <div>Redux Demo</div>
      <CackeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
