import './GoogleSignIn.css'

function encrypt(text) {
    const NodeRSA = require('node-rsa');
    const key = new NodeRSA();
    const publicKey = "-----BEGIN PUBLIC KEY-----\n" +
        "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAviuJnPMOFsTwxY22ajnr\n" +
        "2gjkvp3L6SEpRIffHYIbXcl5XVpqr7rH3aW7VC48Dr2qxSqhVcHQrv5yl6jIXyr2\n" +
        "IfOeHpMY4SmSAyN1DL1kCNvlnaOjeyG4cTj44V6GKRWQF+nt4rd+Ym7gZFFBLrL0\n" +
        "LwhR9N1zUTAVehK0S3rdniEvWXo1noWs1hbhXf7wcXkNo4KGl5NRoS8piuDmU2io\n" +
        "pTBvaDPmquAOZ0kRVkJtiqwfoBiUrYLSM8BFrkOzLqlO4Abj62fG2HJ4RR0y/fXX\n" +
        "pCDAH/cNivTni5Cw6MXYxWQSm6GFJfzwZRRrJg87oIEtLU3OWs0pitTHRu8qAChu\n" +
        "WzzHIwkmEKdQrWNqABGHk/FzEC2L56aQhlXOTD1mkrDr2PtIynYkicsDG2aZYCWG\n" +
        "wZN9HBsSJkuMy8enHKS3Jex6XxJ/CDIlMHVXGcPfA7SS8f6ao7fTQxhdHhyZmkdm\n" +
        "OeSwCye7MZhzDp3+UlHHjq8Wi/hYknq0WLvG9sQcarfzs+t8NrVfZl3zZXCeb9t/\n" +
        "EpTaEqTmGG8MQqax01W1gkXchKVRdo4bk6MnIwPNVT/An1VQi0glODSeSCRYrbdS\n" +
        "8nAFKEhjAQKx0FZ68rmGOIxmEPkBH59i21fATLLsx8Ubh8PakGmIa3rezgZ+6Yi5\n" +
        "M+doF8Bbbr4YJ6qdWSRBHDMCAwEAAQ==\n" +
        "-----END PUBLIC KEY-----\n"
    key.importKey(publicKey,'pkcs8-public')
    return key.encrypt(text, 'base64')
}

function GoogleSignIn(props){
    function onSignIn(googleUser) {
          localStorage.setItem('encrypted_token', encrypt(googleUser.getAuthResponse().id_token))
          localStorage.setItem('userName', googleUser.getBasicProfile().getName())
          props.onClick();
    }

    window.onSignIn = (googleUser) => {onSignIn(googleUser)}

    if (props.visibility)
        return (<div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />);
    else
        return ''

}
export default GoogleSignIn
