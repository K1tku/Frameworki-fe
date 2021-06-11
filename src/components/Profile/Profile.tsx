import { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../StyledHelpers/Components';

const Panel = styled.div`
background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 25px;
`;

const Panel2 = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const PanelInformations = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const SIP = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
`;

const Proposals = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const InternalReviews = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;

const AOF = styled.div`
  background-color: white;
  width: 800px;
  margin-left: 350px;
  margin-top: 1px;
`;



export const Profile: FC = () => {
    return (
        <Wrapper>
            <Panel>
P1
            </Panel>

            <Panel2>
P2
            </Panel2>

            <PanelInformations>
                <a>Panel Informations</a>
            </PanelInformations>

            <SIP>
                <a>Services & pojects</a>

            </SIP>

            <Proposals>
                <a>Proposals</a>

            </Proposals>

            <InternalReviews>

                <a>Internal reviews</a>
            </InternalReviews>

            <AOF>

                <a>Amount od fees</a>
            </AOF>



        </Wrapper>
    );
}