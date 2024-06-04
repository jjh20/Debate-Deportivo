import {NewArticle} from './NewArticle'

function NewNotice (){
    return( 
        
          <aside className='bg-gray-900 text-white py-[28px] px-[20px] border-b-5px'>
           <h1 className='text-red-300 text-4xl font-bold'>Nuevas Noticias</h1>
           <NewArticle
            title='Celtics VS Mavericks'
            texto='El 6 de junio empiezan las finales de la NBA, donde los Boston Celtic saldrán favoritos.'
           />
           <NewArticle 
           title='Juan Soto rumbo a los 500 millones'
           texto='El dominicano está teniendo una gran temporada, de cara a la agencia libre.'
           />
           <NewArticle
           title='Dominicana rumbo a las olimpiadas' 
           texto='El equipo de baloncesto dominicano, ya tiene entrenador confirmado y se preparan para los próximos
           juegos de clasificación.'
           />
          </aside>
        
    )
}

export default NewNotice;


