

function counter2(state, action) {
    if (state === undefined) {
      return { count2: 0 };
    }
   
    var count2 = state.count2;
   
    switch (action.type) {
      case "increase":
      if (count2 < 12){
        return { count2: count2 + 1 };
        break;
      }
      
      case "decrease":
      if (count2 > 0){ 
         return { count2: count2 - 1 };
        }
      default:
        return state;
    }
  }
   
  export default counter2;