export default (state = 0, actions) => {
  switch (actions.type) {
    case 'ADD':
      console.log('ADD')
      return state + 1;
    case 'CUT':
      console.log('CUT')
      return state - 1;
    default:
      return state;
  }
}