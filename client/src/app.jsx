import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import "./app.scss";

export function App() {
  return (
    <div className="appContainer">
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}
