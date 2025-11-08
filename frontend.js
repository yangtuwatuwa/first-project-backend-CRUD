
const ambil = async ()=>{
    const datanya = await fetch("http://localhost:3000")
    const ngeubah = await datanya.json()
    const jawa = ngeubah[0].pesan.jawaban
    console.log(jawa);
        
    console.log(`bassic js ada di gweh nih: ${jawa}`);
    
}

ambil()