import React from 'react'


export default function TextForm(props){
    return(
        <>
        <form>
            <h4>{props.heading}</h4>
  <div class="mb-3">
    
    <textarea type="email" rows="8" class="form-control"  id="myBox" aria-describedby="emailHelp"></textarea>
    <button className='btn-primary btn'>Process</button>
 

  </div>

</form>
        </>
    )
}