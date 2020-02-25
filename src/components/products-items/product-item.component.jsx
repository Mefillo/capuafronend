import React from 'react';
import './product-item.component.scss'
import clickMe from '../img/arrow_click_me.png'
import sparks from '../img/sparks.png'
const Product = ({name,price,color,img,order,id,width, link}) => (
    <>  
        <div className="whole">
            <div className="card" style={{backgroungColor: `${color}`}}>
                <a id = 'redirect'href={name} style={{padding: '0px'}}>
                    <div className="sparks">
                        <img src={sparks} alt=""/>
                    </div>
                    <div className="product">
                        <div className="price">
                            <h4 className="prod">{name.toUpperCase()}</h4>
                            <h4 className="prod">{price}</h4>
                        </div>
                        <div className="read">
                            {/* <h3>Click picture</h3> */}
                            <img src={clickMe} alt=""/>
                        </div>
                    </div>
                        <div className="photo">
                            <img src={img} alt=""/>
                        </div>
                </a>
                
            </div>
        <form action={link} method="get" target="_blank">
            <button className="btn-amazon">See on Amazon</button>
        </form>

        </div>
    </>
)

export default Product;