import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNode = () => {
    return (
        <div className='main_note'>
            <form>
                <TextField label='Title' variant='outlined' fullWidth />
                <TextField
                    label='Write a Note...'
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={5}
                />
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                >
                    Add
                </Button>
            </form>
        </div>
    );
};

export default CreateNode;
