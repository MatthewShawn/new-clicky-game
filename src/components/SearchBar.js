import React, { Component } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input} from "reactstrap";

const FormWrapper = styled(FormGroup)`
    position: relative;
    span {
        color: red;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: -2px;
        :hover {
            color: darkred;
            cursor: pointer;
        }
    }
`

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = (event) => {
        //console.log("event.target.value", event.target.value);
        //console.log("handleInputChange was trigger!");
        //console.log (event.target.value);
        // update state of term
        // setState is ASYNCHRONOUS!!!!
        this.setState({ term: event.target.value}); //, () => {
            // normally, you don't need a callback to wait for it...
            //...just use event.target.value
            this.props.searchYouTube(event.target.value);
       // });
        // run a YouTube search base on this term
     
        //console.log("this.state.term", this.state.term);
    }

    
    render() {
        return (
            <Form onSubmit={(event) => event.preventDefault()}>
                <FormWrapper>
                    <Label for="youtubeSearch" hidden>YouTube Search</Label>
                    <Input 
                        type="text" 
                        name="youtubeSearch" 
                        id="youtubeSearch" 
                        placeholder="cat videos"
                        value={this.state.term}
                        onChange={this.handleInputChange}
                     />
                     <span onClick={() => this.setState({term: ""})}>X</span>
                </FormWrapper>
            </Form>
        )
    }
}


export default SearchBar;