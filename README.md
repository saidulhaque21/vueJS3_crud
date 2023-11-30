# vueJS3_crud
CRUD skeleton application using vueJs 3. If someone understand the whole process/Lifecycle of CRUD by this skeleton, He/She will be able do any project using vuejs speacially API based one page UI application 

**vueJS 3 **
Vue 3 is the current, latest major version of Vue. It contains new features ... This means Vue 2 will reach End of Life on December 31st, 2023. For quick start : https://vuejs.org/guide/quick-start.html

**vue routing**
Vuejs – routing router is great for creating Single Page Applications. For CDN link: https://router.vuejs.org/installation.html

**Axios**
Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. For CDN: https://axios-http.com/docs/intro

# Application & Skeleton
One can build vueJS application using both CDN or NPN. If you want to build monolithic app means backend and front-end together, then CDN is best choose. In this example, I used CDN where 
there are two parts in the skeleton - HTML and JS. 

# Main Skeleton - HTML

**APP: **

```
<div id="crudvue_app" v-cloak class="card" >  
                        <div class="card-content">
                            <div class="card-header" title=""><h1>{{appTitle}}</h1></div>
                            <div class="nav">
                                <router-link to="/" class="btn btn-success m-2">Index</router-link> 
                                <router-link class="btn btn-info m-2" to="/add">Add</router-link>
                            </div>
                            <div class="col-12"> 
                                <div v-if="errorMessage"  v-html="errorMessage"  class="alert alert-danger m-1"></div>
                                <div v-if="successMessage"  v-html="successMessage"  class="alert alert-success m-1"></div> 
                            </div>
                        </div> 
                        <router-view></router-view>
                    </div>
```

** Tamplate - index, add, edit and view: **

```
<template id="crudvue_index">
                        <div class="">
                            <h2>CRUD Index</h2>
                            <p>This is CRUD index page of VueJs 3 application </p> 
                        </div>
                    </template>
                    <template id="crudvue_view">
                        <div class="">
                            <h2>CRUD View</h2>
                            <p>This is CRUD view  page of VueJs 3 application</p> 
                            
                        </div>
                    </template>
                    <template id="crudvue_add">
                        <div class="">
                            <h2>CRUD Add</h2>
                            <p>This is CRUD add  page of VueJs 3 application</p> 
                        </div>
                    </template>
                    <template id="crudvue_edit">
                        <div class="">
                            <h2>CRUD Edit</h2>
                            <p>This is CRUD edit  page of VueJs 3 application</p> 
                           
                        </div>
                    </template>
```
# Main Skeleton - vueJS
```
// Vue CRUD application using Vue 3

// Defining a Vue application with necessary properties and methods
const { createApp, ref } = Vue;
var crudApp = {
    baseUrl: "table_name/",
    appTitle: 'Vue CRUD',
    errorMessage: "",
    successMessage: "",

    // Function to fetch a single object by its ID
    fetchObject: function (selectedItemId) {
        // Implementation goes here
    },

    // Function to fetch all objects
    fetchObjects: function () {
        // Implementation goes here
    },

    // Function to handle save operation
    onSave: function () {
        // Implementation goes here
    },

    // Function to handle update operation
    onUpdate: function () {
        // Implementation goes here
    },

    // Function to handle delete operation
    onDelete: function (itemId) {
        // Implementation goes here
    },
}

// Vue components for different CRUD operations
const crudvueIndexComponent = {
    template: "#crudvue_index",
    data() {
        return crudApp;
    },
    mounted() {
        // Implementation goes here
    },
    methods: {
        // Implementation goes here
    },
};

const crudvueViewComponent = {
    template: "#crudvue_view",
    data() {
        return crudApp;
    },
    mounted() {
        // Implementation goes here
    },
    methods: {
        // Implementation goes here
    },
};

const crudvueAddComponent = {
    template: "#crudvue_add",
    data() {
        return crudApp;
    },
    mounted() {
        this.item = {};
    },
    methods: {
        // Implementation goes here
    },
};

const crudvueEditComponent = {
    template: "#crudvue_edit",
    data() {
        return crudApp;
    },
    mounted() {
        // Implementation goes here
    },
    methods: {
        // Implementation goes here
    },
};

// Vue Router configuration
const routes = [
    { path: '/', component: crudvueIndexComponent },
    { path: '/add', component: crudvueAddComponent, name: "add" },
    { path: '/view/:id', component: crudvueViewComponent, name: "show" },
    { path: '/edit/:id', component: crudvueEditComponent, name: "edit" }
]

const crudRouter = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

// Creating the Vue application
const crudvue_app = createApp({
    setup() {
        return crudApp;
    }
})

// Using Vue Router and mounting the application
crudvue_app.use(crudRouter)
crudvue_app.mount('#crudvue_app')

```
# Test Demo 
Just pull repository and open in browse. 

# Enjoy!!! 

