export const ROVER_TYPES_OPTIONS = [
  { label: 'Curiosity', value: 'curiosity' },
  { label: 'Opportunity', value: 'opportunity' },
  { label: 'Spirit', value: 'spirit' },
];

const CAMERA_CURIOSITY = [
  { label: 'All Cameras', value: 'all' },
  { label: 'FHAZ', value: 'FHAZ' },
  { label: 'RHAZ', value: 'RHAZ' },
  { label: 'MAST', value: 'MAST' },
  { label: 'CHEMCAM', value: 'CHEMCAM' },
  { label: 'MAHLI', value: 'MAHLI' },
  { label: 'MARDI', value: 'MARDI' },
  { label: 'NAVCAM', value: 'NAVCAM' },
];

const CAMERA_OPPORTUNITY_SPIRIT = [
  { label: 'All Cameras', value: 'all' },
  { label: 'FHAZ', value: 'FHAZ' },
  { label: 'RHAZ', value: 'RHAZ' },
  { label: 'NAVCAM', value: 'NAVCAM' },
  { label: 'PANCAM', value: 'PANCAM' },
  { label: 'MINITES', value: 'MINITES' },
];

export const ROVER_CAMAERA_OPTIONS = {
  curiosity: CAMERA_CURIOSITY,
  opportunity: CAMERA_OPPORTUNITY_SPIRIT,
  spirit: CAMERA_OPPORTUNITY_SPIRIT,
};
