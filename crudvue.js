/**
 * Vue CRUD Application
 * 
 * This script defines a CRUD (Create, Read, Update, Delete) application using Vue.js.
 * It includes a sample set of data, Vue components for index, view, add, and edit operations,
 * and routing using Vue Router. The application is designed for both local data and API calls,
 * and appropriate comments guide you on how to switch between them.
 * 
 * Dependencies: Vue.js, Vue Router and Axios
 * 
 * Usage:
 * - The `crudApp` object contains the main application logic and data.
 * - Components are defined for index, view, add, and edit operations.
 * - Routing is set up using Vue Router.
 * - Comments guide you on how to switch between local data and API calls.
 * 
 * Note: When making API calls, uncomment the relevant axios code blocks and comment out the local data blocks.
 * 
 * Author: Md Saidul Haque
 * Date: 30 November 2023
 */

// Destructuring assignment for Vue
const { createApp, ref } = Vue;

// CRUD Application Object
var crudApp = {
    baseUrl: "table_name/", // Base URL for API calls
    appTitle: 'Vue CRUD', // Application title
    errorMessage: "", // Error message placeholder
    successMessage: "", // Success message placeholder

    // Function to clear error and success messages
    clearMessage: function () {
        this.successMessage = "";
        this.errorMessage = "";
    },

    selectedItemId: "", // Selected item ID for view, edit, or delete operations
    item: {}, // Placeholder for the current item being manipulated
    items: [
        { id: '1', name: "Md Saidul Haque", mobile: "01911223344" },
        { id: '2', name: "Mr Karim ", mobile: "01611223344" },
        { id: '3', name: "Mr Rahim", mobile: "01711223344" },
        { id: '4', name: "Mr Aboul", mobile: "01811223344" }
    ], // Sample local data (replace with API calls)

    // Function to fetch a single object by ID
    fetchObject: function (selectedItemId) {
        this.item = this.items.find(item => item.id === selectedItemId);
        /* 
         * When you call API, uncomment the axios code block below and comment out the local data block.
         */
        // axios.get(this.baseUrl + "get/" + selectedItemId).then(res => {
        //     if (res.status === 200) {
        //         this.item = this.checkType(res.data.item);
        //     }
        // });
    },

    // Function to fetch all objects
    fetchObjects: function () {
        /* 
         * When you call API, uncomment the axios code block below and comment out the local data block.
         */
        // axios.get(this.baseUrl + "get/").then(res => {
        //     if (res.status === 200) {
        //         this.item = this.checkType(res.data.item);
        //     }
        // });
    },

    // Function to save a new item
    onSave: function () {
        this.clearMessage; // Clear any existing messages
        this.items.push(crudApp.item); // Add the item to the local data
        this.successMessage = "One item has been added"; // Set success message
        crudRouter.push("/"); // Redirect to the index page

        /* 
         * When you call API, uncomment the axios code block below and comment out the local data block.
         */
        // var formData = this.formData(crudConfigs.dc_transaction_head);
        // axios.post(this.baseUrl + "post", formData, this.csrfToken).then(res => {
        //     if (res.status === 200 && res.data.code === 200) {
        //         this.successMessage = res.data.message;
        //         crudRouter.push("/");
        //     } else {
        //         this.errorMessage = res.data.message;
        //     }
        // });
    },

    // Function to update an existing item
    onUpdate: function () {
        this.clearMessage; // Clear any existing messages
        console.log(this.successMessage);
        this.successMessage = "One item has been updated"; // Set success message
        crudRouter.push("/"); // Redirect to the index page

        /* 
         * When you call API, uncomment the axios code block below and comment out the local data block.
         */
        // var formData = this.formData(crudConfigs.dc_transaction_head);
        // axios.post(this.baseUrl + "put/" + this.dc_transaction_head.id, formData, this.csrfToken).then(res => {
        //     if (res.status === 200 && res.data.code === 200) {
        //         this.successMessage = res.data.message;
        //         crudRouter.push("/");
        //     } else {
        //         this.errorMessage = res.data.message;
        //     }
        // });
    },

    // Function to delete an item
    onDelete: function (itemId) {
        this.clearMessage; // Clear any existing messages
        if (confirm("Do you want to delete?")) {
            const objIndex = this.items.findIndex((obj) => obj.id === itemId);
            this.items.splice(objIndex, 1); // Remove the item from local data
            this.errorMessage = "One item has been deleted"; // Set error message

            /* 
             * When you call API, uncomment the axios code block below and comment out the local data block.
             */
            // axios.post(this.baseUrl + "delete/" + this.selectedItemId, "", this.csrfToken).then(res => {
            //     if (res.data.code == 200) {
            //         this.fetchObjects(crudConfigs.paging.page, () => {
            //             this.successMessage = res.data.message;
            //         });
            //     } else {
            //         this.errorMessage = res.data.message;
            //     }
            // });
        }
    },

    // Function to create form data from an object
    formData(obj) {
        var formData = new FormData();
        for (let key in obj) {
            let val = obj[key];
            val = val === true ? 1 : val;
            val = val === false ? 0 : val;
            formData.append(key, val);
        }
        return formData;
    },
}

// Index Components
const crudvueIndexComponent = {
    template: "#crudvue_index",
    data() {
        return crudApp
    },
    mounted() {
    },
    methods: {
    },
};

// View  Components
const crudvueViewComponent = {
    template: "#crudvue_view",
    data() {
        return crudApp
    },
    mounted() {
        this.selectedItemId = this.$route.params.id;
        this.fetchObject(this.selectedItemId);
    },
    methods: {
    },
};
// Add  Components
const crudvueAddComponent = {
    template: "#crudvue_add",
    data() {
        return crudApp
    },
    mounted() {
        this.item = {};
    },
    methods: {
    },
};
// Edit  Components
const crudvueEditComponent = {
    template: "#crudvue_edit",
    data() {
        return crudApp
    },
    mounted() {
        this.appTitle = "Vue CRUD - Edit";
        console.log(this.appTitle);
        this.selectedItemId = this.$route.params.id;
        this.fetchObject(this.selectedItemId);
    },
    methods: {
    },
};

// Vue Router Configuration
const routes = [
    { path: '/', component: crudvueIndexComponent },
    { path: '/add', component: crudvueAddComponent, name: "add" },
    { path: '/view/:id', component: crudvueViewComponent, name: "show" },
    { path: '/edit/:id', component: crudvueEditComponent, name: "edit" }
]

// Vue Router Configuration
const crudRouter = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), // Configuring router history mode with hash
    routes, // Specifying the routes for the application
})

// Vue App Initialization
const crudvue_app = createApp({
    setup() {
        return crudApp // Setting up the application using the crudApp object
    }
})
crudvue_app.use(crudRouter) // Using the configured router in the Vue app
crudvue_app.mount('#crudvue_app') // Mounting the Vue app to the HTML element with the ID 'crudvue_app'
