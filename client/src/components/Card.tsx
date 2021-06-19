import React, {FC} from 'react';
import {CardBack} from "./CardBack";

interface CardProps {
    question: string,
    // answer: string
}

export const Card: FC<CardProps> =
    ({
        question,
        // answer,
        // children
     }) => {
    return(
        <div className="card">
            <CardBack question={question} />
        </div>
    );
}