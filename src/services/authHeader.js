export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.server_token) {
        return { 'Authorization': `Bearer ${user.server_token}` };
    } else {
        return {};
    }
}