import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import xperienceImg from '../images/xperinceImg.png';
import { FaLinkedin, FaSquareTwitter, FaMixcloud} from "react-icons/fa6";

const dummyPosts = [
                    {
                        image: img1,
                        icon: <FaLinkedin />,
                        time: '22 days ago',
                        title: 'Baobab Foundation 2024',
                        text: 'TIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
                    },
                    {
                        image: img2,
                        icon: <FaMixcloud />,
                        time: '15 days ago',
                        title: 'Improving Productivity in WFH',
                        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
                    },
                    {
                        image: img3,
                        icon: <FaSquareTwitter />,
                        time: '22 days ago',
                        title: 'Effectiveness in the Work Place',
                        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
                    },
                    {
                        image: xperienceImg,
                        icon: <FaLinkedin />,
                        time: '15 days ago',
                        title: 'Baobab Foundation 2024',
                        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to ',
                    },

                        // ... more dummy posts
                    ] ;
export default dummyPosts;
