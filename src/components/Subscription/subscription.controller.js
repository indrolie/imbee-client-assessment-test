import { subscribeToNotification } from '../../redux/action/action';

export const mapState = (state) => ({
	subscribed: state.subscribed,
	loading: state.loading,
	error: state.error,
});
  
export const mapDispatch = (dispatch) => ({
    subscribe: () => dispatch(subscribeToNotification()),
});