import './button.css'

const message = () =>{
    alert('A label desse botão é Baixar  CV')
}


const Button = (props) =>{
    return <button  className="btn"  onClick={message}>{props.label}</button>
}

Button.defaultProps = {
    label:'Baixar CV'
}

export default Button