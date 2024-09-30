import { broadcastMessage } from '../../redux/action/action';

export const mapState = (state) => ({
    success: state.success,
    error: state.error
});
  
export const mapDispatch = (dispatch) => ({
    broadcastMessage: (message) => dispatch(broadcastMessage(message)),
});