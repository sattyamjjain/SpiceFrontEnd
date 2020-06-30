import React from "react";
import {Table,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

export default class PaymentContainer extends React.Component {
    render() {
        return (
            <MainContainer>
                PAYMENT
            </MainContainer>
        );
    }
}