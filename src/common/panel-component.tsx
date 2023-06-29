import React from 'react';
import $ from 'jquery';
class PanelComponent extends React.Component {
    constructor(props:any) {
        super(props);        
      }
     

      componentDidMount() {
         $('#v-pills-tab a').on('click', function (e) {
            console.log('click handle',e)
            e.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
         });
      }
    render() {   

    return (
        <div className="panel">
            <div className="nav flex-column nav-pills"  data-toggle="pill" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
            </div>

        </div>
    );

}

}
export default PanelComponent;