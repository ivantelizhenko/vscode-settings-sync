import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
