import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    TextField,
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function DenseTable() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" >
            <Box m={8}>
                <Card className={classes.root}>
                    <CardContent>

                        <Grid container spacing={3} justify="space-between">
                            <Grid item>
                                <Typography variant="h5" component="h2">
                                    User Create
                                </Typography>
                            </Grid>
                            <Grid item className="pull-right">
                                <Button variant="contained" mx={2} to={'/users'} component={Link}>
                                    Back to List
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardContent>

                        <form className={classes.form} noValidate>
                            <Box width="50%">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                            </Box>
                            <Box width="50%">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                            </Box>
                            <Box width="50%">

                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
