import React,{Component} from "react";
import AboutS1 from "../components/about-s1";
import AboutS2 from "../components/about-s2";
import AboutS3 from "../components/about-s3";

class AboutPage extends Component{
    render(){
        return(
            <main
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <AboutS1/>
                <AboutS2/>
                <AboutS3/>
            </main>
        );
    }
}

export default AboutPage;