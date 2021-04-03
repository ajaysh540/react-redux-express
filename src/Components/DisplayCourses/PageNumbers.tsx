import React from "react";
import leftPage from "../../Assets/leftPage.svg";
import rightPage from "../../Assets/rightPage.svg";

interface handlePagination {
  totalPages: number;
  changePage: React.MouseEventHandler<HTMLButtonElement>;
  currentPage: number;
}
const PageNumbers: React.FC<handlePagination> = (pageHandle) => {
  const { totalPages, changePage, currentPage } = pageHandle;
  let pages = [];
  pages.push(
    <button
      onClick={changePage}
      value={currentPage - 1}
      key={0}
      disabled={currentPage - 1 === 0}
    >
      <img src={leftPage} alt="Previous Page" />
    </button>
  );
  for (let index = 1; index <= totalPages; index++) {
    pages.push(
      <button
        onClick={changePage}
        value={index}
        key={index}
        disabled={index === currentPage}
        className={index === currentPage ? "active" : ""}
      >
        {index}
      </button>
    );
  }
  pages.push(
    <button
      onClick={changePage}
      value={currentPage + 1}
      disabled={currentPage === totalPages}
      key={totalPages + 1}
    >
      <img src={rightPage} alt="Next Page" />
    </button>
  );
  return <>{pages}</>;
};

export default PageNumbers;
