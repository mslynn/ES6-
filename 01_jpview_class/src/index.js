import React from 'react';
import ReactDOM from 'react-dom';
// 继承React.Component表示App是一个组件
class Counter  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:1
        }
        this.handleClick = this.handleClick.bind(this) // // 把handleClick()方法绑定到当前对象Counter上
    }

    handleClick(){
        this.setState({
            num:this.state.num + 1
        })
    }
    render(){
        return (
            <div>
               <p>{this.state.num}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}


// ReactDOM.render()方法把 App中的内容追加到 index.html 中 <div id="root">的标签上
ReactDOM.render(<Counter />, document.querySelector('#root'))








