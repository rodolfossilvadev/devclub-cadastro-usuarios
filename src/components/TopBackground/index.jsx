import { Background } from "./styles"
import ImgUsers from "../../assets/users.png"

function TopBackground() {

    return (
        <Background>
            <img src={ImgUsers} alt='imagem-usuarios' />
        </Background>

    )
}

export default TopBackground