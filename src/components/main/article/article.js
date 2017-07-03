import React, { Component } from 'react'
import './article.css'
import Avatar from './avatar/avatar'
import ArticleBody from './ArticleBody/ArticleBody'

class Article extends Component {
    render(){
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <Avatar />
                <ArticleBody />
                
                <div className="article-links">
                    <a className="article-link" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Article