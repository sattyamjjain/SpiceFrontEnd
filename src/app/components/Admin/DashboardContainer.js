/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import {Paper,Typography} from '@material-ui/core';
import { Chart } from "react-google-charts";
import * as FeatherIcon from 'react-feather';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:100%;
    padding:4vh;
`;

const TopBarContainer = styled.div`
`;

const PaddingContainer = styled.div`
  padding:5vh
`;

const PaddingLeftRightContainer = styled.div`
  padding:2vh
`;

const CenterBarContainer = styled.div`
  display:flex;
  justify-content:space-between
`;

const ChartContainer = styled.div`
  width:70%
`;

const CenterRightBarContainer = styled.div`
`;

const IconDataContainer = styled.div`
  display:flex;
  justify-content:center
`;

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
      this.props.getAll()
  }

  render() {
    var number_of_users;
    if(typeof this.props.users !== "undefined"){
      number_of_users=this.props.users.length
    }
    return (
        <MainContainer>
          <TopBarContainer style={{display:'flex',justifyContent:'space-between'}}>
            <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center',width:'35vh'}}>
              <Typography variant="subtitle1" style={{paddingBottom:'1vh'}}>
                Total Visits
              </Typography>
              <IconDataContainer>
                <FeatherIcon.Users size={40} />
                <PaddingLeftRightContainer/>
                <Typography variant="h5">10434</Typography>
              </IconDataContainer>
            </Paper>
            <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center',width:'35vh'}}>
              <Typography variant="subtitle1" style={{paddingBottom:'1vh'}}>
                Total Orders
              </Typography>
              <IconDataContainer>
                <FeatherIcon.Truck size={40} />
                <PaddingLeftRightContainer/>
                <Typography variant="h5">564</Typography>
              </IconDataContainer>
            </Paper>
            <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center',width:'35vh'}}>
              <Typography variant="subtitle1" style={{paddingBottom:'1vh'}}>
                Total Users
              </Typography>
              <IconDataContainer>
                <FeatherIcon.Database size={40} />
                <PaddingLeftRightContainer/>
                <Typography variant="h5">{number_of_users}</Typography>
              </IconDataContainer>
            </Paper>
            <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center',width:'35vh'}}>
              <Typography variant="subtitle1" style={{paddingBottom:'1vh'}}>
                Total Revenue
              </Typography>
              <IconDataContainer>
                <FeatherIcon.DollarSign size={40} />
                <PaddingLeftRightContainer/>
                <Typography variant="h5">45300</Typography>
              </IconDataContainer>
            </Paper>
          </TopBarContainer>
          <PaddingContainer />
          <CenterBarContainer>
            <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center'}}>
              <Chart
                width={'800px'}
                height={'400px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Products', 'Sales', 'Expenses', 'Profit'],
                  ['Haldi', 1000, 400, 200],
                  ['Mirchi', 1170, 460, 250],
                  ['Dhaniya', 660, 1120, 300],
                  ['Khatai', 1030, 540, 350],
                  ['Namak', 1650, 740, 830],
                ]}
                options={{
                  chart: {
                    title: 'ShuklaMasala Performance',
                    subtitle: 'Sales, Expenses, and Profit',
                  },
                }}
                rootProps={{ 'data-testid': '2' }}
              />
            </Paper>
            <CenterRightBarContainer>
              <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'4vh',textAlign:'center'}}>
                <Typography variant="subtitle1" style={{paddingBottom:'1vh'}}>
                  Total Reviews
                </Typography>
                <IconDataContainer>
                  <Typography variant="h5">45300</Typography>
                </IconDataContainer>
              </Paper>
              <PaddingContainer />
              <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',textAlign:'center'}}>
                <Chart
                  width={'300px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                  ]}
                  options={{
                    title: 'Overall Reviews',
                    is3D: true,
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
              </Paper>
            </CenterRightBarContainer>
          </CenterBarContainer>
        </MainContainer>
    );
  }
}

function mapState(state) {
  const { users } = state.users;
  return { users };
}

const actionCreators = {
  getAll: userActions.getAll,
};

const connectedDashboardContainer = connect(mapState, actionCreators)(DashboardContainer);
export { connectedDashboardContainer as DashboardContainer };