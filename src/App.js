import "./App.css";
import Layout from "./components/Layout/Layout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Samshop</title>
        <meta name="description" content="Samshop" />
      </Helmet>
      <Layout />
    </>
  );
}

export default App;
