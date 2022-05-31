import React,{Component} from "react";
import FurnitureS1 from "../components/furniture-s1";

class FurniturePage extends Component{
    render(){
        return(
            <main  
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <FurnitureS1/>
            </main>
        );
    }
}

export default FurniturePage;