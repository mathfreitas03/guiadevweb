import Image from 'next/image'
import Card from './components/card'

export default function Home() {
  return (
    <Card
      imagem="https://picsum.photos/seed/picsum/500/300/"
      titulo="Lorem Ipsum"
      descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"
      tags="coldsunset">
    </Card>
  )
}
