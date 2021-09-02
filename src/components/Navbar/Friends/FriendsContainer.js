import Friends from "./Friends";
import {connect} from "react-redux";

// const FriendsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 // state={props.state.navbar}
//                 let state = store.getState();
//                 return <Friends friends={state.navbar.friends}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends,
    };
};

let mapDispatchToProps = () => {
    return {
    };
};

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;