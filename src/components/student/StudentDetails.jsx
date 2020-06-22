import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

class StudentDetails extends Component {

    render(){
        return(
        <Card>
            <form
                autoComplete="off"
                noValidate
            >
                <CardHeader
                title="Информация за студента"
                />
                <Divider />
                <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="fullName"
                        value={this.props.student.fullName}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="specialty"
                        value={this.props.student.specialty}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="facultyNumber"
                        value={this.props.student.facultyNumber}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="stream"
                        value={this.props.student.email}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="group"
                        value={this.props.student.stream}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        name="email"
                        value={this.props.student.stream}
                        variant="outlined"
                    />
                    </Grid>
                </Grid>
                </CardContent>
                <Divider />
            </form>
            </Card>
        )
    }

}


export default StudentDetails;