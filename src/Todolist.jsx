import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Todoitem from './Todoitem';
import Todoform from './Todoform';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// const initialtodos = [
//     { id: 1, text: 'walk the dog', completed: true },
//     { id: 2, text: 'walk the cat', completed: true },
//     { id: 3, text: 'walk the duck', completed: true },
//     { id: 4, text: 'walk the fish', completed: false },
//     { id: 5, text: 'walk the parrat', completed: true },
// ]

const getinitialdata =()=>{
   const data = JSON.parse(localStorage.getItem('todos'));
    if(!data) return [];
    return data;
};


export default function Todolist() {

    // const [todos, setTodos] = useState(initialtodos);
    const [todos,setTodos]=useState(getinitialdata);


    // saving to the local storage

    useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const remove = (id) => {
        setTodos((prev) => {
            return prev.filter((t) => t.id !== id);
        });
    };

    const toggletodo = (id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        });
    };

    const addtodos = (text) => {
        setTodos((prev) => {
          return   [...prev, { text: text, id: crypto.randomUUID(), completed: false }];
        });
    };

    const CustomTypography = styled(Typography)`
    font-family: 'Carter One', cursive; `;

    return (

    <Box sx={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        border:'2px solid black',
        p:3,
        m:3,

    }}> 

<CustomTypography variant="h2" component="h1" sx={{ flexGrow: 1 , marginBottom: '2rem'}} color="black">TODOS
</CustomTypography>



        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {todos.map((todo) => {
                // can do the return inline also as in case of toggletodo
                return <Todoitem todo={todo} key={todo.id} remove={remove} toggle={() => toggletodo(todo.id)} />

            })}
            <Todoform addtodos={addtodos} />
        </List>

        </Box>   
        
    );
}


// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }



