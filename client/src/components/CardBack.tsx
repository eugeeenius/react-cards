import React, {FC} from 'react';

interface CardBackProps {
    question: string,
}

export const CardBack: FC<CardBackProps> = ({question}) => {
        return(
            <div>
                {question}
            </div>
        );
    };