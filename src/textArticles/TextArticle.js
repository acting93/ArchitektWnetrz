import React from 'react';
import '../styles/homepage.css'

const TextArticle = () => {
    return ( 
        
        <>
            <article className='articleHomepage col-12'>
                <div className="homepageContent">
                    <span className='homepageTitle'>Kim jesteśmy?</span>
                    <span className='homepageText'><i className="fa fa-check" aria-hidden="true"></i>
                        Jesteśmy zespołem kreatywnych, zaangażowanych i zorientowanych na szczegóły architektów, których praca inspirowana jest ludźmi i naturą.<br/><br/>
                        <i className="fa fa-check" aria-hidden="true"></i>Gdy razem pracujemy łączymy wiele podejść, filozofii i doświadczeń, co jest konieczne aby rozwiązać złożone problemy naszych czasów.<br/><br/>
                        <i className="fa fa-check" aria-hidden="true"></i>Dotychczas każdy z nas zrealizował szeroki zakres projektów obejmujących różne skale i funkcje pracując niezależnie w renomowanych pracowniach.<br/><br/>
                        <i className="fa fa-check" aria-hidden="true"></i>Dzisiaj łączymy się w jeden zespół by realizować dla Ciebie architekturę, którą odpowiemy na Twoje pytania, nie tracąc przy tym z oczu praktycznych, budżetowych lub komercyjnych potrzeb i życzeń.
                    </span>               
                </div>
            </article>

            <article className='articleHomepage col-12'>
                <div className="homepagePhoto"></div>
                <div className="homepageContent">
                    <span className='homepageTitle'>Jak myślimy?</span>
                    <span className='homepageText'>
                        Uważamy, że  budynki to przede wszystkim ludzie w nich się znajdujący. Naszą rolą jako architektów jest projektowanie przestrzeni, w których ludzie mogą się rozwijać i cieszyć życiem.  Wierzymy, że dobry projekt może zmienić życie na lepsze.
                    </span>
                </div>
            </article>

            <article className='articleHomepage col-12'>
                <div className="homepageTitle"><p>Co robimy?</p></div>
                <div className="homepageContent">
                    <ul>
                        <li><p>Nasze projekty opieramy na wiedzy</p></li>
                        <li><p>Obserwujemy</p></li>
                        <li><p>Doświadczamy</p></li>
                        <li><p>Projektowanie to dla nas nieustający proces</p></li>
                    </ul>
                 </div>
            </article>
        </>

     );
}
 
export default TextArticle;