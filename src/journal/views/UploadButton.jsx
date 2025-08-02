import { UploadOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export const UploadButton = ({ onFileChange, size = 56, isSaving }) => {
  return (
    <Tooltip title="Subir imágenes" arrow>
      <IconButton
        disabled={isSaving}
        component="label"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          width: size,
          height: size,
          borderRadius: "50%",
          boxShadow: "0 6px 24px rgba(102, 126, 234, 0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "&:hover": {
            transform: "translateY(-2px) scale(1.05)",
            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.5)",
            background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
          },
          "&:active": {
            transform: "translateY(-1px) scale(1.02)",
          },
        }}
      >
        <UploadOutlined sx={{ fontSize: size === 48 ? 20 : 24 }} />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={onFileChange}
          style={{ display: "none" }}
        />
      </IconButton>
    </Tooltip>
  );
};
