import { connect } from "react-redux";
import CounterComponentEn from "../components/CounterComponent/CounterComponentEn";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    countValue2: state.count2,
   
  }
}
 
// Action
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };
 
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  }
}
 
// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponentEn);
 
export default connectedComponent;