import React,{Component} from "react";
import ContactData from "../components/contact-data";
import ContactForm from "../components/contact-form";

class ContactPage extends Component{
    render(){
        return(
            <main 
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <ContactData/>
                <ContactForm/>
            </main>
        );
    }
}

export default ContactPage;