'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/footer.css';


class Footer extends Component {
    render() {
        return(
            <div className='pria-footer'>
                <p><span>© 大小证券有限公司</span></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    navList: state.navList
});

export default connect (mapStateToProps)(Footer)