import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class MyRow extends PureComponent {
  returnOut(dt, dtExpanded, expandedState, expandHandler, offset) {
    return (
      <div className="row">
        {this && true}
        <div className="col-lg-8 auditRowContent">
          <a
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              expandHandler(offset);
            }}
          >
        {offset}-{dt}
          </a>
        </div>
        
        {expandedState && (
          <div style={{height:'30px', border:'1px solid black'}}>
            {dtExpanded}
          </div>
        )}
      </div>
    );
  }

  render() {
    // const { data, style, index } = this.props;
    const { data, style, index, forwardedRef } = this.props;
    const { data: myData, expandHandler } = data;
    const item = myData[index];
    // const item = data[index];
    try {
      const itemContent = item.normal;
      return (
        <div
          style={style}
          ref={forwardedRef}
        >
          {this.returnOut(itemContent, item.expandedData, item.expandedState, expandHandler, item.offset)}
        </div>
      );
    } catch (error) {
      return null;
    }
  }
}

MyRow.defaultProps = {
  index: 0,
  style: {},
  data: {},
  forwardedRef: () => {}
};

MyRow.propTypes = {
  forwardedRef: PropTypes.func,
  index: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.bool])),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  )
};

export default MyRow;
