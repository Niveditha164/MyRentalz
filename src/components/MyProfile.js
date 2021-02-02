import React from "react";
import {useForm} from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
function MyProfile() {
  //const { register, handleSubmit } = useForm();
  const { register, handleSubmit, watch,setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  useFormPersist("foo", {watch, setValue}, {
    storage: window.localStorage, // default window.sessionStorage
    //exclude: ['foo']
  });
  return (
    <div id="content">
      <div>
      <h4 className="label1">My profile</h4>
      <div className="flexColumn profile-block">
      
        <div className="label">Create Your profile</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flexColumn">
            <span className="flexRow">
            <label>First Name </label>
            <input name="firstName" ref={register} />
            </span>
            <span className="flexRow">
            <label>Last Name </label>
            <input name="lastName" ref={register} />
            </span>
            
            <span className="flexRow">
            <label>Address Line 1</label>
            <input name="address1" ref={register} />
            </span>
            
            <span className="flexRow">
            <label>Address Line 2 </label>
            <input name="address2" ref={register} />
            </span>
            <span className="flexRow">
              <label>Choose Country </label>
            <select name="country" ref={register}>
              <option value="india">india</option>
              <option value="US">US</option>
              <option value="other">other</option>
            </select>
            </span>

            <span className="flexRow" style={{justifyContent:"flex-end",padding:"10px"}}><input className="submitButton"type="submit" /></span>
            
          </div>
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
            <ul class="alignMe">
                <li><b>First Name</b><input type="text" name="fname" ref={register} cols="200"/></li>
                <li><b>Last Name</b><input type="text" name="lname"ref={register}/></li>
                <li><b>Address Line 1</b><input type="text" name="address1" ref={register}/></li>
                <li><b>Address Line 1</b><input type="text" name="address2" ref={register}/></li>
                <li><b>Country</b><input type="text" name="country" ref={register}/></li>
            </ul>
            <div className="but"> 
            <input  type="submit">Create</input>
            </div>
        
        
    </form> */}
      </div>
      </div>
    </div>
  );
}

export default MyProfile;
