import React,{Component} from "react";
import IndexS1 from "../components/index-s1";

class HomePage extends Component{
    render(){
        return(
            <main 
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <IndexS1/>
            </main>
        );
    }
}

export default HomePage;