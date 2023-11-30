# vueJS3_crud
CRUD skeleton application using vueJs 3. If someone understand the whole process/Lifecycle of CRUD by this skeleton, He/She will be able do any project using vuejs speacially API based one page UI application 

``vueJS 3 ``
Vue 3 is the current, latest major version of Vue. It contains new features ... This means Vue 2 will reach End of Life on December 31st, 2023.

``vue routing``
Vuejs – routing router is great for creating Single Page Applications

``vue routing``
Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data.

# Test Demo 
Just pull repository and open in browse. 

# Main Skeleton - HTML
APP: 
``<div id="crudvue_app" v-cloak class="card" >  
                        <div class="card-content">
                            <div class="card-header" title=""><h1>{{appTitle}}</h1></div>
                            <div class="nav">
                                <router-link to="/" class="btn btn-success m-2">Index</router-link> 
                                <router-link class="btn btn-info m-2" to="/add">Add</router-link>
                            </div>
                            <div class="col-12"> 
                                {{successMessage}}
                                <div v-if="errorMessage"  v-html="errorMessage"  class="alert alert-danger m-1"></div>
                                <div v-if="successMessage"  v-html="successMessage"  class="alert alert-success m-1"></div> 
                            </div>
                        </div> 
                        <router-view></router-view>
                    </div>`` 
 Tamplate: 
 ``
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
 ``
# Main Skeleton - vueJS



# Enjoy!!! 
