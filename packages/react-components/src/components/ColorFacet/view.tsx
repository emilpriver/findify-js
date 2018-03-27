import React from 'react';

import MapArray from 'components/common/MapArray';
import Item from 'components/ColorFacet/Item';

export default ({
  theme,
  items,
  config,
}) => 
<div className={theme.root}>
  <MapArray
    config={config}
    array={items}
    factory={Item}
    theme={theme} />
</div>

