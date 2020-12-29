import React, { PureComponent } from 'react';
import {Link,NavLink, withRouter} from 'react-router-dom'

const Navber = (props) =>{
    // NavLink: 可查看激活状态 aria-current="page"  class="active"
    // 页面重定向
    console.log(props,666);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 3000);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className='container'>
                <a href="/" className='brand-logo'>我是标题</a>
                <ul className='right'>
                    <Link to="/">Home</Link>
                    <NavLink to="/about">about</NavLink>
                    <Link to="/content">content</Link>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navber)