

Vue.component('to-do-app', {
props: {},
data() {
return {}
},
template: 
`<div id="app" >
<h1>To Do List <img class="image" src="checkmark.jpg"/> </h1>

<list-items/>

</div>`,


})

Vue.component('list-items', {
  props: {},
  data() {
  return {
    items: [
      { task: 
        {name: null, isComplete: false, dayTime: null, dueDate: null, id: null}
      }
    ],
    id: 0,
    }
  },
  methods: {
       //Adds item to list, if nothing in input nothing happens. Resets input to blank
      AddItem() {                                         
        inputField = document.getElementById(`input`);
        inputDue = document.getElementById(`due`);
         
        if (inputField.value != "") {
          var d = new Date();
          var date = d.toLocaleString();
          this.items.push({task: {name: (inputField.value), isComplete: false, dayTime: date, dueDate: (inputDue.value), id: this.id}});
          
          //console.log(this.items[i].task.id); //Testing Purposes 
          this.id += 1;     
        }
      inputField.value = "";
      inputDue.value = "";                                
      },
      //Delete item from list
      DeleteCompleted() {
        var i = 0;
        while(i < this.items.length) {
          if (this.items[i].task.isComplete === true) {
            this.items.splice(i,1);
            --i;
          }
          ++i;
      }
    },
      clicked(event) {
        var x = event.target;
        delete x;
   }
  },
  template: 
  `<div> 
  <ul v-if="items[1]" class = "inner">
  <li v-if="item.task.name" v-for="(item, index) in items" :key="item.id" >
    
    <div v-show="item.task.isComplete" id = index> 
      <h5><del><input type="checkbox" v-model="item.task.isComplete" checked> {{ item.task.name }}</del></h5>
      <p v-show="item.task.dueDate">Due: {{ item.task.dueDate }}</p> 
      <p class="date">Created: {{ item.task.dayTime}}</p>
    </div>
    
    <div v-show="!item.task.isComplete" id=index>
      <h5><input type="checkbox" v-model="item.task.isComplete"> {{ item.task.name }}</h5> 
      <p v-show="item.task.dueDate"> Due: {{ item.task.dueDate }}</p> 
      <p class = "date">Created: {{ item.task.dayTime }}</p>
    </div>
  </li>
</ul>

  <div class="input-group mb3 input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">New Item:</span>
    </div>
      <input @keyup.enter="AddItem" type="text" id="input">
      <div class="input-group-prepend">
      <span class="input-group-text">Due:</span>
    </div>
      <input @keyup.enter="AddItem" placeholder=" ex. August 1st" type="text" id="due">
    </div>
    
  <br>
    <button class="btn btn-med btn-outline-primary" style="danger" @click="AddItem" id="addItem">Add Task</button>
    <button class = "btn btn-med btn-outline-secondary" @click="DeleteCompleted">Clear Completed</button>  
</div>`,
  })


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      greeting: 'what up',
      id: 0,
      //To do list items
      items: []
    },

    methods: {
      
      //Adds item to list, if nothing in input nothing happens. Resets input to blank
      AddItem() {                                         
        inputField = document.getElementById(`input`);
        
        if (inputField.value != "") {
          this.items.push({item: (inputField.value) });
          
          //Testing Purposes
          console.log(this.items,this.id);        
        }
      this.id+=2;  
      inputField.value="";                                
      }
    }
  })

  //Create multiple components to accompolish to do list