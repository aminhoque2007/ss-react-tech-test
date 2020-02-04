import React, { useEffect, useState } from 'react';

import Itinerary from '../../Itinerary';
import data from '../../../flights.json';

const Flights = () => {
  const [itineraries, setItineraries] = useState([]);
  useEffect(() => {
    const itineraries = data.itineraries.map(itinerary => ({
      ...itinerary,
      legs: itinerary.legs.map(legId =>
        data.legs.find(leg => leg.id === legId),
      ),
    }));
    setItineraries(itineraries);
  }, []);
  const renderItineraries = () =>
    itineraries.map((itinerary, i) => (
      <Itinerary key={`itinerary-${i}`} {...itinerary} />
    ));
  return itineraries.length > 0 ? (
    renderItineraries()
  ) : (
    <p>Loading flights...</p>
  );
};

export default Flights;
