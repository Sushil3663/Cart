export const reducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            return{
                ...state,
                item:state.item.filter((element)=>{
                    return element.id !== action.payload
                }),
            }
            case "REMOVE_All":
                return{ ...state, item: [] }

            case "INCREMENT":
                let data = state.item.map((curElem) => {
                    if (curElem.id === action.payload) {
                      return { ...curElem, quantity: curElem.quantity + 1 };
                    }
                    return curElem;
                  });
                  return { ...state, item: data };
                

            case "DECREMENT":
                let decrease = state.item.map((curElem) => {
                    if (curElem.id === action && curElem.quantity > 1) {
                      return { ...curElem, quantity: curElem.quantity - 1 };
                    }
                    return curElem;
                  });
                  return { ...state, item: decrease };

            case "TOTAL":
                let {totalItem, Amount} = state.item.reduce(
                    (accum, curVal)=>{
                    let {price, quantity} = curVal;
                    let totalAmount = price * quantity;
                    accum.Amount += totalAmount
                    accum.totalItem += quantity;

                    return accum
                },
                    {
                        totalItem: 0,
                        Amount: 0,
                    });
                    return {...state, totalItem, Amount };

        default:
            return state
    }
}