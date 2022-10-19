import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../assets/img/logo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.9);",
  backdropFilter: "blur(5px)",
  borderRadius: "12px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            sx={{ marginBottom: "20px;" }}
            onClick={handleClose}
            variant="outlined"
            color="error"
          >
            Close
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Call us to order the tour
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h3" sx={{textAlign:"center"}}>
            Click on number of your choice to make a call
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={logo} className="modal__logo" alt="" />
          </Typography>
          <Typography sx={{ fontSize: "20px", }}>
            {" "}
            <a className="linkcall" href="tel:+37494421443">
            (+374) 94 42-14-43
            </a>
          </Typography>
          <Typography sx={{ fontSize: "20px"  }}>
            {" "}
            <a className="linkcall" href="tel:+37493421443">
              (+374) 93 42-14-43
            </a>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            <a className="linkcall" href="tel:+37496421221">
            (+374)  96 42-12-21
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
