import { connect } from "react-redux";
import CounterComponent from "../components/CounterComponent/CounterComponent";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    countValue1: state.count1,
   
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
)(CounterComponent);
 
export default connectedComponent;