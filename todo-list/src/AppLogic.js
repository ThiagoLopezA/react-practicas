import { useState } from "react";

const AppLogic = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});
  const handleModal = () => setShowModal(!showModal);
  const handleTask = e => {
    let data = {
      name: e.target.taskName.value,
      status: e.target.taskStatus.value,
      description: e.target.taskDescription.value,
    };
  };
  return { handleModal, handleTask, showModal };
};

export default AppLogic;
