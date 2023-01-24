// importa o css -> import './styles.css'

const PersonCard = ({ name, age }) => {
    return (
        <div className='UserCard'>
            <span>
                <p>Hello, {name}</p>
                <p>Your age is, {age} old!</p>
            </span>
        </div>
    )
}

export default PersonCard