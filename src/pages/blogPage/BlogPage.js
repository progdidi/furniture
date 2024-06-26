import './blogPage.scss';

//images
import banner from './banner.png';

//componens
import PagePreview from '../../components/pagePreview/PagePreview';

import ArticlesItem from "../../components/articlesItem/ArticlesItem";
import { articles } from "../../helpers/articles/articles";

import Newsletter from "../../components/newsletter/Newsletter";

import LayoutChoice from '../../components/layoutChoice/LayoutChoice';

const BlogPage = () => {
    return ( 
        <>

            <PagePreview
                title="Our Blog"
                descr="Home ideas and design inspiration"
                bgImage={banner}
                currentPage="Blog"
            />

            <section className="blog">
                <div className="container">
                    <div className="blog__header">

                        <div className="blog__tabs">
                            <button className="blog__tab-btn active">All Blog</button>
                            <button className="blog__tab-btn">Featured</button>
                        </div>

                        <LayoutChoice/>

                        

                    </div>
                    <div className="blog__items">
                        {articles.map((article) => {
                            return (
                                <ArticlesItem
                                img={article.img}
                                title={article.title}
                                date={article.date}
                                key={article.id}
                                />
                            );
                        })}
                    </div>

                    <button className="blog__btn white-btn">Show more</button>
                </div>
            </section>

            <Newsletter/>

        </>
     );
}
 
export default BlogPage;