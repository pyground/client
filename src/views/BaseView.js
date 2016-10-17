import React, { Component } from 'react';
import Editor from 'react-codemirror';
import Header from '../components/layout/Header'

import './BaseView.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/midnight.css'
import 'codemirror/mode/python/python'

const EDITOR_OPTIONS = {
    mode:  "python",
    theme: 'midnight',
    lineNumbers: true
}

class BaseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        }

        this.updateCode = this.updateCode.bind(this)
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }

    render() {
        return (
            <main>
                <Header />
                <section className="container">
                    <div className="code">
                        <Editor value={this.state.code} onChange={this.updateCode} options={EDITOR_OPTIONS}/>
                    </div>
                    <div className="unit">
                        <h2>Unit Tests Are Coming!</h2>
                    </div>
                </section>
            </main>
        )
    }
}

export default BaseView;
