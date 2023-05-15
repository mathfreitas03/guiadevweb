export default function Card({imagem, titulo, descricao, tags}){
    return(
        <>
            <div className="shadow-2xl pb-10 w-1/3 h-2/3 bg-gray-300 rounded-lg mx-auto mt-5 mb-5 overflow-hidden">
                <img className="w-full h-auto" src={imagem} alt="fundo do card" />
                <h2 className="pt-8 text-3xl font-bold p-4">{titulo}</h2>
                <p className="p-4 text-1xl">{descricao}</p>
                <h3 className="p-2 m-4 bg-gray-400 rounded-lg h-6 w-auto inline"><a href="#" className="text-center">#{tags}</a></h3>
            </div>
        </>
    )
}