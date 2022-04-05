import React from "react";

const Blog = () => {
    return (
        <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div class="grid grid-cols-1 gap-24 md:grid-cols-1">
                <div>
                    <h1 class="mb-6 text-2xl font-light text-gray-900 md:text-3xl">
                        Questions & Answer Page
                    </h1>
                    <p class="mt-10 mb-3 font-semibold text-gray-900">
                        What is Contex API........????
                    </p>
                    <p class="text-gray-600">
                        Context is primarily used when some data needs to be accessible by many components at different nesting levels.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. As the tradition here, we will be working with a project where we have the global data (in the parent component) being accessed by its children component through the props.
                    </p>
                    <p class="mt-10 mb-3 font-semibold text-gray-900">
                        what is semantic tag..........????
                    </p>
                    <p class="text-gray-600">
                        One of the most important features of HTML5 is its semantics.Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Semantic Html elements are those that clearly describe their meaning in a human and machine readable way.It’s better for Search Engine Optimization.It provides screen readers with information.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Blog;