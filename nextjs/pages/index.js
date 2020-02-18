import introStyle from '../styles/contactIcons.module.css';
import NavBar from '../components/navbar';
import Intro from '../components/intro';
import Head from 'next/head';
import Section from '../components/section';
import SectionItem from '../components/sectionItem';
import { FaBluetooth } from 'react-icons/fa';
import ContactMe from '../components/contactMe';

const Index = (props) => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <div className="intro">
                <NavBar />
                <Intro />
            </div>
            <Section title="Work" >
                <SectionItem
                    title="Milk Moovement"
                    subtitle="Full Stack Developer"
                    image="mm.png"
                    description="Milk Moovement is a powerful tool that connects all players in the raw milk supply chain. With features for transportation monitoring, production tracking, quality monitoring and producer payment, Milk Moovement is the only tool your team needs to manage raw milk."
                >
                    <img src="laravel.png" alt="laravel" />
                    <img src="reactJS.png" alt="react" />
                    <img src="MySQL.svg.png" alt="mysql" />
                </SectionItem>
                <SectionItem
                    title="Fytics Inc."
                    subtitle="Full Stack Developer"
                    image="fytics.png"
                    description="Fytics is an inventory management service that helps quick service restaurants. Owners have real time access to their food inventory at anytime through their smartphone or desktop. They also have the ability to set automatic re-order points and track food usage levels at their establishments."
                >
                    <img src="django.png" alt="django" />
                    <img src="reactJS.png" alt="react" />
                    <img src="MySQL.svg.png" alt="mysql" />
                </SectionItem>
            </Section>
            <Section title="Projects" >
                <SectionItem
                    title="Chirp Nets"
                    subtitle="Mobile & Firmware Developer"
                    image="chirp_nets.png"
                    subimages={["chirp_nets1.png", "chirp_nets3.jpg", "chirp_nets2.jpg",]}
                    description="Chirp Nets is a mesh networking device involving three main components, a mobile app, a Bluetooth module and a radio module. The mobile device connects to the hardware via Bluetooth and messages are sent from device to device. This allows communication in areas that cellular or other network based communication systems are weak or missing."
                    git="https://github.com/chirpnets/chirp-nets-mobile"
                >
                    <img src="flutter.png" alt="flutter" />
                    <img src="dart-logo.png" alt="dart" />
                    <img src="cpp.png" alt="cpp" />
                </SectionItem>
                <SectionItem
                    title="Star Gazer"
                    subtitle="Image Processing"
                    image="SG1.png"
                    subimages={["SG2.png", "SG3.png"]}
                    description="Star Gazer is a constellation detector created as a project for an image processing course. It takes in an image of the sky and attempts to match the stars with constellations. It works for three constellations: Virgo, Gemini and Ursa Major."
                    git="https://github.com/s-axford/StarGazer"
                >
                    <img src="python.png" alt="python" />
                    <img src="opencv.png" alt="opencv" />
                </SectionItem>
            </Section>
            <ContactMe />
        </div>
    );
}


export default Index;
