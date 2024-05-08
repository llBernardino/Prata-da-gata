import React from 'react';
import Col from 'react-bootstrap/Col';

import pontos from '../../img/3pontos.png'
import {
Card, Title, Image,Figure,Caption,Image1, BackgroundPratas,Descript,ValueDescript,ValueText,PureText,Icon,Iconpoints,Boxtext
} from './style.js'

export const Col1 = (props) => {

    return (
        <Col lg={3} md={6} sm={12}  className="justify-content-center d-flex my-5">
            <Card>
                <a href={props.linkwhats}>
                    <BackgroundPratas>
                        <Image1 src={props.imagem}  alt='React' />
                    </BackgroundPratas>
                </a> 
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


