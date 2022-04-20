import React from "react";
/* Styles */
import "./assets/css/App.css";
/* Components */
import Task from "./components/Task/Task";
import CreateTask from "./components/CreateTask/CreateTask";
/* Images */
import SearchIcon from "./assets/images/icons/search.png";
import AddIcon from "./assets/images/icons/plus.png";
/* Logic */
import AppLogic from "./AppLogic";
const App = () => {
  let { handleModal, handleTask, showModal } = AppLogic();

  return (
    <React.Fragment>
      {/* Header starts */}
      <header className="header">
        <h1 className="header__title">Tasks list.</h1>
        <h4 className="header__subtitle">make it simple</h4>
        <form className="form">
          <div className="form__container">
            <input
              className="container__searchInput"
              type="text"
              placeholder="Search..."
              name="search"
            />
            <button className="container__button container__button--search">
              <img
                src={SearchIcon}
                className="button__image"
                alt="search-icon"
              />
            </button>
          </div>
        </form>
        <div className="header__options">
          <div className="options__container">
            <button
              className="container__button container__button--add"
              onClick={handleModal}
            >
              <img
                src={AddIcon}
                alt="add icon"
                className="button__image button__image--add"
              />
              Add a new task
            </button>
          </div>
        </div>
      </header>
      {/* Header ends */}
      <main className="main">
        <div className="main__container">
          <Task />
        </div>
        <CreateTask
          showModal={showModal}
          handleModal={handleModal}
          handleTask={handleTask}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
