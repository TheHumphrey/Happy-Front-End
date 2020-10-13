import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';


import mapMarkerIMG from '../../images/map-marker.svg';

import './index.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerIMG} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Goiás</strong>
                    <span>Goiânia</span>
                </footer>
            </aside>

            <Map 
                center={[-16.6697831,-49.2883802]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
            </Map>

            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;