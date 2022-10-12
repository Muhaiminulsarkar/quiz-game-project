import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Topic from '../Topic/Topic';

const Subjects = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>
            <Hero></Hero>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 topic-pic">
                {
                    topics.data.map(topic => <Topic

                        key={topic.id}
                        topic={topic}
                    >

                    </Topic>)
                }
            </div>
        </div>
    );
};

export default Subjects;