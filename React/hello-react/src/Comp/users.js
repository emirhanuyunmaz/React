//Burada yapılan işlemler sayesinde gelen bir veri işlenerek görğünebiliyor

function Users({name , surname , age , liste}){
    return (
        <>
            <h1>Kişi</h1>
            <h3>{name} {surname} {age}</h3>
            
            {liste.map((kisi) =>{
                return (
                    <div key={kisi.id}>
                        <h5>
                            {kisi.name}
                        </h5>
                    </div>
                )
            } )}
        </>
    )


}


export default Users;