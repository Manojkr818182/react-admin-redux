export const toggleSide = (toggleValue) => (dispatch) => {
    dispatch({
        type: 'SidebarToggle',
        payload: { isCollaps: toggleValue }
    });
}