import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async function fetchAddress() {}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wronga
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // Payload of the FULFILLED state
    return { position, address };
  },
);

const functionName = createAsyncThunk('name/methodName', async function () {
  /** something */
});

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    functionName(state, action) {
      /**Something */
    },
  },
  extraReducers: builder =>
    builder
      .addCase(functionName.pending, (state, action) => {
        /**Something when all waiting*/
      })
      .addCase(functionName.fulfilled, (state, action) => {
        /**Something when all succefully */
      })
      .addCase(functionName.rejected, (state, action) => {
        /**Something when reject */
      }),

  // extraReducers: builder =>
  //   builder
  //     .addCase(fetchAddress.pending, (state, action) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchAddress.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.position = action.payload.position;
  //       state.address = action.payload.address;
  //     })
  //     .addCase(fetchAddress.rejected, (state, action) => {
  //       state.status = 'error';
  //       state.error = action.error.message;
  //     }),
});

export const { updateName } = userSLice.actions;

export default userSLice.reducer;

export const getUsername = state => state.user.username;
