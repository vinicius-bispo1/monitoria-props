import mac from '../assets/bigmac.png'
import batata from '../assets/batata.png'
import sorvete from '../assets/sorvete.png'
import { useState } from 'react'
import * as S from './styled'
import Card from './Card'

export default function Main() {

    const [item, setItem] = useState(mac)

    // function bigmac(){
    //     setItem(mac)
    // }
     function batataFrita(){
        setItem(batata)
    }
     function casquinha(){
        setItem(sorvete)
    }

  return (
    <main>
        <section>
        <S.Principal>
        <img src={item} alt="" />
        </S.Principal>
            <figure>
                <img onClick={()=>{setItem(mac)}} src={mac} alt="" />
                <img onClick={batataFrita} src={batata} alt="" />
                <img onClick={casquinha} src={sorvete} alt="" />
            </figure>
        </section>
        <section>
            <div>
                <Card imagem={sorvete} texto={"Boa noite a todos!!"}/>
            <Card imagem={sorvete} texto={"Boa noite a todos!!"}/>
             <Card imagem={sorvete} texto={"Boa noite a todos!!"}/>
            </div>
        </section>
    </main>
  )
}
