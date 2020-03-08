import React from 'react';
import '../styles/homepage.css'

const TextArticle = () => {
    return ( 
        
        <>
            <article>
                <div className="articleTitle"><p>Kim jesteśmy?</p><i className='fas fa-users'></i></div>
                <div className="articleContent">Jesteśmy zespołem kreatywnych, zaangażowanych i zorientowanych na szczegóły architektów, których praca inspirowana jest ludźmi i naturą.<br/><br/>
                    Gdy razem pracujemy łączymy wiele podejść, filozofii i doświadczeń, co jest konieczne aby rozwiązać złożone problemy naszych czasów.<br/><br/>
                    Dotychczas każdy z nas zrealizował szeroki zakres projektów obejmujących różne skale i funkcje pracując niezależnie w renomowanych pracowniach.<br/><br/>
                    Dzisiaj łączymy się w jeden zespół by realizować dla Ciebie architekturę, którą odpowiemy na Twoje pytania, nie tracąc przy tym z oczu praktycznych, budżetowych lub komercyjnych potrzeb i życzeń.
                </div>
            </article>
            <article>
                <div className="articleTitle"><p>Jak myślimy?</p><i className='far fa-lightbulb'></i></div>
                <div className="articleContent">Uważamy, że  budynki to przede wszystkim ludzie w nich się znajdujący. Naszą rolą jako architektów jest projektowanie przestrzeni, w których ludzie mogą się rozwijać i cieszyć życiem.  Wierzymy, że dobry projekt może zmienić życie na lepsze.</div>
            </article>
            <article>
                <div className="articleTitle"><p>Co robimy?</p><i className="fas fa-people-carry"></i></div>
                <div className="articleContent">
                    <ul>
                        <li>Nasze projekty opieramy na wiedzy.</li>
                        <li>Obserwujemy.</li>
                        <li>Doświadczamy.</li>
                        <li>Zastanawiamy się.</li>
                        <li>Projektowanie to dla nas nieustający proces.</li>
                    </ul>
                 </div>
            </article>
        </>

     );
}
 
export default TextArticle;