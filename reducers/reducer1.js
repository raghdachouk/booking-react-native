

function counter1(state, action) {
    if (state === undefined) {
      return { count1: 0 };
    }
   
    var count1 = state.count1;
   
    switch (action.type) {
      case "increase":
      if (count1 < 12){
        return { count1: count1 + 1 };
        break;
      }
      
      case "decrease":
      if (count1 > 0){ 
         return { count1: count1 - 1 };
        }
      default:
        return state;
    }
  }
   
  export default counter1;