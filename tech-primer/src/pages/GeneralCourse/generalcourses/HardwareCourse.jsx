import React, { useState } from 'react';
import '../../../App.css';
import Layout from '../../../Layout.jsx';
import TextBoxNavigator from '../../../components/TextboxNavigator.jsx';

const TextboxTestPage = () => {
    const titles = [
        'Welcome to the Hardware Course',
        'Computer Peripherals',
        'Mouse',
        'Keyboard',
        'Monitor'
    ];
    const subTitles = [
        'Learning Objectives',
        'Introduction',
        'Computer Peripherals',
        'Computer Peripherals',
        'Computer Peripherals'
    ];
    const textBoxes = [
        '1. Identify and use different types of computer peripherals.\n 2. Identify different cable types, and understand their use. \n 3.Identify the different types of ports and their versions.',
        'Computer peripherals allow the user to interact with the computer in various ways. Some types of peripherals are necessary for the proper functioning of computers, while some others provide additional features and uses that may not be required. In this section we will take a look at peripherals that most computers will have, and how to use them.',
        'A mouse is a device used to control the cursor on the monitor. A cursor is the arrow visible on the screen that moves with the mouse. It is used to interact with elements visible on the screen.Most computer mice share a set of base features. There are two clickable buttons on top of the mouse, a left and right mouse button. There will also be a scrollable wheel in between the two buttons. The left mouse button is often used to select the element the cursor is pointing to, while the right mouse button is often used to perform alternative actions on said elements. The scroll wheel is used to scroll up or down on pages that are larger than the screen size can display. Some mouse models may have additional buttons and features built into the device, however they are usually not necessary to use a computer to its full potential.',
        'A keyboard is a device used to input information into a computer. Whether you are typing an email or typing in commands to make the computer perform certain tasks, it is an essential part of using a computer. Keyboards come in different sizes and shapes, with some having less keys than others. For the purpose of this section we will talk about full sized keyboards, which include all the keys a keyboard can have. The keys on a keyboard can be organized into 5 different groups, typing keys, control keys, function keys, navigation keys, and numeric keys. While it may seem overwhelming, it is not necessary to know what every key does. The most important keys to pay attention to are the typing keys highlighted in yellow. These are the keys that include all the alphabet letters, numbers, and punctuation keys used for typing. You can type uppercase letters or secondary symbols for each key by either holding down the shift key, or toggling on the caps lock key.The control keys highlighted in red are often used in combination with other keys to perform certain actions, which will be covered in a later section. The green navigational keys, particularly the arrow keys at the bottom are used to manipulate the cursor location or change the selection on the screen. Manipulating the cursor this way can be more convenient than using the mouse in some situations. The navigation keys above the arrow keys are not necessary to use for most situations, and will be covered in the advanced courses. On the right side highlighted in gray, we have the number pad. While the keys here are technically identical to the ones found in the typing section, it is grouped and organized to be similar to a calculator. It can be convenient when dealing with situations where there is a need for typing in a lot of numbers.',
        'In order to see the visual information the computer provides, it is necessary to have a monitor. Different types of monitors may have different buttons and settings to be interacted with, however all monitors generally require two connections to function. All monitors require a power connection, a cable should connect the monitor to an outlet via a power adapter. Monitors also need to be connected to the computer to receive video information. There are different types of cables and connections for this purpose, which will be covered in the subsequent sections. The important detail to know is that a monitor should have a connection to power, and a connection between the monitor and the computer.'
    ];
    const images = [
        'cataloguebackground.png',
        'computerperiph.png',
        'mouse.jpeg',
        'image.png',
        'monitor.jpeg'
    ];
    return (
        <Layout>
            <TextBoxNavigator titles={titles} subTitles={subTitles} textBoxes={textBoxes} images={images} />
        </Layout>
    );
}

export default TextboxTestPage;