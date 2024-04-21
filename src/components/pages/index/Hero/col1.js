import React from 'react';
import Col from 'react-bootstrap/Col';

import pontos from '../../img/3pontos.png'
import {
Card, Title, Image,Figure,Caption, BackgroundPratas,Descript,ValueDescript,ValueText,PureText,Icon,Iconpoints,Boxtext
} from './style.js'

export const Col1 = (props) => {

    return (
        <Col lg={3} md={6} sm={12}  className="justify-content-center d-flex my-5">
            <Card>
                <BackgroundPratas/>
                <Caption>
                    <Title>{props.title}</Title>
                    <Descript>{props.descript}</Descript>
                    <ValueDescript>
                        <Figure>
                            <Image src = {props.image} width={40} height={40}/>
                            <Boxtext>
                                <ValueText>{props.value}</ValueText>
                                <PureText>Prata 925.</PureText>
                            </Boxtext>
                        </Figure>
                        <Icon>
                            <Iconpoints src = {pontos} />
                        </Icon>
                    </ValueDescript>
                </Caption>
            </Card>
        </Col>
    );

}


