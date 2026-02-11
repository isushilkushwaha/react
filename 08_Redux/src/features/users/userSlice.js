import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
"users/fetchUsers",
async () => {
    const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
}
);

const userSlice = createSlice({
name: "users",
initialState: {
    data: [],
    loading: true,
    error: null,
},
reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
    });
},
});

export default userSlice.reducer;


/*Now we will fetch users from API.

We use createAsyncThunk. */