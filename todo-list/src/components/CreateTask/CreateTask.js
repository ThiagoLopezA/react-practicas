/*Bootstrap component*/
import { Modal } from "react-bootstrap";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CreateTask.module.css";
const CreateTask = props => {
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form className={styles.form} onSubmit={props.handleTask}>
          <h2 className={styles.form__title}>Create a new task</h2>
          <input
            id="task-name"
            type="text"
            placeholder="Task name"
            name="taskName"
            className={styles.form__input}
          />
          <select className={styles.form__select} name="taskStatus">
            <option className={styles.select__placeholder} value="">
              Select importance level
            </option>
            <option value="important">Important</option>
            <option value="canWait">Can wait</option>
            <option value="dontWorry">Don't worry</option>
          </select>
          <input
            type="text"
            placeholder="Task description"
            name="taskDescription"
            className={styles.form__input}
          />
          <button className={styles.form__button} type="submit">
            Add task
          </button>
          <button
            type="button"
            className={styles.form__button__close}
            onClick={props.handleModal}
          >
            Close
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateTask;
