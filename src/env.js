const production=false

let backend = ""

if (production)
    backend="https://mysterious-savannah-09391.herokuapp.com/"
else
    backend="http://localhost:8000/"

export default backend
