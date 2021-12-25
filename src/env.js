// eslint-disable-next-line no-undef
const production = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

let backend = ""

if (production)
    backend = "https://api.collabamigo.com/"
else
    backend = "https://blooming-peak-53825.herokuapp.com/"

export default backend

