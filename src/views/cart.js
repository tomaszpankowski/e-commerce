import React,{Component} from "react";
import CartS1 from "../components/cart-s1";

class CartPage extends Component{
    render(){
        return(
            <main 
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <CartS1/>
            </main>
        );
    }
}

export default CartPage;