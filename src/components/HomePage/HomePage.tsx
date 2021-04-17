import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../StyledHelpers/Components';



const LatestPublications = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: white;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  
`;

const WorkSpaces = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  background: white;
  width: 150px;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;


export const HomePage: FC = () => {
    return (
        <Wrapper>
            <LatestPublications>

            </LatestPublications>
            <br/><div style={{marginLeft:'40px'}}>Workspaces</div>
            <WorkSpaces>

            </WorkSpaces>
        </Wrapper>
    );
}