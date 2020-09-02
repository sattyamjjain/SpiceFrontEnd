/* eslint-disable no-unused-vars */
import React from "react";
import {Tab,Tabs,Box,Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {TabReviewContainer} from './TabReviewContainer';

const MainContainer = styled.div`
    border-radius:2px;
    border-color:#000000;
    width:100%;
`;

const TabPanelContainer = styled.div`
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <TabPanelContainer
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </TabPanelContainer>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

export default class TabContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }

    a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
    render() {

        const handleChange = (event, newValue) => {
          this.setState({
              value:newValue
          })
        };
        return (
            <MainContainer>
                <Tabs value={this.state.value} onChange={handleChange} style={{width:'100%'}}>
                    <Tab label="Description" {...this.a11yProps(0)} style={{border:'none',borderWidth:0}} />
                    <Tab label="Size Chart" {...this.a11yProps(1)} />
                    <Tab label="Review" {...this.a11yProps(2)} />
                </Tabs>
                <TabPanel value={this.state.value} index={0}>
                    <Typography variant="body1">
                    Add an extra dose of style with this raw look henley t-shirt from the house of Tinted. Team this T-shirt with distressed jeans and leather sandals for a relaxed and cool look.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                  <TabReviewContainer />
                </TabPanel>
            </MainContainer>
        );
    }
}
