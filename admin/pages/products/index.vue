<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new Product</h2>

            <form action="">
              <!-- Category  -->
              <div class="a-spacing-top-medium">
                <label for="">Category</label>
                <select name="" id="" class="a-select-option" v-model="categoryID">
                  <option v-for="(category) in categories" :key="category._id" :value="category._id">{{category.type}}</option>
                
                </select>                
              </div>
{{categoryID}}
              <!-- Owner  -->
              <div class="a-spacing-top-medium">
                <label for="">Owner</label>
                <select name="" id="" class="a-select-option"  v-model="ownerID">
                  <option v-for="(owner) in owners" :key="owner._id" :value="owner._id">{{owner.name}}</option>
                 
                </select>
              </div>
{{ownerID}}
              <!-- Title  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Title</label>
               <input type="text" class="a-input-text" placeholder="" style="width: 100%" v-model="title">
 {{title}}             
              </div>

              <!-- Price  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Price</label>
               <input type="number" class="a-input-text" placeholder="" style="width: 100%" v-model="price">
              </div>
{{price}}
              <!-- stockQuantity  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">stockQuantity</label>
               <input type="number" class="a-input-text" placeholder="" style="width: 100%" v-model="stockQuantity">
              </div>
{{stockQuantity}}
              <!-- Description  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Description</label>
               <textarea  v-model="description" name="" id="" cols="30" rows="5" style="width: 100%" placeholder="Descrição do produto"></textarea>
              </div>
                {{description}}
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
              <hr>  
               <div class="a-spacing-top-large">
                  <span class="a-button-register">
                      <span class="a-button-inner">
                          <span class="a-button-text" @click="onAddProduct">Add product</span>
                      </span>
                  </span>  
                </div>

            </form>
          </div>
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
            categoryID: '',
            ownerID: '',
            title: '',
            price: 0,
            description: '',
            selectedFile: null,
            stockQuantity: 1,
            fileName: ""
        }
    },
    methods: {
        onFileSeletecd(event){
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            this.fileName =event.target.files[0].name;
        },
        async onAddProduct(){
            let data = new Object();
            data.title = this.title
            data.price = this.price
            data.description = this.description
            data.ownerID = this.ownerID
            data.stockQuantity = this.stockQuantity
            data.categoryID = this.categoryID
           // data.append("photo", this.selectedFile, this.selectedFile.name);
           console.log(data)

            let result = await this.$axios.$post("http://localhost:3030/api/products", {data});

            
            this.$router.push("/");

        }
    },
    async asyncData({ $axios }){
        try{
             let categories = $axios.$get("http://localhost:3030/api/categories");
             let owners = $axios.$get("http://localhost:3030/api/owners");

        // Esperar todas as promessas serem resolvidas pra não dar merda
        const [catResponse, ownerResponse] = await Promise.all([
            categories,
            owners
        ]);

        console.log(catResponse);

        return {
            categories: catResponse.categories,
            owners: ownerResponse.owners
        };
        } catch (err) {
            console.log(err);
        }
       
    } 
};
</script>

<style></style>
