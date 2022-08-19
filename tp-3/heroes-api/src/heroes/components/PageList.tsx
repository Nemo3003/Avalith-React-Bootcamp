import React from "react";
//This component is used to get the navigation between pages
export const PageList = ({
  renderPageNumbers,
  pageDecrementBtn,
  pageIncrementBtn,
  handleNextPage,
  handlePrevPage,
  currentPage,
  pages,
}:any) => {
  return (
    <>
      <div className="list-section">
          <ul className="container-list-ul">
            <li>
              <button
                onClick={() => handlePrevPage()}
                disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <li>
              <button
                onClick={() => handleNextPage()}
                disabled={currentPage === pages.length ? true : false}
              >
                Next
              </button>
            </li>
          </ul>
      </div>
    </>
  );
};
