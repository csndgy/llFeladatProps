type ShoppingType={
    name:string,
    qty:number,
}


const Shopping:ShoppingType[]=[
    {name:"alma", qty:2},
    {name:"szőlő", qty:3},
    {name:"körte", qty:1}
]



const ShoppingList=()=>{

return(

    <div>
        {Shopping.map((item, index)=>(
            <div key={index}>
            <h3>{item.name}</h3>
            <h4>{item.qty}</h4>
            </div>
            ))}
    </div>


)
}

export default ShoppingList