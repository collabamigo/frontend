const production=false

let backend = ""

if (production)
    backend="https://mysterious-savannah-09391.herokuapp.com/"
else
    backend="https://collabamigo.iiitd.edu.in/"

export default backend
