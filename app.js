// app.js
const userStatusDiv = document.getElementById('userStatus');
const loginFormDiv = document.getElementById('loginForm');
const logoutButton = document.getElementById('logoutButton');
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');

// Function to update UI based on authentication state
const render = () => {
    const state = store.getState();
    if (state.isAuthenticated) {
        userStatusDiv.innerHTML = `Welcome, ${state.user.username}!`;
        loginFormDiv.classList.add('hidden');
        logoutButton.classList.remove('hidden');
    } else {
        userStatusDiv.innerHTML = 'Please log in.';
        loginFormDiv.classList.remove('hidden');
        logoutButton.classList.add('hidden');
    }
};

// Event listeners
loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        store.dispatch(login({ username }));
        usernameInput.value = '';
    }
});

logoutButton.addEventListener('click', () => {
    store.dispatch(logout());
});

// Subscribe to store updates
store.subscribe(render);

// Initial render
render();
