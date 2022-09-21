import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
import { blue, } from '@mui/material/colors';


// const StyledAvatar = styled(Avatar)(({ theme }) => ({

//     bgcolor: (note) => {
//         if (note.value === 'works') {
//             return yellow[700]
//         }
//         if (note.value === 'todos') {
//             return red[700]
//         }
//         if (note.value === 'money') {
//             return green[500]
//         }
//         return blue[500]
//     }

// }));

const NoteCard = ({ note, handleDelete }) => {
    return (
        <Box>
            <Card elevation={ 24 }>

                <CardHeader
                    avatar={
                        <Avatar sx={ { bgcolor: blue[700] } }> { note.value[0].toUpperCase() } </Avatar >
                    }
                    title={ note.title } subheader={ note.value }
                    action={ <IconButton onClick={ () => handleDelete(note.id) }> <DeleteOutlined /> </IconButton> }
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">{ note.details }</Typography>
                </CardContent>

            </Card>
        </Box >
    );
}

export default NoteCard;





