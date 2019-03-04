import React from 'react';
// import PropTypes from 'prop-types';

import { DynamicSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import memoize from 'memoize-one';
import MyRow from './MyRow';

export default class VTable extends React.PureComponent {
  render() {
    const { data, expandHandler, expandAllToggle} = this.props;
    // eslint-disable-next-line no-shadow
    const itemData = memoize((data, expandHandler) => ({
      data,
      expandHandler
    }));

    const ForwardedRow = React.forwardRef((props, ref) => (
      <MyRow {...props} forwardedRef={ref} />
    ));

    return (
        <div style={{width:'800px', height:'500px'}}> 
        <button onClick={this.props.expandAllToggle}>Toggle All</button>    
      <AutoSizer data={data.length}>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            itemData={itemData(data, expandHandler)}
            itemCount={data.length}
          >
            {ForwardedRow}
          </List>
        )}
      </AutoSizer>
      </div>
    );
  }
}
