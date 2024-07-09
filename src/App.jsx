import "./App.css";
import ArtifactCode from "./ArtifactCode";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <SpeedInsights/>
      <ArtifactCode />
    </>
  );
}

export default App;
