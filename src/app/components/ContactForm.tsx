import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWdth: 500,
  width: { xs: "90%", md: "50%" },
  bgcolor: "#780000",
  border: "none",
  boxShadow: 24,
  p: 4,
};

interface ContactFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function ContactForm({ open, handleClose }: ContactFormProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography id="modal-modal-title" variant="h2" sx={{ color: "#fff" }}>
          YOU WANNA TASTE IT?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "#fff" }}>
          Curious about Ciliegia Grappa? Fill in your details below, and we'll
          get in touch to tell you more about this unique experience.
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          id="name"
          label="Name"
          variant="standard"
          required
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: { color: "#fff" },
            disableUnderline: false,
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "#fff",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#fff",
            },
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          type="email"
          variant="standard"
          required
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: { color: "#fff" },
            disableUnderline: false,
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "#fff",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#fff",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            bgcolor: "#000000",
            color: "#fff",
            width: "100%",
            borderRadius: 0,
          }}
        >
          CONTACT ME
        </Button>
      </Box>
    </Modal>
  );
}
