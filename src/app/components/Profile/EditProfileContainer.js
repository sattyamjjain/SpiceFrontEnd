/* eslint-disable no-unused-vars */
import React from "react";
import {Button,TextField,Typography,FormControlLabel,Radio,RadioGroup} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import { useDropzone } from 'react-dropzone';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:auto;
    height:auto;
    padding:2vh;
`;

const FormContainer = styled.div`
`;

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

const PicUploader = (props) => {
    const { setFieldValue } = props;
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        getBase64(acceptedFiles[0])
          .then((res) => {
            setFieldValue("profilePic", res);
          })
          .catch((err) => {
            console.log('error',err)
          });
      },
    })
    return (
      <div>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <div style={{backgroundColor:'#E1EAEC',textAlign:'center', height:'150px',backgroundImage:`${props.value}`}} {...getRootProps({ className: 'dropzone' })} >
              <FeatherIcon.Upload style={{ position:'relative',top: '40%'}}/>
          </div>
        </div>
     </div>
    )
}

class EditProfileContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            gender:''
        }
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this)
    }

    componentDidMount(){
        console.log('userData',this.props.userData)
    }

    handleGenderChange = (event) => {
        this.setState({
            gender:event.target.value
        })
      };

    handleProfileSubmit = (formValues) =>{
        formValues.gender = this.state.gender
        console.log('formValues',formValues)
        this.props.editProfile(formValues,this.props.userData.user.id)
        //window.location.reload(true)
    }

  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Edit Profile
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ 
                        name:this.props.userData ? this.props.userData.user.fullName : '',
                        username:this.props.userData ? this.props.userData.user.username :'',
                        dob:this.props.userData ? this.props.userData.user.dob :'',
                        profilePic:this.props.userData ? this.props.userData.user.profilePic :'',
                        email:this.props.userData ? this.props.userData.user.email :'',
                        mobile:this.props.userData ? this.props.userData.user.mobile :'',
                        alternateMobile:this.props.userData ? this.props.userData.user.alternateMobile :'',
                        location:this.props.userData ? this.props.userData.user.location :''
                    }}
                    onSubmit={this.handleProfileSubmit}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div >
                                    <div style={{paddingTop:'10px'}}>
                                       <PicUploader setFieldValue={setFieldValue} name="profilePic"/>
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="name"
                                            name="name"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="name"
                                            name="username"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <RadioGroup name="gender" onChange={this.handleGenderChange}>
                                            <FormControlLabel value="female" control={<Radio size='small'/>} label="Female"/>
                                            <FormControlLabel value="male" control={<Radio size='small'/>} label="Male"/>
                                            <FormControlLabel value="other" control={<Radio size='small'/>} label="Other" />
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="date"
                                            name="dob"
                                            placeholder="Date of Birth"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dob}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            placeholder="Mobile No."
                                            type="mobile"
                                            name="mobile"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobile}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="mobileNo"
                                            placeholder="Alternate Mobile No."
                                            name="alternateMobile"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.alternateMobile}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="location"
                                            name="location"
                                            placeholder="Location"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                        />
                                    </div>
                                    <div style={{paddingTop:'20px',display:'flex',justifyContent:'space-between'}}>
                                        <Button variant="contained" disabled={isSubmitting} color="default" style={{textTransform:'capitalize'}}>
                                            Close
                                        </Button>
                                        <Button variant="contained" type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </FormContainer>
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { success } = state.users;
    return { success };
  }
  
const actionCreators = {
    editProfile:userActions.editProfile
};

const connectedEditProfileContainer = connect(mapState, actionCreators)(EditProfileContainer);
export { connectedEditProfileContainer as EditProfileContainer };