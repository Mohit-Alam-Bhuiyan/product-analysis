import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>What is context API?</h3>
            <p>he Context API is a React API that allows you to share data between components without having to pass props down manually at every level. This can be useful for sharing data that is common to many components, such as the current user, the current theme, or the current location.

            To use the Context API, you first need to create a context provider. A context provider is a component that provides access to the context data. You can then use the context consumer to access the data from within other components. </p>

            <h3>What is semantic tag?</h3>
            <p>n HTML, a semantic tag is a tag that conveys the meaning of the content it contains. For example, the tag is a semantic tag that indicates that the content it contains is a header. Semantic tags are important because they help search engines and other user agents understand the meaning of your content. This can lead to better search results and a better user experience.</p>
        </div>
    );
};

export default Blogs;



