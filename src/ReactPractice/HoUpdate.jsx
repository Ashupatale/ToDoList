import React from 'react'

const UpdatedComp = OriginalComp =>{
    class NewComp extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
   
        IncrementCount=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return(
                <>
                   <OriginalComp count={this.state.count}
                    IncrementCount={this.IncrementCount}/>

                </>
            )
        }
    }

    return NewComp;
}

export default UpdatedComp