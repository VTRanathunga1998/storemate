import ProductLeftCSS from "./ProductLeft.module.css";
import { useCart } from "../../../context/CartContext";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import { styled } from '@mui/material/styles';




const ProductLeft = () => {
  const { cart, removeFromCart, totalAmount } = useCart();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className={ProductLeftCSS["product-left-container"]}>
      <div className={ProductLeftCSS["product-selection"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
        </div>
      </div>
      <div className={ProductLeftCSS["selected-item"]}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="center">Rate</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {cart && cart.length > 0 ? (
                cart.map((cartProduct, key) => (
                  <StyledTableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="center">{cartProduct.quantity}</StyledTableCell>
                    <StyledTableCell align="left">{cartProduct.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {cartProduct.price} LKR
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {cartProduct.totalAmount} LKR
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Tooltip title="Remove">
                        <IconButton
                          onClick={() => removeFromCart(cartProduct.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableCell colSpan={6} align="center">
                  No item found
                </TableCell>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "	#D3D3D3",
            }}
          >
            Total Amount
          </h1>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            {totalAmount} LKR
          </h1>
          <Button variant="contained" size="small">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
