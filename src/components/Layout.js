import { Box } from '@mui/material'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate, } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns'
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';





const drawerWidth = 220;

const StyledAppbar = styled(AppBar)(({ theme }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    position: "fixed",
    color: "primary"
    // elevation={ 0 }
    // alignItems: 'flex-start',
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    // '@media all': {
    //     minHeight: 128,
    // },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    toolbar: theme.mixins.toolbar
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
    flexGrow: 1
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginLeft: theme.spacing(2)
}));


// className={ location.pathname === item.path ? : null }

export default function Layout({ children }) {
    // const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    const navigate = useNavigate();
    // const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        },
    ]

    return (
        <Box sx={ { display: 'flex' } }>


            { /*appbar*/ }
            <StyledAppbar >
                <Toolbar>
                    <StyledTypo >
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </StyledTypo>
                    <Typography>Severus KEY</Typography>
                    <StyledAvatar src="/az.jpeg" />
                </Toolbar>
            </StyledAppbar>
            { /*appbar*/ }



            { /*Side drawer*/ }
            <Drawer anchor='left' variant='permanent' sx={ { width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, } } >
                <Box>
                    <Typography variant='h6' sx={ { p: 2 } } >My NotesBlog</Typography>
                </Box>

                { /*List/ Links*/ }
                <List>
                    { menuItems.map(item => (
                        <ListItem button key={ item.text } onClick={ () => navigate(item.path, { replace: true }) }>
                            <ListItemIcon> { item.icon } </ListItemIcon>
                            <ListItemText primary={ item.text } />
                        </ListItem>
                    )) }
                </List>

            </Drawer>
            { /*Side drawer*/ }



            { /*Side body*/ }
            <Box sx={ { width: '100%', backgroundColor: '#f9f9f9' } }>
                <StyledToolbar />
                { children }
            </Box>
            { /*Side body*/ }


        </Box>
    )
}
