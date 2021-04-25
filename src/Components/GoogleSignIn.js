function encrypt(text) {
    const NodeRSA = require('node-rsa');
    const key = new NodeRSA({b: 512});
    const publicKey = "-----BEGIN PUBLIC KEY-----\n" +
        "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIeSDB/Wj1wudkS6nAEFjApXwsN3zQPA\n" +
        "n7CAWUrRThvUzInbky4pVi5+GWO9wBkYGh0rij1LgJ8HCp5qVvQKhH0CAwEAAQ==\n" +
        "-----END PUBLIC KEY-----"
    key.importKey(publicKey,'pkcs8-public')
    return key.encrypt(text, 'base64')
}

function GoogleSignIn(props){
    function onSignIn(googleUser) {
          localStorage.setItem('encrypted_token', encrypt(googleUser.getAuthResponse().id_token))
          localStorage.setItem('userName', googleUser.getBasicProfile().getName())
          props.onClick(googleUser);
    }

    window.onSignIn = (googleUser) => {onSignIn(googleUser)}

    if (props.visibility)
        return (<div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />);
    else
        return ''

}
export default GoogleSignIn
