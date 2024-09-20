type Product={
    name:string,
    price:number,
}

const termek:Product = {
name:"uborkanyeső",
price:4599
}


const Product=()=>{
    return(

        <div>
            <h1>Termék neve: {termek.name}</h1>
                <h2>Termék ára: {termek.price}</h2>
            
        </div>
    )
}

export default Product