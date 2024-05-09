const { createSlice } = require("@reduxjs/toolkit");



const friendSlice = createSlice({
    name: "friends",
    initialState: {
        status_load_friends: "loading",
        friends: []
    },
    reducers: {
        onLoadingFriends: (state, { payload }) => {
            state.status_load_friends = "loading"

        },
        onLoadFriends: (state, { payload }) => {
            state.friends = payload,
                state.status_load_friends = "data"

        },
        onNoFriends: (state, { payload }) => {
            state.status_load_friends = "no-data"
        },
        onHandleUserConnected: (state, { payload }) => {
            user_connected = payload

            state.friends.map((friend) => {
                if (friend.id === user_connected.id) {
                    return {
                        ...friend,
                        is_active: true
                    }
                } else {
                    return friend
                }
            })
        }
    }
})

export const { onLoadingFriends, onLoadFriends, onNoFriends } = friendSlice.actions

export default friendSlice.reducer