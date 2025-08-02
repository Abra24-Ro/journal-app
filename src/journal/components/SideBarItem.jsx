import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, id, date, imageUrls }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const handleActiveNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="subtitle1" fontWeight="medium" noWrap>
              {newTitle}
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="text.secondary" noWrap>
              {body}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
