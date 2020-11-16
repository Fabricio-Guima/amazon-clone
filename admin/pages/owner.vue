<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new owner</h2>
          <form>
            <!-- Name -->
            <div class="a-spacing-top-medium">
              <label for="">Name</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="name"
              />
              </div>

            <!-- About -->
            <div class="a-spacing-top-medium">
              <label for="">About</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="about"
              />
             </div>
             <!-- Photo  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                    <label class="choosefile-button">
                        <i class="fal fa-plus"></i>
                        <input type="file" @change="onFileSeletecd">
                        <p style="margin-top: -70px">{{fileName}}</p>
                    </label>
                </div>
              </div>
              
               <!-- Button  -->               
               <div class="a-spacing-top-large">
                  <span class="a-button-register">
                      <span class="a-button-inner">
                          <span class="a-button-text" @click="onAddOwner">Add owner</span>
                      </span>
                  </span>  
                </div>
            
          </form>
            <br>
            <ul class="list-group-item">
                <li  v-for="(owner) in owners" :key="owner._id">{{owner.name}}</li>
            </ul>

        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
     data(){
        return {
            name: '',
            about: '',
            selectedFile : null,
            fileName: ''            
        }
    },
   async asyncData({ $axios}){
    try {
      let response = await $axios.$get("http://localhost:3030/api/owners");
      console.log(response);

      return {
        owners: response.owners
      }
    }catch (err){

    }
    
  },   
    methods: {

         onFileSeletecd(event){
            this.selectedFile = event.target.files[0];           
            this.fileName =event.target.files[0].name;
        },
       async onAddOwner(){
           try {
                let data = new Object();
                data.name = this.name;
                data.about = this.about;
                //data.photo = this.photo;

           let response = await this.$axios.$post("http://localhost:3030/api/owners", {data});
                    
            this.owners.push(data);
            this.name = '';
            this.about = '';
            this.selectedFile = null;
            this.fileName = '';
                    
           } catch (err){
                console.log(err);
           }
          

        }
    },
   
};
</script>

<style>
</style>