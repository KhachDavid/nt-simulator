import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Pagination = ({ page, totalPages, onChangePage, rowsPerPage }) => {
  const handleClick = (newPage) => {
    onChangePage(newPage);
  };

  const totalPagesArray = [...Array(totalPages).keys()].map((i) => i + 1);

  // Calculate start and end page numbers for the current group of page buttons
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(startPage + 4, totalPages);

  return (
    <>
      {/* Display previous button if not on the first page group */}
      {startPage > 1 && (
        <Button
          variant="outlined"
          onClick={() => handleClick(1)}
          sx={{
            py: "12px",
            px: "24px",
            m: "8px",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          &lt;&lt;
        </Button>
      )}
      {/* Display page buttons for the current group */}
      {totalPagesArray.slice(startPage - 1, endPage).map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === page ? "contained" : "outlined"}
          onClick={() => handleClick(pageNumber)}
          sx={{
            py: "12px",
            px: "24px",
            m: "8px",
            borderRadius: "8px",
            backgroundColor: pageNumber === page ? "#3f51b5" : "#fff",
          }}
        >
          {pageNumber}
        </Button>
      ))}
      {/* Display next button if not on the last page group */}
      {endPage < totalPages && (
        <Button
          variant="outlined"
          onClick={() => handleClick(endPage + 1)}
          sx={{
            py: "12px",
            px: "24px",
            m: "8px",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          &gt;&gt;
        </Button>
      )}
    </>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
