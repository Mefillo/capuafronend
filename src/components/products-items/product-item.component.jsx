import React from 'react';
import './product-item.component.scss'

const Product = ({name,price,color,img,order,id,width, link}) => (
    <>  
        <div className="whole">
            <div className="card" style={{backgroungColor: `${color}`}}>
                <a id = 'redirect'href={name} style={{padding: '0px'}}>
                    <div className="read">
                        <h3>Read more</h3>
                    </div>
                    
                    <div className="product">
                    </div>
                    <div className="price">
                        <h4 className="prod">{name.toUpperCase()}</h4>
                        <h4 className="prod">{price}</h4>
                        <div className="photo">
                            <img src={img} alt="" />
                        </div>
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