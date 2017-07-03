import React, { Component } from 'react'
import './article.css'
import Avatar from './avatar/avatar'
import ArticleBody from './ArticleBody/ArticleBody'
import ArticleLinks from './ArticleLinks/ArticleLinks'

class Article extends Component {
    render(){
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <Avatar />
                <ArticleBody />
                <ArticleLinks />
            </div>
        )
    }
}

export default Article