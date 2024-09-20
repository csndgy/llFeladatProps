type UserProfile={
    name:string,
    age:number,
}


const UserProfile=(prop:UserProfile) => {
    return(
        <div>
            <h2>{prop.name}</h2>
            <h2>{prop.age}</h2>
        </div>
    )
}



export default UserProfile