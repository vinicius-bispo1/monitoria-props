import * as S from './styled'

export default function Card(props) {
  return (
    <S.Card>
        <img src={props.imagem} alt="" />
        <h3>{props.texto}</h3>
        <button>Clique aqui</button>
    </S.Card>
  )
}
