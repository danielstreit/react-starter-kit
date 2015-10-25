import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './MenuItem.css';

@withStyles(styles)
class MenuItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  };

  render() {
    return (
      <div className="MenuItem">
        <div className="MenuItem-container">
          <img className="MenuItem-image" src={this.props.imageUrl} />
          <h2 className="MenuItem-title">{this.props.name}</h2>
          <p className="MenuItem-description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }

}

export default MenuItem;
