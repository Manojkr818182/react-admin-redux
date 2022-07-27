const initialState = {isCollaps : false };


export default function mnj2 (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SidebarToggle':
            return {
                ...state,
                isCollaps: payload.isCollaps
            };
        default:
            return state;
    }
}