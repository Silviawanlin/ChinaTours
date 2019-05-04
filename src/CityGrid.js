import React, { Component } from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar
} from '@material-ui/core';
import waitan from "./img/citygrid/waitan.jpg";
import guilin from "./img/citygrid/guilin.jpg";
import bingmy from "./img/citygrid/bingmy.jpg";
import qinghua from "./img/citygrid/qinghua.jpg";
import forbiddencity from "./img/citygrid/forbiddencity.jpg";
import greatwall from "./img/citygrid/greatwall.jpg";
import beida from "./img/citygrid/beida.jpg";
import nanjing from "./img/citygrid/nanjing.jpg";

class CityGrid extends Component {
  render() {
    const cities = ['waitan', 'Guilin', 'Xian'];
    return (
      <div className="city-container">
        <GridList className="city-gridlist" cols={3}>
          <GridListTile>
            <img src={bingmy} />
            <GridListTileBar title="Xi'an" />
          </GridListTile>
          <GridListTile>
            <img src={guilin} />
            <GridListTileBar title="Guilin" />
          </GridListTile>
          <GridListTile>
            <img src={waitan} />
            <GridListTileBar title="Shanghai" />
          </GridListTile>
          <GridListTile>
            <img src={nanjing} />
            <GridListTileBar title="Nanjing" />
          </GridListTile>
        </GridList>

        <GridList className="city-gridlist" cols={3}>
          <GridListTile>
            <img src={forbiddencity} />
            <GridListTileBar title="Forbidden City" />
          </GridListTile>
          <GridListTile>
            <img src={greatwall} />
            <GridListTileBar title="Greatwall" />
          </GridListTile>
          <GridListTile>
            <img src={qinghua} />
            <GridListTileBar title="Tsinghua University" />
          </GridListTile>
          <GridListTile>
            <img src={beida} />
            <GridListTileBar title="Beijng University" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default CityGrid;