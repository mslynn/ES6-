import React from 'react';
import ReactDOM from 'react-dom';
// 继承React.Component表示App是一个组件
class TodoList   extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:'',
            todos: ['Learn React', 'Learn Ant-design', 'Learn Koa'],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this) // // 把handleClick()方法绑定到当前对象Counter上
    }

 
     // 生命方法--组件渲染完成，只执行一次
    componentDidMount(){
       //alert('componentDidMount 函数触发')
    }
    // 生命方法--避免组件重复或者无意义渲染
    componentWillUpdate(nextProps, nextState){
        console.log(nextState)
         if(nextProps.num%2){
             return true
         }
         return false
    }
    handleClick() {
        if(this.state.text){
            this.setState(state =>({
                
            }))
        }
    }
    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return (
            <div>
                 {this.state.text}
                <input type="text" value={this.state.text}  onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}


// ReactDOM.render()方法把 class对象中的内容追加到 index.html 中 <div id="root">的标签上
ReactDOM.render(<TodoList />, document.querySelector('#root'))








