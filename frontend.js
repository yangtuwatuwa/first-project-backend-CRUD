

const ambil = async ()=>{
    const datanya = await fetch("http://localhost:3000")
    const ngeubah = await datanya.json()
    const jawa = ngeubah[0].pesan.jawaban
    console.log(jawa);
    
    console.log(`aman`);
    
}

ambil()
//
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
        let penentu =hasil[0].alert;
        console.log(penentu);
        
        if (!penentu) {
            alert("permintaan anda ditolak");
        } else{

            alert("MASUK")
        }
        console.log(hasil);

    } catch (error) {
        console.log("gagal le",error);
        
    }
}
//NYARI KEYWORD
const halloDunia = async ()=> {
    const namaOrang = document.getElementById("namadia").value


    try {
        const res = await fetch(`http://localhost:3000/${namaOrang}`)

        const hasil = await res.json();
            const jawa = hasil[0].pesan.jawaban
            jawa.forEach(e => {
                console.log(e);
          
                let down = document.createElement("li")
                down.innerText = e.NAMA
                document.getElementById("sawit").appendChild(down)
            });
        console.log(jawa);
        
    } catch (error) {
        console.log("gagal le",error);
        
    }
}

const halloGibran = async ()=> {
    const namaOrang = document.getElementById("nama").value
    const kelasOrang = document.getElementById("kelas").value

    try {
        const res = await fetch("http://localhost:3000/login",{
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
        alert("MASUK")
    } catch (error) {
        console.log("gagal le",error);
        
    }
}