import {FC, useState, ChangeEvent} from 'react';
import styled from 'styled-components';

import house from '../icons/house.png';
import network from '../icons/network.png';
import publications from '../icons/publications.png';
import entities from '../icons/entities.png';
import ecosystem from '../icons/ecosystem.png';


const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  background: white;
  padding: 16px;
  border: 1px solid;
  width: 215px;
`;

export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>(``);
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    return(
        <Wrapper>
            <input type="text" value={inputText} onChange={inputHandler}/>
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {house} alt={house}/>
                Home</div>
            }
            {'Your Network'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {network} alt = {network}/>
                Your Network</div>
            }
            {'Your Publication'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {publications} alt = {publications}/>
                Your Publication</div>
            }

            {'Publication'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {publications} alt = {publications}/>
                Publication</div>
            }
            {'Ecosystem'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {ecosystem} alt = {ecosystem}/>
                Ecosystem</div>
            }
            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
            <div>
                <img src = {entities} alt = {entities}/>
                Entities</div>
            }
        </Wrapper>
    );

};