import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-white'>
            <h2 className='py-8 text-4xl font-josefin  text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Frequently asked questions</h2>
            <div class="card bg-base-100 font-raleway h-screen">
                <div class="card-body w-1/2 mx-auto">
                    <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-white">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary bg-gradient-to-r from-purple-400 to-pink-600">
                            <h2 className='text-xl'>How will you improve the performance of a React Application?</h2>
                        </div>
                        <div class="collapse-content">
                            <p className='text-black p-2'>To optimize react appilcation perfomance we have to handle several techniques such as keep component state where necessary, avoid unnecessary re-renders, avoid using dynamic for code spliting. We can use react fragment to avoid adding extra nodes to the DOM. Also we can use React suspense and react lazy for lazy loading components. React comes with many React.lazy API so that we can render a dynamic import as a regular component. </p>
                        </div>
                    </div>

                    <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-white">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary bg-gradient-to-r from-purple-400 to-pink-600">
                            <h2 className='text-xl'>What are the different ways to manage a state in a React application?</h2>
                        </div>
                        <div class="collapse-content">
                            <p className='text-black p-2'>There are 4 types different state we can manage in your React apps: <ul>
                                <li>• Local state.</li>
                                <li>• Global state.</li>
                                <li>• Server state.</li>
                                <li>• URL state.</li>
                                <p>Local state is commonly used for using useState hook. We can show any modal or component for a form component like form submission. Global state is used for data manages for multiple components. Global state is very important for update data. Server state is used for any data that comes from backend or server that must be integrated with our UI state. URL state plays important role in state. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of big website or application rely upon accessing URL state. For an example if you build a complete Blog or News related website and you cannot fetch a post based on its slug or id that is in the URL</p>
                            </ul></p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-white">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary bg-gradient-to-r from-purple-400 to-pink-600">
                            <h2 className='text-xl'>How does prototypical inheritance work?</h2>
                        </div>
                        <div class="collapse-content">
                            <p className='text-black p-2'>JavaScript's Inheritance feature is used for add methods and properties in objects. In this method an object can inherit properties and method from different objects. Frequently we use Inheritance feature for get and set the prototype of an object. Also we use javascript prototype to add new properties and methoeds to an existing object. In Javascript proto property every object has its own hidden. If we want to access the prototype with proto property. </p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-white">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary bg-gradient-to-r from-purple-400 to-pink-600">
                            <h2 className='text-xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                        </div>
                        <div class="collapse-content">
                            <p className='text-black p-2'>React render a virtual DOM at the behind and it has a copy of the old virtual DOM and the updated one, for this we should not update the state directly, so we can have two different object references in memory, we have both old virtual DOM as well as the new virtual DOM setState, and React. useState create queues for React core to update the state object of a React component. So the process to update React state is asynchronous for performance reasons. That's why changes don't feel immediately.</p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box text-white">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary bg-gradient-to-r from-purple-400 to-pink-600">
                            <h2 className='text-xl'>What is a unit test? Why should write unit tests?</h2>
                        </div>
                        <div class="collapse-content">
                            <p className='text-black p-2'>UNIT testing is used for software testing where every single units or components are tested. The main purpose of UNIT testing for validating code and perfoms. This testing is run during the development of an application. UNIT testing is very imporntant for software developers for saving time and minimal during test. Unit tests help to fix bugs early in the development also it helps the developers to understand the code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;