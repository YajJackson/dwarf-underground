import React, { Component } from 'react'

class EachArticle extends Component {
    render(){
        return (
            <div className="small-6 medium-3 columns other-article">
                <a href={this.props.article.href}>
                    <img src={this.props.article.image} alt={this.props.article.alt} />
                    <p>{this.props.article.info}}</p>
                </a> 
            </div>
        )
    }
}

export default EachArticle