export default (state = 0, actions) => {
  switch (actions.type) {
    case 'ADD':
      return state + 1;
    case 'CUT':
      return state - 1;
    default:
      return state;
  }
}