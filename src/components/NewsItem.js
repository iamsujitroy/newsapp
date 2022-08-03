import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, source, date, authorName } = this.props;
        return (
            <div className='news-item'>


                <img src={imageUrl} alt="" className="news-image" />
                <a href={newsUrl} target='_blank' rel="noreferrer"><h2 className="news-title">{title}</h2></a>
                <p className="news-description">{description}</p>
                <p className='article-info'>By {authorName} on {date}<br/>{source}</p>

            </div>
        )
    }
}
