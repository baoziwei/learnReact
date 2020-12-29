import React, { Component, PureComponent } from 'react';
// import Rainbow from  '../hoc/Rainbow'
import axios from 'axios'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articleList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            console.log(res);
            this.setState({
                articleList: res.data.slice(0,20)
            })
        })
    }
    render() {
        const {articleList} = this.state 
        const articleListAll = articleList.length ? (
            articleList.map(item =>{
                return(
                    <div className='post card' key={item.id}>
                        <div className='card-content'>
                        <p className='card-title'>{item.title}</p>
                        <p className=''>{item.id}</p>
                        </div>

                    </div>
                )
            })
        ):(
            <div>没有数据</div>
        )
        return ( 
            <div className='container'>
                <h3 className='页面'>HOME页面</h3>
                <p>欢迎来到home页面</p>
                {articleListAll}

            </div>
         );
    }
}
 
export default Home