export const EventProps = () => {

    const HandleWelcomeUser = (users) => {
      alert(`Hii, ${users}`);
    };
  
    const handleHover = () => {
      alert(`Hii, Thanks For Hovering Me`);
    };
  
    return (
      <>
        <WelcomeUser
          onClick={() => HandleWelcomeUser("Vali")}
          onMouseEnter={handleHover}
        />
      </>
    );
  };
const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
      console.log(`Hi User, Welcome!`);
      onClick(); 
    };
  
    return (
      <>
        <button onClick={onClick}>Click</button>
        <br />
        <br />
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <br />
        <br />
        <button onClick={handleGreeting}>Greeting</button>
      </>
    );
  };