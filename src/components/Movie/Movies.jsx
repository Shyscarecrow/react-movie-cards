import React, { useState } from 'react';
import MovieList from './MovieList';
import { LayoutSwitch } from '../LayoutSwitch';
import { LayoutType } from '../LayoutSwitch/LayoutType';
import { appStore } from '../../store';

export const Movies = () => {
  const [activeLayout, setActiveLayout] = useState(LayoutType.DESKTOP);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <LayoutSwitch activeLayout={activeLayout} onSwitchLayout={setActiveLayout} />
          <MovieList state={appStore} layout={activeLayout} />
        </div>
      </div>
    </div>
  );
};
