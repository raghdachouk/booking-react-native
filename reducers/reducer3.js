

function counter3(state, action) {
    if (state === undefined) {
      return { count3: 0 };
    }
   
    var count3 = state.count3;
   
    switch (action.type) {
      case "increase":
      if (count3 < 12){
        return { count3: count3 + 1 };
        break;
      }
      
      case "decrease":
      if (count3 > 0){ 
         return { count3: count3 - 1 };
        }
      default:
        return state;
    }
  }
   
  export default counter3;