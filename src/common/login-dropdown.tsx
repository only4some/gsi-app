import React from 'react';
import $ from 'jquery';
class LoginDropdown extends React.Component {
    constructor(props:any) {
        super(props);        
      }    

      componentDidMount() {
        //  $('#v-pills-tab a').on('click', function (e) {
        //     console.log('click handle',e)
        //     e.preventDefault();
        //     $('.active').removeClass('active');
        //     $(this).addClass('active');
        //  });
      }
    render() {   

    return (
        
             <div className="d-flex d-flex-row">            
            <div className="d-flex align-self-center pt-3">
                <button type="button" className="btn btn-primary">Login</button>
            </div>
         </div>
        
    );

}

}
export default LoginDropdown;