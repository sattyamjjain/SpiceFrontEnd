import React from "react";
import {Table,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

const HeadContainer = styled.div`

`;

const SubMainContainer = styled.div`
    width:100%;
    padding-top:30px;
    display:flex;
    justify-content:space-between;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
`;

class WishListContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render() {
        return (
            <MainContainer>
                <HeadContainer>
                    <Breadcrumbs 
                        separator={
                        <FeatherIcon.ChevronRight
                            color="#000000"
                            size={20}
                        />
                        } 
                        aria-label="breadcrumb"
                        style={{
                            paddingBottom:'10px'
                        }}
                    >
                        <Link color="inherit" href="/" onClick={this.handleClick}>
                            Home
                        </Link>
                        <Typography color="textPrimary">Wishlist</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        Wishlist
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center">Product Image</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Availability</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row" align="center">
                                        <img src={require('../images/haldi.jpg')} alt="haldi" style={{height:'80px',width:'80px'}}/>
                                    </TableCell>
                                    <TableCell align="center">Haldi</TableCell>
                                    <TableCell align="center">400 Rs.</TableCell>
                                    <TableCell align="center">In Stock</TableCell>
                                    <TableCell align="center">
                                        <LinkContainer>
                                            <Button>
                                                <FeatherIcon.Trash2
                                                    color="#000000"
                                                    size={24}
                                                />
                                            </Button>
                                            <Button>
                                                <FeatherIcon.Truck
                                                    color="#000000"
                                                    size={24}
                                                />
                                            </Button>
                                        </LinkContainer>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

export {WishListContainer}