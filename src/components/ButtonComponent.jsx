const ButtonComponent = (props) => (

  <button>
      <a href={props.href} className={props.className}> {props.text} </a>
  </button>

);

export default ButtonComponent;
