const production=false

let backend = ""

if (production)
    backend="https://mysterious-savannah-09391.herokuapp.com/"
else 
    backend="https://blooming-peak-53825.herokuapp.com/"

export default backend
