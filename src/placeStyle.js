const K_SIZE = 40;

const placeStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  top: -K_SIZE,

  backgroundColor: '#ff2d55',
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  paddingLeft: 3,
  paddingTop: 3,
  paddingRight: 3,
  paddingBottom: 7,

  cursor: 'pointer'
};

const placeStyleHover = {
  ...placeStyle,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

export {placeStyle, placeStyleHover, K_SIZE};
