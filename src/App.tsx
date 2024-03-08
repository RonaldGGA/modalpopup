import { useState } from "react";
import "./App.css";
import ModalPopUp from "./modalPopUp";
import useLocalStorage from "./useLocalStorage";
const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleModal = (action: boolean) => {
    setShowModal(action);
  };
  const handleToggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className="app" data-theme={theme}>
      <button className="showModal" onClick={() => handleToggleModal(true)}>
        Show Modal
      </button>
      {showModal && (
        <ModalPopUp
          header={
            <div>
              <p>Welcome to the Narrow Sea :)</p>
            </div>
          }
          body={
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                minus totam distinctio a tenetur perspiciatis provident
                voluptatum in alias laborum voluptas, fuga recusandae quae dicta
                pariatur asperiores. Repellendus, amet perferendis!
              </p>
            </div>
          }
          footer={
            <div>
              <p>
                Made By <a href="#"> I'm Ronald</a>
              </p>
            </div>
          }
          handleToggleModal={handleToggleModal}
        />
      )}
      <div className="theme__container">
        <div onClick={handleToggleTheme} className="theme__container2">
          <button
            className={`theme__button ${
              theme == "light" ? "light" : ""
            }`}></button>
        </div>
      </div>
    </div>
  );
};

export default App;
