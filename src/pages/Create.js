import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";

// import { styled } from '@mui/material/styles';

// const useStyles = styled(({ }) => ({
//     field: {
//         marginTop: 20,
//         marginBottom: 20,
//         display: 'block'
//     }
// }));

function MarginBar() {
    return (
        <Box
            sx={ {
                height: 20,
            } }
        />
    );
}


const Create = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [value, setValue] = React.useState('todos');
    const navigate = useNavigate();

    const handleChange = (event) => {
        // console.log(event.target.value)
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {
            // console.log(title, details, value)
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify({ title, details, value })
            }).then(() => navigate("/", { replace: true }))
        }
    }


    return (
        <Container >

            <MarginBar />

            <Typography variant='h6' component="h2" gutterBottom color='textSecondary'>
                Create a New Note
            </Typography>

            <Box onSubmit={ handleSubmit } component="form" noValidate autoComplete="off" sx={ { display: 'block', } }>

                <TextField sx={ { mt: 5, mb: 5 } } error={ titleError } onChange={ (e) => setTitle(e.target.value) } label='Note Title' color="secondary" variant="outlined" required fullWidth />

                <TextField error={ detailsError } onChange={ (e) => setDetails(e.target.value) } label='Details' color="secondary" variant="outlined" required fullWidth multiline rows={ 4 } />

                <MarginBar />

                <FormControl sx={ { mt: 3, mb: 3, display: 'block' } }>
                    <FormLabel id="demo-error-radios">Notes Categaries...</FormLabel>
                    <RadioGroup row value={ value } onChange={ handleChange }>
                        <FormControlLabel value="money" control={ <Radio color='secondary' /> } label="Money" />
                        <FormControlLabel value="todos" control={ <Radio color='secondary' /> } label="Todos" />
                        <FormControlLabel value="reminders" control={ <Radio color='secondary' /> } label="Reminders" />
                        <FormControlLabel value="works" control={ <Radio color='secondary' /> } label="Works" />
                    </RadioGroup>
                </FormControl>

                <MarginBar />

                <Button onClick={ () => console.log('you clicked me') } type="submit" color='secondary' variant='contained' size="small" endIcon={ <KeyboardArrowRightIcon /> }>
                    Submit
                </Button>
            </Box>

        </Container>
    );
}

export default Create;