import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./Homepage";
import { TransferWithinAStationBlac } from "./TransferWithinAStationBlac";
import { GroupComponent } from "./GroupComponent";
import { GroupComponent1 } from "./GroupComponent1";
import { Homepage1 } from "./Homepage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/transfer-within-a-station-black-24dp-1":
        title = "";
        metaDescription = "";
        break;
      case "/group-1560":
        title = "";
        metaDescription = "";
        break;
      case "/group-1559":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/transfer-within-a-station-black-24dp-1"
        element={<TransferWithinAStationBlac />}
      />

      <Route path="/group-1560" element={<GroupComponent />} />

      <Route path="/group-1559" element={<GroupComponent1 />} />

      <Route path="/homepage" element={<Homepage1 />} />
    </Routes>
  );
}
export default App;
