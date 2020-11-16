<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Update {{product.title}}</h2>

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
               <input type="text" class="a-input-text" style="width: 100%" v-model="title" :placeholder="product.title">
 {{title}}             
              </div>

              <!-- Price  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Price</label>
               <input type="number" class="a-input-text" style="width: 100%" v-model="price" :placeholder="product.price">
              </div>
{{price}}
              <!-- stockQuantity  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">stockQuantity</label>
               <input type="number" class="a-input-text" style="width: 100%" v-model="stockQuantity" :placeholder="product.stockQuantity">
              </div>
{{stockQuantity}}
              <!-- Description  -->
              <div class="a-spacing-top-medium">
                <label for="" style="margin-bottom: 0px">Description</label>
               <textarea  v-model="description" name="" id="" cols="30" rows="5" style="width: 100%" :placeholder="product.description"></textarea>
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
                          <span class="a-button-text" @click="onUpdateProduct">Update product</span>
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
            price: '',
            description: '',
            selectedFile: null,
            stockQuantity: '',
            fileName: ""
        }
    },
    methods: {
        onFileSeletecd(event){
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            this.fileName =event.target.files[0].name;
        },
        async onUpdateProduct(){
            let data = new Object();
            data.title = this.title
            data.price = this.price
            data.description = this.description
            data.ownerID = this.ownerID
            data.stockQuantity = this.stockQuantity
            data.categoryID = this.categoryID
           // data.append("photo", this.selectedFile, this.selectedFile.name);
           console.log(data)

            let result = await this.$axios.$put(`http://localhost:3030/api/products/${this.$route.params.id}`, {data});

            
            this.$router.push("/");

        }
    },
    async asyncData({ $axios, params }){
        try{
             let categories = $axios.$get("http://localhost:3030/api/categories");
             let owners = $axios.$get("http://localhost:3030/api/owners");
             let product = $axios.$get(`http://localhost:3030/api/products/${params.id}`);

        // Esperar todas as promessas serem resolvidas pra não dar merda
        const [catResponse, ownerResponse, productResponse] = await Promise.all([
            categories,
            owners,
            product
        ]);

        console.log(productResponse);

        return {
            categories: catResponse.categories,
            owners: ownerResponse.owners,
            product: productResponse.product
        };
        } catch (err) {
            console.log(err);
        }
       
    } 
};
</script>

<style></style>
