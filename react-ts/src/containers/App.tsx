// import * as React from 'react';

import Hello from '../components/Hello';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState) => ({
  enthusiasmLevel,
  name: languageName,
});
const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm()),
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Hello name="TypeScript" enthusiasmLevel={10}/>
//       </div>
//     );
//   }
// }

export default App;
