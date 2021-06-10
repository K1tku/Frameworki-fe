import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../StyledHelpers/Components';
import all from '../../media/icons/all.jpg';
import filters from '../../media/icons/filters.jpg';
import kropeczki from '../../media/icons/kropeczki.jpg';
import mosaic from '../../media/icons/mosaic.jpg';
import share from '../../media/icons/share.jpg';
import sort from '../../media/icons/sort.jpg';
import strzalki from '../../media/icons/strzalki.jpg';
import cog from '../icons/cog.png';
import search from "../icons/search.png";

const TTbar = styled.div`

`;

const Tbar = styled.div`

`;

const Content = styled.div`

`;
const SearchField = styled.div`
  width: 250px;
  padding: 10px;
  margin-left: 1150px;
  margin-top: 75px;
  
`;

const SearchButton = styled.div`
  height: 35px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-left: 1285px;
  position: absolute;
  margin-top: -43px;
  `;


export const Entities: FC = () => {
    return (
       <Wrapper>
           <TTbar>
               <div>
                   <a style={{fontSize:'23px', position:'absolute', marginLeft:'25px', marginTop:'25px',}}>Entities</a>
                    <img style={{height:'16px' ,position:'absolute', marginLeft:'108px', marginTop:'28px',}} src={cog} alt={cog}/>
                    <img style={{height:'35px' ,position:'absolute', marginLeft:'1450px', marginTop:'28px', borderRadius:'4px'}} src={mosaic} alt={mosaic}/>
               </div>

           </TTbar>

           <Tbar>

               <img src={}/>

               <SearchField>
                   <input type="text" placeholder="Search..." style={{width:'150px', height:'30px', fontSize:'20px'}}/>
               </SearchField>

               <SearchButton>
                   <img style ={{height:'23px'}} src={search} alt="search" />
               </SearchButton>

           </Tbar>

           <Content>

           </Content>

       </Wrapper>

    );
}