import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useFetch_DELETE from "../../services/http/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RemediationConfirmation = ({
  open,
  problemId,
  remediationId,
  handleOpen,
}) => {
  const { isLoading, error, data, deleteData } = useFetch_DELETE();
  const handleDelete = () => {
    deleteData(`/delete_remediation/${remediationId}/${problemId}`);
  };
  if (data?.status == 200) {
    handleOpen(false);
  }
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Your Request!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action cannot be undone. Are you sure you want to delete?
          </Typography>
          <br />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                handleDelete();
              }}
              sx={{ mr: 2 }}
            >
              {isLoading ? "Loading..." : "Delete"}
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleOpen(false);
              }}
            >
              Cancel
            </Button>
          </Box>{" "}
        </Box>
      </Modal>
    </div>
  );
};

export default RemediationConfirmation;
