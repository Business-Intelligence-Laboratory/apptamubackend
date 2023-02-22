import Tamu from "../model/tamu.js";
import moment from "moment-timezone";

export const saveTamu = async(req, res) =>{
    const tz = moment().tz("Asia/Jakarta").format();
    req.body["waktuKunjungan"] = tz;
    console.log('req : ',req.body);
    const tamu = new Tamu(req.body);
    // tamu.nama = req.body.nama;
    // tamu.noIdentitas = req.body.noIdentitas;
    // tamu.instansi = req.body.instansi;
    // tamu.jenisKelamin = req.body.jenisKelamin;
    // tamu.statusKunjungan = req.body.statusKunjungan;
    // tamu.waktuKunjungan = req.body.waktuKunjungan;
    
    try{
        const insertTamu = await tamu.save();
        res.status(201).json(insertTamu);
    }
    catch(error){
        console.log("error :",error)
        res.status(400).json({message: error.messsage});
    }
}