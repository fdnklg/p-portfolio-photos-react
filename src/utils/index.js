export const opacityFromState = state => {
  switch (state) {
    case 'entering':
      return .5;
    case 'entered':
      return 1;
    case 'exiting':
      return .5;
    case 'exited':
      return 0;
    default:
      return 0;
  }
};