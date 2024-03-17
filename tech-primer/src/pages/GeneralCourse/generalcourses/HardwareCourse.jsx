import React, { useState } from 'react';
import '../../../App.css';
import Layout from '../../../Layout.jsx';
import TextBoxNavigator from '../../../components/TextboxNavigator.jsx';

const TextboxTestPage = () => {
    const titles = [
        'Welcome to the Hardware Course',
        'Title 2',
        'Title 3',
        'Title 4'
    ];
    const subTitles = [
        'Learning Objectives',
        'Subtitle 2',
        'Subtitle 3',
        'Subtitle 4'
    ];
    const textBoxes = [
        '1. Identify and use different types of computer peripherals.\n 2. Identify different cable types, and understand their use. \n 3.Identify the different types of ports and their versions.',
        'Text Box 2',
        'Text Box 3',
        'Text Box 4'
    ];
    const images = [
        'cataloguebackground.png',
        'https://via.placeholder.com/200x100',
        'https://via.placeholder.com/250x100',
        'https://via.placeholder.com/250x150'
    ];
    return (
        <Layout>
            <TextBoxNavigator titles={titles} subTitles={subTitles} textBoxes={textBoxes} images={images} />
        </Layout>
    );
}

export default TextboxTestPage;