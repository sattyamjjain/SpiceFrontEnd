import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Button,TableContainer,TableBody,Typography,Modal,ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import DeleteProduct from './ProductActions/DeleteProduct';
import DeleteProductSize from './ProductActions/DeleteProductSize';
import EditProductSize from './ProductActions/EditProductSize';
import AddEditProduct from './ProductActions/AddEditProduct';

const DELETE = 'delete';
const DELETE_PRODUCT_SIZE = 'delete_product_size';
const EDIT_PRODUCT_SIZE = 'edit_product_size';
const EDIT_PRODUCT = 'edit_product';
const ADD_PRODUCT = 'add_product';

const MainContainer = styled.div`
    width:100%;
`;

const HeadContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:5vh;
`;

const ProductListContainer = styled.div`

`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
`;

export default  class ProductContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibleActionPopup:null
        }
        this.handleActionPopupClose = this.handleActionPopupClose.bind(this);
    }

    onActionClickHandler(action) {
    switch (action) {
        case DELETE:
            this.handleDeleteAction();
            break;
        case DELETE_PRODUCT_SIZE:
            this.handleDeleteProductSizeAction();
            break;
        case EDIT_PRODUCT:
            this.handleEditAction();
            break;
        case EDIT_PRODUCT_SIZE:
            this.handleEditProductSizeAction();
            break;
        case ADD_PRODUCT:
            this.handleAddAction();
            break;
        default:
            break;
        }
    }

    handleDeleteAction() {
        this.setState({
            visibleActionPopup:DELETE
        })
    }

    handleDeleteProductSizeAction() {
        this.setState({
            visibleActionPopup:DELETE_PRODUCT_SIZE
        })
    }

    handleEditAction() {
        this.setState({
            visibleActionPopup:EDIT_PRODUCT
        })
    }

    handleEditProductSizeAction() {
        this.setState({
            visibleActionPopup:EDIT_PRODUCT_SIZE
        })
    }

    handleAddAction() {
        this.setState({
            visibleActionPopup:ADD_PRODUCT
        })
    }

    handleActionPopupClose() {
        this.setState({
            visibleActionPopup:null
        })
    }

  render() {
    const deleteBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteProduct/>
        </Paper>
    );

    const deleteProductSizeBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteProductSize/>
        </Paper>
    );

    const editProductSizeBody = (
        <Paper style={{width:'45vh',height:'50vh'}}>
            <EditProductSize/>
        </Paper>
    );

    const addEditProductBody = (
        <Paper style={{width:'80vh',height:'90vh'}}>
            <AddEditProduct/>
        </Paper>
    );

    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Products List</Typography>
                <Button variant="contained" color="primary" onClick={this.onActionClickHandler.bind(this,ADD_PRODUCT)}>Add New Product</Button>
            </HeadContainer>
            <ProductListContainer>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<FeatherIcon.ChevronDown />}
                    id="panel1a-header"
                    style={{paddingLeft:'5vh'}}
                    >
                    <div style={{display:'flex',justifyContent:'flex-start'}}>
                        <Typography variant="h6">
                            1. Haldi
                        </Typography>
                        <Button variant="text">
                            <FeatherIcon.Edit size={20} onClick={this.onActionClickHandler.bind(this,EDIT_PRODUCT)}/>
                        </Button>
                        <Button variant="text" onClick={this.onActionClickHandler.bind(this,DELETE)}>
                            <FeatherIcon.Trash2 size={20}/>
                        </Button>
                    </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <TableContainer>
                            <Table  aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">Size</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Availability</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell align="center">500gm</TableCell>
                                        <TableCell align="center">400 Rs.</TableCell>
                                        <TableCell align="center">In Stock</TableCell>
                                        <TableCell align="center">
                                            <LinkContainer>
                                                <Button onClick={this.onActionClickHandler.bind(this,DELETE_PRODUCT_SIZE)}>
                                                    <FeatherIcon.Trash2
                                                        color="#000000"
                                                        size={20}
                                                    />
                                                </Button>
                                                <Button onClick={this.onActionClickHandler.bind(this,EDIT_PRODUCT_SIZE)}>
                                                    <FeatherIcon.Edit
                                                        color="#000000"
                                                        size={20}
                                                    />
                                                </Button>
                                            </LinkContainer>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ProductListContainer>
            <Modal
                open={this.state.visibleActionPopup===DELETE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
            >
                {deleteBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===DELETE_PRODUCT_SIZE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
            >
                {deleteProductSizeBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===EDIT_PRODUCT_SIZE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
            >
                {editProductSizeBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===EDIT_PRODUCT}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'8%'}}
            >
                {addEditProductBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===ADD_PRODUCT}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'8%'}}
            >
                {addEditProductBody}
            </Modal>
        </MainContainer>
    );
  }
}