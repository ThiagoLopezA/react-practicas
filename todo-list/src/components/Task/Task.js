/* Styles */
import styles from "./Task.module.css";

/* Images */
import XIcon from "../../assets/images/icons/x.png";

const Task = () => {
  return (
    <article className={styles.article}>
      <div className={styles.article__info}>
        <h3 className={styles.info__title}>
          <i className={`fa-solid fa-circle ${styles.info__status}`}></i>
          Nombre de la tarea
        </h3>
        <p className={styles.info__description}>Descripción de la tarea</p>
      </div>
      <button className={styles.article__close}>
        <img src={XIcon} alt="x icon" className={styles.close__image} />
      </button>
    </article>
  );
};
/*
    <Col xs={10} md={5} className="card-wrapper d-flex m-2">
      <div className="task-info">
        <h3 className="task-title d-flex align-items-center">
          <i className="fa-solid fa-circle task-status status-dontWorry"></i>
          Nombre de la tarea
        </h3>
        <p className="task-desc mt-3">Descripción de la tarea</p>
      </div>
      <div className="task-buttons d-flex flex-column">
        <button className="img-button mb-2">
          <img src={XIcon} alt="x icon" />
        </button>
      </div>
    </Col>
    */

export default Task;
