import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HomePageStyled.css';

import WorkspacesPhoto from"../../media/photos/WorkspacesPhoto.jpg"
import styled from "styled-components";
import corporate from"../../media/photos/corporate.jpg"

const Content = styled.div`
  height: 230px;
  margin-left: 10px;
  img {
    height: 230px;
    border-radius:10px;
  }
`

const list: any[] = [

    { name: WorkspacesPhoto, href : "Workspace" },
    { name: corporate,href : "WorkspaceCorporate"},
    { name: WorkspacesPhoto, href : "Workspace" },
    { name: WorkspacesPhoto },
    { name: WorkspacesPhoto },



];


// One item component
// selected prop will be passed
const MenuItem = ({text, selected}: {text: any, selected: any}) => {
    return <a href={"WorkspaceCorporate"}><div
        className={`menu-item ${selected ? 'active' : ''}`}
    ><img style={{ boxShadow: "0px 2px #d8dbe1", borderLeft: "1px solid #d8dbe1", borderRight: "1px solid #d8dbe1"}} src={text}></img></div></a>;
};


export const Menu = (list: any[], selected: any) =>
    list.map((el) => {
        const {name} = el;

        return <MenuItem text={name} selected={selected} />;
    });


const Arrow = ({ text, className }: {text: any, className: any}) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export class SMenu extends Component {
    private menuItems: any;
    constructor(props: any) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = (key: any) => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="workspaces">
                <Content>
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={this.onSelect}
                    />
                </Content>

            </div>
        );
    }
}
