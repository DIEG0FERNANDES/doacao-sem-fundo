import React from 'react';
import { CardContainer, CardDescription, CardImage, CardInfo, CardSubtitle, CardTitle } from './styles';

interface CardProps {
    imageSource: any; 
    title: string;
    subtitle: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSource, title, subtitle, description }) => {
    return (
        <CardContainer>
            <CardImage source={imageSource} />
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardDescription>{description}</CardDescription>
            </CardInfo>
        </CardContainer>
    );
};

export default Card;