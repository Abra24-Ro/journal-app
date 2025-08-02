import { Box, Divider, Drawer, List } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240, isOpen, onToggleDrawer }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  const drawerContent = (
    <>
      <SideBarHeader displayName={displayName} />
      <Divider />
      <List>
        {notes.map((note) => (
          <SideBarItem
            key={note.id}
            {...note}
          />
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Drawer móvil/tablet */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onToggleDrawer}
        className="animate__animated animate__fadeInLeft animate__faster"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            zIndex: (theme) => theme.zIndex.appBar + 1,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Drawer escritorio */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  onToggleDrawer: PropTypes.func.isRequired,
};
