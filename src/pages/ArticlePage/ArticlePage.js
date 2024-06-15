import './articlePage.scss';

//images
import example from './example.png';
import example2 from './example2.png';
import example3 from './example3.png';
import example4 from './example4.png';

//components
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import { articles } from '../../helpers/articles/articles';

import Newsletter from '../../components/newsletter/Newsletter';

const ArticlePage = ({title, mainImg}) => {
    return ( 
        <>
        <section className="article-page">
            <div className="container">
                <h3 className="article-page__title page__title">How to make a busy bathroom a place to relax</h3>
                <div className="__info">
                    <p className="article-page__info-author">Henrik Annemark</p>
                    <p className="article-page__info-date">October 16, 2023</p>
                </div>
                <img src={example} alt="" className="article-page__main-img" />
                <p className="article-page__text">Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation.</p>

                <h4 className="article-page__subtitle">A cleaning hub with built-in ventilation</h4>
                <p className="article-page__text">Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>

                <div className="article-page__gallery">
                    <img src={example2} alt="" className="article-page__gallery-img" />
                    <img src={example3} alt="" className="article-page__gallery-img" />
                </div>

                <h4 className="article-page__subtitle">Storage with a calming effect</h4>
                <p className="article-page__text">Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>

                <h4 className="article-page__subtitle">Kit your clutter for easy access</h4>
                <p className="article-page__text">Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>

                <div className="article-page__inner">
                    <img src={example4} alt="" className="article-page__img" />
                    <div className="article-page__info">
                        <h4 className="article-page__subtitle">An ecosystem of towels</h4>
                        <p className="article-page__text">Racks or hooks that allow air to circulate around each towel prolong their freshness. They dry quick and the need for frequent washing is minimized.</p>

                        <h4 className="article-page__subtitle">Make your mop disappear</h4>
                        <p className="article-page__text">Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>
                    </div>
                </div>


                <div className="article-page__recommendation">
                    <div className="section__top">
                        <h5 className="article-page__recommendation-title"></h5>
                        <a href="" className="article-page__recommendation-link"></a>
                    </div>
                   
                    <div className="article-page__recommendation-inner">
                    {articles.slice(0, 3).map((article) => {
                        return (
                            <ArticlesItem
                            img={article.img}
                            title={article.title}
                            key={article.id}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>

        <Newsletter/>
        </>
     );
}
 
export default ArticlePage;