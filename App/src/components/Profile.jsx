function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard nane="Power Boy" age={25} greeting={
                <div>
                    <strong>HI Power Boy Have A wanderful day!</strong>
                </div>
            }>
                <p>Hobbies : Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard nane="Power Boy" age={25} greeting={
                <div>
                    <strong>HI Bad Boy Nice Work</strong>
                </div>
            }>
                <p>Hobbies : Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}
export default Profile;

function ProfileCard ({name,age,greeting,children}){
    return (
        <>
        
        <h2>Name : {name}</h2>
        <h6>Age : {age}</h6>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}