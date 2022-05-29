import '@testing-library/jest-dom';
import { render, screen } from '../../../utils/test';

import { RoverCard } from '../../../components';

const photo = {
  id: 766307,
  sol: 2890,
  camera: {
    id: 20,
    name: 'FHAZ',
    rover_id: 5,
    full_name: 'Front Hazard Avoidance Camera',
  },
  img_src:
    'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02890/opgs/edr/fcam/FLB_654070195EDR_F0822176FHAZ00206M_.JPG',
  earth_date: '2020-09-22',
  rover: {
    id: 5,
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
  },
};

describe('RoverCard', async () => {
  it('should render the RoverCard', () => {
    render(<RoverCard {...photo} />);
    expect(screen.getByText(/Name:/)).toBeInTheDocument();
    expect(screen.getByText(/Rover:/)).toBeInTheDocument();
    expect(screen.getByText(/Earth Date:/)).toBeInTheDocument();
    expect(screen.getByText(/Sol:/)).toBeInTheDocument();
  });
});
