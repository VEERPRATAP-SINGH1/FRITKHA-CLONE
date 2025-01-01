import React from 'react';
import "../../styles/newx.css";

const newsData = [
  {
    id: 1,
    title: "You will vainly look for fruit on it in autumn.",
    author: "Admin",
    date: "27 December, 2019",
    excerpt: " Researchers are developing new fruit varieties with higher vitamin content and longer shelf life through gene editing techniques. This could mean tastier, more nutritious fruits that stay fresh longer at the grocery store [indicate source if possible]",
    imageUrl: 'Images/latest-news/news-bg-1.jpg'
  },
  {
    id: 2,
    title: "A man's worth has its season, like tomato.",
    author: "Admin",
    date: "27 December, 2019",
    excerpt: " The demand for exotic fruits like dragonfruit and rambutan is on the rise! This is creating opportunities for new growers and potentially bringing a wider variety of fruits to your local market [indicate source if possible].",
    imageUrl: 'Images/latest-news/news-bg-2.jpg'
  },
  {
    id: 3,
    title: "Good thoughts bear good fresh juicy fruit.",
    author: "Admin",
    date: "27 December, 2019",
    excerpt: "Some fruit crops, like cherries, are facing pressure due to unpredictable weather patterns. Farmers are adapting with new irrigation methods and cold-resistant varieties to ensure a steady supply of these delicious fruits [indicate source if possible].",
    imageUrl: 'Images/latest-news/news-bg-3.jpg'
  }
];

const LatestNews = () => {
  return (
    <div className="latest-news pt-150 pb-150">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="veer">
            <div className="section-title">
                <h3><span className="orange-text">Our</span> News</h3>
                <p>We also provide our users with the most relevant, authenticated, and advanced news in the entire market.</p>
            </div>
          </div>
        </div>
        <div className="container">
            
            <div className="row">
            {newsData.map(news => (
                <div className="col-lg-4 col-md-6" key={news.id}>
                <div className="single-latest-news">
                    <a href="single-news.html">
                    <div className="latest-news-bg" style={{ backgroundImage: `url(${news.imageUrl})` }}></div>
                    </a>
                    <div className="news-text-box">
                    <h3><a href="single-news.html">{news.title}</a></h3>
                    <p className="blog-meta">
                        <span className="author"><i className="fas fa-user"></i> {news.author}</span>
                        <span className="date"><i className="fas fa-calendar"></i> {news.date}</span>
                    </p>
                    <p className="excerpt">{news.excerpt}</p>
                    <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                    </div>
                </div>
                </div>
            ))}
            </div>
            
        </div>
        <div className="new">
            <div className="nb">
                    More News
            </div>
        </div>
      
      


    </div>
  );
};

export default LatestNews;
