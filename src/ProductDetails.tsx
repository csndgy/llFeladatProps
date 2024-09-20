type Product={
    name:string,
    price:number,
    inStock:boolean,

}

const ProdDetails=(prop:Product) => {
    return(
        <div>
            <h3>{prop.name}</h3>
            <h3>{prop.price}</h3>
            <h3>{prop.inStock}</h3>
        </div>
    )
}


export default ProdDetails