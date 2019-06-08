import React from 'react';
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{

       const height=this.imageRef.current.clientHeight;
       console.log(height);
       const spans=Math.ceil(height/10);
       this.setState({spans})//here 1st span is key and the 2nd span it its value from previous line..
    }
     
    render(){
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                alt={this.props.image.description}
                src={this.props.image.urls.small}      /> 
            </div>
        );
    }
}
export default ImageCard;