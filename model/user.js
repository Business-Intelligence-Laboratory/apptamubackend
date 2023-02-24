import mongoose from "mongoose";

const User = mongoose.Schema({
    nama: {
        type: String
    },
    instansi:{
        type: String
    },
    role:{
        type: String
    },
    noIdentitas:{
        type: String
    },
    jenisKelamin:{
        type: String
    },
    statusKunjungan:{
        type: String
    },
    waktuKunjungan:{
        type: Date
    }
}, {collection: 'Users'});

export default mongoose.model('Users', User);