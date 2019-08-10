import { connect } from "react-redux";
import CounterComponentBe from "../components/CounterComponent/CounterComponentBe";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    countValue3: state.count3,
   
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
)(CounterComponentBe);
 
export default connectedComponent;