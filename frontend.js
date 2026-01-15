

const ambil = async ()=>{
    const datanya = await fetch("http://localhost:3000")
    const ngeubah = await datanya.json()
    const jawa = ngeubah[0].pesan.jawaban
    console.log(jawa);
    
    console.log(`bassic js ada di gweh nih: ${jawa}`);
    
}

ambil()
const hallosekai = async ()=> {
    const namaOrang = document.getElementById("namanya").value
    const kelasOrang = document.getElementById("kelasnya").value

    try {
        const res = await fetch("http://localhost:3000/iye",{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify({
                NAMA:namaOrang,
                KELAS:kelasOrang
            })
        } )

        const hasil = await res.json();
        console.log(hasil);
        
    } catch (error) {
        console.log("gagal le",error);
        
    }
}
