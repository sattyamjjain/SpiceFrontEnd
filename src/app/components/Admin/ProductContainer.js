/* eslint-disable no-unused-vars */
import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Button,TableContainer,TableBody,Typography,Modal,ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import {DeleteProduct} from './ProductActions/DeleteProduct';
import DeleteProductSizeContainer from './ProductActions/DeleteProductSizeContainer';
import {AddEditProductSize} from './ProductActions/AddEditProductSize';
import {AddEditProduct} from './ProductActions/AddEditProduct';
import {ImageUploaderContainer} from './ProductActions/ImageUploaderContainer';
import withStyles from "@material-ui/core/styles/withStyles";
import { productActions } from '../../_actions';
import { connect } from 'react-redux';

const DELETE = 'delete';
const DELETE_PRODUCT_SIZE = 'delete_product_size';
const EDIT_PRODUCT_SIZE = 'edit_product_size';
const EDIT_PRODUCT = 'edit_product';
const ADD_PRODUCT = 'add_product';
const ADD_PRODUCT_SIZE = 'ADD_PRODUCT_SIZE'
const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

const MainContainer = styled.div`
    width:100%;
    padding:5vh
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

const ExpansionContainer = styled.div`
`;

const IconLeftExpansionPanelSummary = withStyles({
    expandIcon: {
        order: -1
    }
})(ExpansionPanelSummary);

class ProductContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibleActionPopup:null,
            product:null,
            productDesc:null
        }
        this.handleActionPopupClose = this.handleActionPopupClose.bind(this);
    }

    componentDidMount(){
        this.props.getAll()
    }

    onActionClickHandler(action,data) {
        switch (action) {
            case DELETE:
                this.handleDeleteAction(data);
                break;
            case DELETE_PRODUCT_SIZE:
                this.handleDeleteProductSizeAction(data);
                break;
            case EDIT_PRODUCT:
                this.handleEditAction(data);
                break;
            case EDIT_PRODUCT_SIZE:
                this.handleEditProductSizeAction(data);
                break;
            case ADD_PRODUCT_SIZE:
                this.handleAddProductSizeAction(data);
                break;
            case ADD_PRODUCT:
                this.handleAddAction();
                break;
            case UPLOAD_IMAGE:
                this.handleUploadImage(data);
                break;
            default:
                break;
            }
    }

    handleDeleteAction(data) {
        this.setState({
            visibleActionPopup:DELETE,
            product:data
        })
    }

    handleDeleteProductSizeAction(data) {
        this.setState({
            visibleActionPopup:DELETE_PRODUCT_SIZE,
            productDesc:data
        })
    }

    handleEditAction(data) {
        this.setState({
            visibleActionPopup:EDIT_PRODUCT,
            product:data
        })
    }

    handleEditProductSizeAction(data) {
        this.setState({
            visibleActionPopup:EDIT_PRODUCT_SIZE,
            productDesc:data
        })
    }

    handleAddProductSizeAction(data) {
        this.setState({
            visibleActionPopup:ADD_PRODUCT_SIZE,
            product:data
        })
    }

    handleAddAction() {
        this.setState({
            visibleActionPopup:ADD_PRODUCT
        })
    }

    handleUploadImage(data) {
        this.setState({
            visibleActionPopup:UPLOAD_IMAGE,
            product:data
        })
    }

    handleActionPopupClose() {
        this.setState({
            visibleActionPopup:null
        })
    }

  render() {
    const { products } = this.props;

    const deleteBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteProduct product={this.state.product} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const deleteProductSizeBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteProductSizeContainer productDesc={this.state.productDesc} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const editProductSizeBody = (
        <Paper style={{width:'45vh',height:'60vh'}}>
            <AddEditProductSize isEdit={true} productDesc={this.state.productDesc} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const addProductSizeBody = (
        <Paper style={{width:'45vh',height:'60vh'}}>
            <AddEditProductSize product={this.state.product} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const addProductBody = (
        <Paper style={{width:'70vh',height:'40vh'}}>
            <AddEditProduct handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const editProductBody = (
        <Paper style={{width:'70vh',height:'40vh'}}>
            <AddEditProduct isEdit={true} product={this.state.product} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    const uploadImageBody = (
        <Paper style={{width:'40vh',height:'40vh'}}>
            <ImageUploaderContainer product={this.state.product} handleActionPopupClose={this.handleActionPopupClose}/>
        </Paper>
    );

    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Products List</Typography>
                <Button variant="contained" color="primary" onClick={this.onActionClickHandler.bind(this,ADD_PRODUCT)}>Add New Product</Button>
            </HeadContainer>
            <ProductListContainer>
                {
                    products !== null && typeof products !== "undefined" && products.length !== 0 && products.map((product,index)=>(
                        <ExpansionContainer key={index}>
                            <ExpansionPanel>
                                <IconLeftExpansionPanelSummary
                                expandIcon={<FeatherIcon.ChevronDown />}
                                style={{paddingLeft:'2vh'}}
                                >
                                    <Typography variant="h6" style={{paddingLeft:'1vh'}}>
                                        {product === null ? '' : product.product.title}
                                    </Typography>
                                    <div style={{marginLeft:'auto'}}>
                                        <Button variant="text" onClick={this.onActionClickHandler.bind(this,ADD_PRODUCT_SIZE,product)}>
                                            <FeatherIcon.PlusCircle size={20}/>
                                        </Button>
                                        <Button variant="text" onClick={this.onActionClickHandler.bind(this,UPLOAD_IMAGE,product)}>
                                            <FeatherIcon.Upload size={20}/>
                                        </Button>
                                        <Button variant="text" onClick={this.onActionClickHandler.bind(this,EDIT_PRODUCT,product)}>
                                            <FeatherIcon.Edit size={20} />
                                        </Button>
                                        <Button variant="text" onClick={this.onActionClickHandler.bind(this,DELETE,product)}>
                                            <FeatherIcon.Trash2 size={20}/>
                                        </Button>
                                    </div>
                                </IconLeftExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <TableContainer>
                                        <Table  aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Size</TableCell>
                                                    <TableCell align="center">Price</TableCell>
                                                    <TableCell align="center">MRP</TableCell>
                                                    <TableCell align="center">Discount</TableCell>
                                                    <TableCell align="center">Availability</TableCell>
                                                    <TableCell align="center">Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            {
                                                product !== null && product.productDescriptions.length !== 0 && (
                                                <TableBody>
                                                    {
                                                        product.productDescriptions.map((productDesc,i)=>(
                                                        <TableRow key={i}>
                                                            <TableCell align="center">
                                                                {productDesc === null ? '' : productDesc.size}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {productDesc === null ? '' : productDesc.price}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {productDesc === null ? '' : productDesc.mrp}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {productDesc === null ? '' : productDesc.discount}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {productDesc === null ? '' : productDesc.availability}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <LinkContainer>
                                                                    <Button onClick={this.onActionClickHandler.bind(this,DELETE_PRODUCT_SIZE,productDesc)}>
                                                                        <FeatherIcon.Trash2
                                                                            color="#000000"
                                                                            size={20}
                                                                        />
                                                                    </Button>
                                                                    <Button onClick={this.onActionClickHandler.bind(this,EDIT_PRODUCT_SIZE,productDesc)}>
                                                                        <FeatherIcon.Edit
                                                                            color="#000000"
                                                                            size={20}
                                                                        />
                                                                    </Button>
                                                                </LinkContainer>
                                                            </TableCell>
                                                        </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                                )
                                            }
                                        </Table>
                                    </TableContainer>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <PaddingContainer/>
                        </ExpansionContainer>
                    )) 
                }
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
                open={this.state.visibleActionPopup===ADD_PRODUCT_SIZE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
            >
                {addProductSizeBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===EDIT_PRODUCT}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'25%'}}
            >
                {editProductBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===ADD_PRODUCT}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'25%'}}
            >
                {addProductBody}
            </Modal>
            <Modal
                open={this.state.visibleActionPopup===UPLOAD_IMAGE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'25%'}}
            >
                {uploadImageBody}
            </Modal>
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { products } = state.product;
    return { products };
}

const actionCreators = {
    getAll: productActions.getAll,
};

const connectedProductContainer = connect(mapState, actionCreators)(ProductContainer);
export { connectedProductContainer as ProductContainer };