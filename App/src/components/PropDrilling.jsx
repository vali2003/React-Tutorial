export const ParentComponent = () => {
    return(
        <section className="p-4 h-screen font-sans tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white">
            <h1 style={{color:'white'}}>Hello ParentComponent</h1>
            <ChildComponent data="React js" />
        </section>
    );
};
const ChildComponent = (props) => {
    return(
        <>
                    <h1 style={{color:'white'}}>Hello ChildComponent</h1>
                    <GrandComponent data={props.data} />

        </>
    );
};


const GrandComponent = (props) => {
    return(
        <>
                    <h1 style={{color:'white'}}>Hello GrandComponent</h1>
                    <GrandGrandComponent data={props.data} />

        </>
    );
};
const GrandGrandComponent = (props) => {
    return(
        <>
                    <h1 style={{color:'white'}}>Hello GrandGrandComponent {props.data}</h1>

        </>
    );
};