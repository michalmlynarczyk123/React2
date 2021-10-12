import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
    static propTypes = {
        columnTitle: PropTypes.string,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
      return (
          <section className={styles.component}>
              <h3 className={styles.subtitle}>{this.props.columnTitle}</h3>
          </section>
      )
    }
  }

export default Column;