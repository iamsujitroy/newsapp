import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            totalResults: 0,
            page: 1,
            pageSize: 9,
            loading: false,
        }
    }

    componentDidMount() {
        let url = `${this.props.apiLink}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (parsedData) => { this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults }); console.log(parsedData); })

    }
    fetchMoreData = async () => {
        await this.setState({ page: this.state.page + 1 })
         let url = await `${this.props.apiLink}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        await fetch(url)
            .then(res => res.json())
            .then(
                (parsedData) => { this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults }); console.log(parsedData); })
    };

    render() {
        return (
            <div>
                <div className='news-items-container'>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loading />}
                    >
                        {this.state.articles.map(article => {
                            return (
                                <NewsItem title={article.title ? article.title : ''}
                                    authorName={article.author}
                                    source={article.source.name}
                                    date={article.publishedAt}
                                    description={article.description ? article.description : ''} imageUrl={article.urlToImage ? article.urlToImage : process.env.PUBLIC_URL + "./images/No_Image_Available.jpg"} key={article.url} newsUrl={article.url} />
                            )
                        })}
                    </InfiniteScroll>
                </div>
            </div>


        )
    }
}