

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
if (namaOrang) {
    alert("ya filed anda terisi")
} else{
    alert("gak field anda kosong")
}
    try {
        const res = await fetch("http://localhost:3000/masukk",{
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
        const lahh =hasil[0].pesan.jawaban[0] 
        console.log(lahh);
        if (lahh) {
            alert("MASUK nih login lu")
              if (lahh.Jabatan == "KETUA KELAS") {
                alert("anda adalah KETUA KELAS ")
            } else{
                alert("anda bukan ketua kelas jir")
            }
        } else{
            alert("gak ada kocakkk")
        }
    } catch (error) {
        console.log("gagal le",error);
        
    }
}   

const halloGanjar = async ()=> {
    const namaOrang = document.getElementById("nama").value
    const kelasOrang = document.getElementById("kelas").value
if (namaOrang) {
    alert("ya filed anda terisi")
} else{
    alert("gak field anda kosong")
}
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
        const lahh =hasil[0].pesan.jawaban[0] 
        console.log(lahh.Jabatan);
        if (lahh) {
            alert("MASUK nih login lu")
          
        } else{
            alert("gak ada kocakkk")
        }
    } catch (error) {
        console.log("gagal le",error);
        
    }
}   
