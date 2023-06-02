import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import { AutoSizer } from "react-virtualized-auto-sizer";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  "& .MuiTableSortLabel-root": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTableSortLabel-icon": {
    marginLeft: 2,
    marginRight: -8,
  },
}));

const TableSortLabelStyled = styled(TableSortLabel)(({ theme }) => ({
  "& .MuiTableSortLabel-icon": {
    transition: "transform 0.2s ease-in-out",
  },
  "& .MuiTableSortLabel-active": {
    color: theme.palette.text.primary,
    "& .MuiTableSortLabel-icon": {
      transform: `rotate(${theme.direction === "rtl" ? "90deg" : "-90deg"})`,
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.action.hover,
  },
  "& .MuiTableCell-root": {
    textAlign: "left",
  },
}));
// align text to the right

const EnhancedTable = ({ rows, columns, onRowClick, preSort }) => {
  const [orderBy, setOrderBy] = React.useState(columns.length > 0 ? columns[0].id : "");
  const [order, setOrder] = React.useState("asc");

  // orderBy rows
  const sortedRows = React.useMemo(() => {
    const sortedRows = [...rows];
    if (orderBy && preSort) {
      sortedRows.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return order === "asc" ? -1 : 1;
        }

        if (a[orderBy] > b[orderBy]) {
          return order === "asc" ? 1 : -1;
        }

        return 0;
      });
    }

    return sortedRows;
  }, [rows, orderBy, order, preSort]);

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer
      component={Paper}
      elevation={5}
      sx={{
        borderRadius: 2,
        width: "max-content",
        // fix width overflow
        maxWidth: "100%",
        minWidth: "100%",
      }}
    >
      <Table aria-label="enhanced table" style={{ tableLayout: "auto" }}>
        <TableHead>
          <TableRow
            sx={{
              height: "auto",
            }}
          >
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                sortDirection={orderBy === column.id ? order : false}
                onClick={handleSort(column.id)}
              >
                <TableSortLabelStyled
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "desc"}
                >
                  {column.id}
                </TableSortLabelStyled>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row, index) => (
            <StyledTableRow
              key={row.uid}
              onClick={() => onRowClick(row)}
              sx={{ ...(index % 2 && { bgcolor: "background.default" }) }}
            >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {row[column.id]}
                </TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnhancedTable;
