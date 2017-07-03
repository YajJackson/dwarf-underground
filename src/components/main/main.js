import React, { Component } from 'react'
import Article from './article/article'
import Aside from './aside/aside'
import Others from './otherArticles/otherArticles'

class Main extends Component {
    render(){
        return (
            <main className="expanded row">
                <Article />
                <Aside />
                <Others />
            </main>
        )
    }
}

export default Main