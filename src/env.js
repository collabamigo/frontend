// eslint-disable-next-line no-undef
const production = process.env.NODE_ENV === 'production';

let backend = ""

if (production)
    backend = "https://collabamigo.iiitd.edu.in/"
else
    backend = "https://blooming-peak-53825.herokuapp.com/"

export default backend

