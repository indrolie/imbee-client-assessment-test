import { broadcastMessage } from '../../redux/action/action';

export const mapState = (state) => ({
    broadcasted: state.broadcasted,
    error: state.error,
	loading: state.loading,
});
  
export const mapDispatch = (dispatch) => ({
    broadcastMessage: (message) => dispatch(broadcastMessage(message)),
});