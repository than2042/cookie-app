// import { useState } from 'preact/hooks'
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import "./app.scss";

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
