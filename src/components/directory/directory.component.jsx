import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'WOMENS',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 1,
          linkUrl: 'shop/womens',
        },
        {
          title: 'MENS',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 2,
          linkUrl: 'shop/mens',
        },
        {
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 3,
          linkUrl: 'shop/hats',
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 4,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 5,
          linkUrl: 'shop/sneakers',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
