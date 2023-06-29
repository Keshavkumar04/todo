import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Padding } from '@mui/icons-material';
// import CommentIcon from '@mui/icons-material/Comment';


export default function Todoitem({todo,remove,toggle}){

    const labelId = `checkbox-list-label-${todo.id}`;

    const removetodo = () =>{
        remove(todo.id);
    };

    return (
        <ListItem

        sx={{margin:'5px', padding:'2px' }}
        //   key={todo.id} now here key is not needed as list is made in Todolist
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removetodo}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined}  dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed} // ==>>> this determines weather the checked box is checked or not
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={toggle}
              />
            </ListItemIcon> 
            {/* this takes the text value and displays it i.e= todo.text */}
            <ListItemText id={labelId} primary={todo.text} />   
          </ListItemButton>
        </ListItem>
      );
}