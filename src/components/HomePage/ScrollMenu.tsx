import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HomePageStyled.css';


const list = [
    { name: "item1", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item2", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item3", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item4", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item5", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item6", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item7", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item8", path: "../../media/photos/WorkspacesPhoto.jpg" },
    { name: "item9", path: "../../media/photos/WorkspacesPhoto.jpg" }
];


const MenuItem = ({text, selected}: {text: any, selected: any}) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};


export const SMenu = (list: any[], selected: any)=>
    list.map((el: any) => {
        const {name} = el;

        return <MenuItem text={name} key={name} selected={selected} />;
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

class App extends Component {
    private menuItems: any[];
    constructor(props: any) {
        super(props);

        this.menuItems = SMenu(list, selected);
    }

    state = {
        selected
    };

    onSelect = (key: any) => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;

        const menu = this.menuItems;

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}
