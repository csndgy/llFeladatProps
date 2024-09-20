type WelcomeMessage={
    name:string,
}


const WelcomeMessage=(prop:WelcomeMessage) => {
    return(
        <div>
            <h1>{prop.name}</h1>
        </div>
    )
}



export default WelcomeMessage