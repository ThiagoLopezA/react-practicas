import React from "react";

class Pagination extends React.Component {
  render() {
    const nextPage = () => this.props.onNext();
    const prevPage = () => this.props.onPrev();

    let [prev, next] = [this.props.prev, this.props.next];

    return (
      <nav>
        <ul className="pagination mt-5 justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="bg-green page-link" onClick={prevPage}>
                <i class="fa-solid fa-arrow-left"></i> Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className=" bg-green page-link" onClick={nextPage}>
                Next <i class="fa-solid fa-arrow-right"></i>
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
