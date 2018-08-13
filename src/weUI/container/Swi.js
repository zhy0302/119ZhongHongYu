import React from 'react';
import Switchs from '../component/Switchs/Switchs';
export default class Swi extends React.Component {
        state = {
            checked: false
        }
        handleOnChange = (check) => {
            console.log('handleOnChange', check);   
        }
        render() {
            return (
                <div style={{
                    padding: 25
                }}>
                    <Switchs
                        checked={true}
                        onChange={this.handleOnChange}
                    />
                </div>
            )
        }
    }




















    // state = {

    // };
    // render(){
    //     return(
    //         <div>
    //              <div >开关</div>
    //             <Switchs
    //             />
    //        </div>
    //     )
    // }
    // }