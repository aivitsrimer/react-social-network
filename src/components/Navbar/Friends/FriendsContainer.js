import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                // state={props.state.navbar}
                let state = store.getState();
                return <Friends friends={state.navbar.friends}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default FriendsContainer;