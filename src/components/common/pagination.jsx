import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <a
            onClick={
              currentPage === 1 ? () => {} : () => onPageChange(currentPage - 1)
            }
            className="page-link"
          >
            Prev
          </a>
        </li>
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
        >
          <a
            onClick={
              currentPage === pagesCount
                ? () => {}
                : () => onPageChange(currentPage + 1)
            }
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
