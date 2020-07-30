import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    Container,
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function DenseTable() {
    const classes = useStyles();


    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const handleClickOpen = () => {
        setOpenDeleteDialog(true);
    };

    const handleClose = () => {
        setOpenDeleteDialog(false);
    };
    return (
        <Container maxWidth="lg" >
            <Box m={8}>
                <Card className={classes.root}>
                    <CardContent>

                        <Grid container spacing={3} justify="space-between">
                            <Grid item>
                                <Typography variant="h5" component="h2">
                                    User Management
                                </Typography>
                            </Grid>
                            <Grid item className="pull-right">
                                <Button variant="contained" color="primary" mx={2} to={'/users/create'} component={Link}>
                                    Create New
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <TableContainer component={Paper} mx="auto">
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*{rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                        {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}*/}
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Sample 1
                                    </TableCell>
                                    <TableCell>sample@sample.com</TableCell>
                                    <TableCell>Admin</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" to={'/users/edit'} component={Link}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" color="secondary"  onClick={handleClickOpen}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Box>

            <Dialog
                open={openDeleteDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Canel
                    </Button>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
