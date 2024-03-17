import React, { useState } from 'react';
import '../../../App.css';
import Layout from '../../../Layout.jsx';
import TextBoxNavigator from '../../../components/TextboxNavigator.jsx';

const TextboxTestPage = () => {
    const titles = [
        'Title 1',
        'Title 2',
        'Title 3',
        'Title 4'
    ];
    const subTitles = [
        'Subtitle 1',
        'Subtitle 2',
        'Subtitle 3',
        'Subtitle 4'
    ];
    const textBoxes = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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