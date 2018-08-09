
import React from 'react';
import './ActionSheet.css';
export default class ActionSheet extends React.Component {
   static defaultProps = {
     isActive: false,
     title: '',
     type:'',
     menus: [],
     onCancel: () => {},
   };
   getMaskClassName = () => {
     if (!this.props.isActive) {
       return 'mask hideMask';
     }
     return 'mask showMask';
   }

   getMenuClassName = () => {
     if (!this.props.isActive) {
       return 'menu';
     }
     else if(this.props.type==='ios'){
     return 'menu showMenu';
   }else if(this.props.type==='Andriod'){
     return ' menu1';
   }
}


   handleMenuItemClick = idx => {
     const { menus, onCancel } = this.props;
     menus[idx].click && menus[idx].click(idx);

     onCancel();
   }

   render() {
     const { title, menus } = this.props;
     return (
       <div className="actionsheetCtn">
         <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
         <div className={this.getMenuClassName()}>
           {
             !title.length
             ? null
             : <div className="title divider">{title}</div>
           }
           {
             menus.map((item, idx) => (
               <div
                 className="btn divider"
                 key={`ActionSheet${idx}`}
                 onClick={() => this.handleMenuItemClick(idx)}
               >
                 {item.title}
               </div>
             ))
           }
           <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
         </div>
       </div>
     );
   }
 }