import React from 'react';

import {Cardcontent} from './cardcontent';
const Card=()=> {
  return(
   <div>
    <section className="pricing py-5">
        <div ClassName="container">
            <div className="row">

           <Cardcontent class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted" 
           icon1="fa fa-times"  icon2="fa fa-times" type="free" rate="0" users="single user" Storage="5GB storage"
           subdomains="free subdomain">
               </Cardcontent>


               <Cardcontent  class4="text-muted"  type="plus" rate="9" users="5 users" Storage="50GB storage"
            icon1="fa fa-check"  icon2="fa fa-times" subdomains="free subdomain">
               </Cardcontent>

               <Cardcontent  type="pro" rate="49" users="unlimited" Storage="150GB storage"
            icon1="fa fa-check"  icon2="fa fa-check" subdomains="free subdomain">
               </Cardcontent>
               
            </div>
        </div>
        </section>   
  </div>
  )
}
 

export default Card;
