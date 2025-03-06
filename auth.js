function handleGoogleLogin() {
    window.open("https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email profile", "_self");
}

document.getElementById("google-login").addEventListener("click", handleGoogleLogin);
