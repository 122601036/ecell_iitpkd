// import Aashutosh from "../src/assets/team26/Aashutosh.jpeg";
// import Abhiraj from "../src/assets/team26/Abhiraj_raje.HEIC";
// import Aman from "../src/assets/team26/Aman_Meena.webp";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";

const imageModules = import.meta.glob('../src/assets/team26/*.webp', { eager: true });

// Convert to simpler key format like 'alice.webp'
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const filename = path.split('/').pop(); // 'alice.webp'
    return [filename, mod.default];
  })
);

const teamData = [
    {
        name:'Thirunahari Milind ',
        role:'Head',
        image:images['Milind.webp'],
        mail:'102401035@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/milind-thirunahari-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Prof. Mayank Tiwari',
        role:'Faculty Advisor',
        image:images['ProfMayankSir.webp'],
        mail:'mayank@iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/mayank-tiwari-3301268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Siddharth Bharti',
        role:'Mentor',
        image:images['siddharthBharti2.webp'],
        mail:'132301033@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/siddharth-kr-997667249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
        {
        name:'Aryan',
        role:'Mentor',
        image:images['Aryan.webp'],
        mail:'112301041@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aryan-b34639288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Tanay Vashist',
        role:'Deputy Head',
        image:images['Tanay.webp'],
        mail:'112201038@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/shreyas-vadthya-788928250/'
    },
    {
        name:'Aaditya Dinesh',
        role:'Deputy Head',
        image:images['Aaditya_Dinesh.webp'],
        mail:'132501001@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aadityadinesh/'
    },
    {
        name:'Ausula Madhu Charan Chary',
        role:'Event Coordinator Head',
        image:images['MCC.webp'],
        mail:'132401010@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aashutosh-kr-ray-9b505b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Mohnish Murugavel',
        role:'Outreach and Internal Head',
        image:images['Mohnish_Murugavel.webp'],
        mail:'142501019@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/mohnish-murugavel-1b50a73b7/'
    },
    {
        name:'Nampally Apoorva Sai Kaushik',
        role:'Event Coordinator',
        image:images['Apoorva_Sai_Kaushik_Nampally.webp'],
        mail:'142501021@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/apoorva-sai-kaushik-nampally-4575863b8/'
    },
    {
        name:'Pamu Vedhanth Chandr',
        role:'Outreach and Internal Head',
        image:images['Vedhanth_Chandr.webp'],
        mail:'112501022@smail.iitpkd.ac.in',
        linkedin:''
    },
    {
        name:'Emmanuel Johnson',
        role:'Content Creator & Media Publicity Head',
        image:images['Emmanuel_Johnson.webp'],
        mail:'122401015@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/emmanuel-johnson-618598332/'
    }
]

export default teamData;
