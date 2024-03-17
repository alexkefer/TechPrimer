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
        'Monitor',
        'Computer Connector Cables',
        'Type-A',
        'Type-B',
        'Type-C',
        'Micro (Type-B)',
        'HDMI',
        'Ethernet',
        'Display Port',
        'Audio Jack',
        'Computer Ports',
        'USB Port',
        'Video Port',
        'Audio Port'
    ];
    const subTitles = [
        'Learning Objectives',
        'Introduction',
        'Computer Peripherals',
        'Computer Peripherals',
        'Computer Peripherals',
        'Introduction',
        'USB',
        'USB',
        'USB',
        'USB',
        'USB',
        'USB',
        'USB',
        'Introduction',
        'Computer Ports',
        'Computer Ports',
        'Computer Ports'

    ];
    const textBoxes = [
        '1. Identify and use different types of computer peripherals.\n 2. Identify different cable types, and understand their use. \n 3.Identify the different types of ports and their versions.',
        'Computer peripherals allow the user to interact with the computer in various ways. Some types of peripherals are necessary for the proper functioning of computers, while some others provide additional features and uses that may not be required. In this section we will take a look at peripherals that most computers will have, and how to use them.',
        'A mouse is a device used to control the cursor on the monitor. A cursor is the arrow visible on the screen that moves with the mouse. It is used to interact with elements visible on the screen.Most computer mice share a set of base features. There are two clickable buttons on top of the mouse, a left and right mouse button. There will also be a scrollable wheel in between the two buttons. The left mouse button is often used to select the element the cursor is pointing to, while the right mouse button is often used to perform alternative actions on said elements. The scroll wheel is used to scroll up or down on pages that are larger than the screen size can display. Some mouse models may have additional buttons and features built into the device, however they are usually not necessary to use a computer to its full potential.',
        'A keyboard is a device used to input information into a computer. Whether you are typing an email or typing in commands to make the computer perform certain tasks, it is an essential part of using a computer. Keyboards come in different sizes and shapes, with some having less keys than others. For the purpose of this section we will talk about full sized keyboards, which include all the keys a keyboard can have. The keys on a keyboard can be organized into 5 different groups, typing keys, control keys, function keys, navigation keys, and numeric keys. While it may seem overwhelming, it is not necessary to know what every key does. The most important keys to pay attention to are the typing keys highlighted in yellow. These are the keys that include all the alphabet letters, numbers, and punctuation keys used for typing. You can type uppercase letters or secondary symbols for each key by either holding down the shift key, or toggling on the caps lock key.The control keys highlighted in red are often used in combination with other keys to perform certain actions, which will be covered in a later section. The green navigational keys, particularly the arrow keys at the bottom are used to manipulate the cursor location or change the selection on the screen. Manipulating the cursor this way can be more convenient than using the mouse in some situations. The navigation keys above the arrow keys are not necessary to use for most situations, and will be covered in the advanced courses. On the right side highlighted in gray, we have the number pad. While the keys here are technically identical to the ones found in the typing section, it is grouped and organized to be similar to a calculator. It can be convenient when dealing with situations where there is a need for typing in a lot of numbers.',
        'In order to see the visual information the computer provides, it is necessary to have a monitor. Different types of monitors may have different buttons and settings to be interacted with, however all monitors generally require two connections to function. All monitors require a power connection, a cable should connect the monitor to an outlet via a power adapter. Monitors also need to be connected to the computer to receive video information. There are different types of cables and connections for this purpose, which will be covered in the subsequent sections. The important detail to know is that a monitor should have a connection to power, and a connection between the monitor and the computer.',
        'A computer connector cable is used to connect 2 different devices together. If you want to listen to your favorite song on a separate device, you could use a cable to connect a speaker to the computer. Let’s explore the different cables together.',
        'The most common form of connector most people will use. The vast majority of devices that will connect to your pc will use this form of cable.',
        'Used for printer and scanners',
        'Used for more modern devices like phones, faster',
        'Used for smaller devices',
        'Used for connecting video devices such as monitors to personal computer (PC)',
        'Used for connecting to the Internet if you don’t have a wireless connection.',
        'Similar to HDMI, used for connecting your computer to a monitor or similar device. Display ports often support higher resolutions and refresh rates compared to HDMI, although this may depend on the version of both HDMI and Display port.',
        'Used for connecting audio devices such as speakers/headphones or microphones to your computer.',
        'There are many different types of ports available on most computers, and while some may even look physically identical, there can be differences between them. Since there are too many types of ports to cover, this section will pick out the most commonly used ports and explain their use.',
        'The most common type of ports you will find and use on computers will be the USB ports. These ports are general purpose connections that can work with a wide variety of devices. Some examples may include USB flash drives, mouse and keyboard, and more. There are also different versions of USB ports to be aware of, most commonly the USB 2.0 and USB 3.0. USB 2.0 ports are usually colored black, and their capacity for data transfer is considerably lower than their 3.0 counterpart. These ports are often used to connect to devices that do not need a high amount of data transfer rate, such as the mouse and keyboard. USB 3.0 ports are often colored blue, and can carry a much larger amount of data through them. These ports are used for more demanding devices such as external hard drives. Both types of USB ports can provide power to the device connected, although more power hungry devices may require a separate power source. There are also other versions of USB ports that can handle even more data throughput that will be covered in more advanced courses.',
        'To connect the monitor to the computer, you need to make use of a video port. Most modern computers make use of either the HDMI port or the Display port for video, however some older computers may still have a VGA or DVI port. It is important to connect the cable from the monitor to the correct port on the computer. If the computer has a graphics card installed, you want to connect the cable to the ports on the graphics card. This way the graphics will be handled by the graphics card, which is usually more powerful than the integrated graphics of most processors. If you are not sure, generally the ports that lie horizontally are the ones you want to use.',
        'Most computers will have rear panel audio ports for your sound devices. Most users will only require the use of two audio ports, the red and green. The red port is used to take microphone inputs, while the green is used for outputting sound to either speakers or headphones. Some cases may also have additional audio ports near the front of the computer.'
    ];
    const images = [
        'cataloguebackground.png',
        'computerperiph.png',
        'mouse.jpeg',
        'image.png',
        'monitor.jpeg',
        'cataloguebackground.png',
        'usbtypea.png',
        'usbtypeb.png',
        'usbtypec.png',
        'typebmicro.png',
        'hdmi.png',
        'ethernet.png',
        'dp.png',
        'audiojack.png',
        'https://via.placeholder.com/150x100',
        'https://via.placeholder.com/150x100',
        'https://via.placeholder.com/150x100',
        'https://via.placeholder.com/150x100'

    ];
    return (
        <Layout>
            <TextBoxNavigator titles={titles} subTitles={subTitles} textBoxes={textBoxes} images={images} />
        </Layout>
    );
}

export default TextboxTestPage;