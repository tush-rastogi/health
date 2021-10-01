const Form = () => {
    return ( 


       <div className="form">

         <form>
           <h1>Diabetes</h1>
          <label htmlFor="">
            Patient Id
          </label>
     
        <input type="text">
        </input>
          
          <label htmlFor="">Date</label>
      

         <input type="date" />
 
         
          <label htmlFor="">Phone</label>
        

         <input type="number"  minlength="6" maxlength="6"/>

         
          <label htmlFor="">Email</label>
        

         <input type="email" />
 
       
          <label htmlFor="">Age</label>
         

         <input type="number" />
          

        
          <label htmlFor="">Sex</label>
         

         <select id="cars">
     <option value="Female">F</option>
  <option value="Male">M</option>
   
</select>


       
          <label htmlFor="">Glucose Level</label>
        

         <input type="number" /> <br />
          <label htmlFor="">BP Level</label>
       

         <input type="number" />

        
          <label htmlFor="">Skin Thickness</label>
        

         <input type="number" />

          <label htmlFor="">Insulin level:</label>
        

         <input type="number" />

         </form>
       </div>




     );
}
 
export default Form ;