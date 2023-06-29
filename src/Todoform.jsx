import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import  Create  from '@mui/icons-material/Create';
import { useState } from 'react';


export default function Todoform({addtodos}) {

    const [text, setText] = useState("");

    const handlechange = (evt) => {
        setText(evt.target.value)
    }


    const handlesubmit = (e)=>{
        e.preventDefault();
        addtodos(text);
        setText('');

    }

    return (
        <ListItem>
<form onSubmit={handlesubmit}>
            <TextField id="outlined-basic" 
            label="Add Todo" 
            variant="outlined"
             onChange={handlechange} 
             value={text} 
             InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton aria-label="create todo"  edge="end" type='submit'>
                    <Create/>
                    </IconButton>
                  </InputAdornment>
                ),
             }}
            />
            </form>
        </ListItem>
    );
}