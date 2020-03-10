<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        
        <label>Item Category</label> <br/>
          <label class ="container" for="Snacks">Snacks
          <input type="checkbox" id = "Snacks" value = "Snacks" v-model.lazy="item.category" required/>
          <span class="checkmark"></span>
        </label>

        <label class ="container" for = "Beverages">Beverages
          <input type="checkbox" id = "Beverages" value = "Beverages" v-model.lazy="item.category" required/><br/>
          <span class="checkmark"></span>
        </label>
          
        <label class ="container" for = "Condiments">Condiments
          <input type="checkbox" id = "Condiments" value = "Condiments" v-model.lazy="item.category" required/><br/>
          <span class="checkmark"></span>
        </label>

        <label class ="container" for = "Instant Noodles">Instant Noodles
          <input type="checkbox" id = "Instant Noodles" value = "Instant Noodles" v-model.lazy="item.category" required/><br/>
          <span class="checkmark"></span>
        </label>



        <!-- <select v-model.lazy="item.category" required>
          <option value="Snacks">Snacks</option>
          <option value="Beverages">Beverages</option>
          <option value="Condiments">Condiments</option>
          <option value="Instant Noodles">Instant Noodles</option>
        </select> <br/> -->

        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:[]
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 30px 0 15px;
    width:50%;
    align-content:left;
    position: static;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}

input[type="checkbox"]{
    display: inline-block;
    width: 10%;
}

select{
  display: inline-block;
  padding: 8px;
  width:50%;
}

</style>