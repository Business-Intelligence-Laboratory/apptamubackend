import mongoose from "mongoose";

const Tamu = mongoose.Schema({
    nama: {
        type: String
    },
    noIdentitas:{
        type: String
    },
    instansi:{
        type: String
    },
    jenisKelamin:{
        type: String
    },
    statusKunjungan:{
        type: String
    },
    waktuKunjungan:{
        type: String
    },
}, {collection: 'Guests'});

export default mongoose.model('Guests', Tamu);