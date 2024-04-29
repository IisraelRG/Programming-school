import LateralMenu from "./components/LateralMenu";
import ContentMain from "./components/ContentMain";
import ContentTable from "./components/ContentTable";
import "./app.css";
function App() {
  return (
    <div>
      <div className="grid">
        <LateralMenu />
        <ContentMain />
        <ContentTable />
      </div>
    </div>
  );
}

export default App;
