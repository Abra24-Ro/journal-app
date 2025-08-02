import { ImageList, ImageListItem, Box, useMediaQuery, useTheme } from "@mui/material";

export const ImageGalery = ({ images }) => {
  const theme = useTheme();

  // Breakpoints responsivos
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));     // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900–1200px
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));       // >1200px

  // Determina el número de columnas según el tamaño
  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    if (isLg) return 4;
    return 3;
  };

  if (!images || images.length === 0) return null;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        my: 4,
        px: 2,
      }}
    >
      <ImageList variant="standard" cols={getCols()} gap={12}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={image}
              alt="Imagen"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
