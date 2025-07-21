import { motion } from 'framer-motion';
import '../index.css';

window.scrollTo({ top: 0, behavior: 'smooth' });

const Partners = () => {
    return (
        <div className="fullwidth-block text-center shadow-lg pt-3 mb-3 rounded">
            <h2 className="section-title">Our partners</h2>

            <div className="partners p-3 d-flex flex-wrap justify-content-center">
                {[
                    {
                        src: "https://demo.themezy.com/system/resources/demo_themes/000/000/028//dummy/money-logo@2x.png",
                        width: 84,
                        height: 26,
                        delay: 0.1
                    },
                    {
                        src: "https://demo.themezy.com/system/resources/demo_themes/000/000/028//dummy/nyt-logo@2x.png",
                        width: 187,
                        height: 27,
                        delay: 0.2
                    },
                    {
                        src: "https://demo.themezy.com/system/resources/demo_themes/000/000/028//dummy/forbes-logo@2x.png",
                        width: 100,
                        height: 26,
                        delay: 0.3
                    },
                    {
                        src: "https://demo.themezy.com/system/resources/demo_themes/000/000/028//dummy/wsj-logo@2x.png",
                        width: 250,
                        height: 27,
                        delay: 0.4
                    },
                    {
                        src: "https://demo.themezy.com/system/resources/demo_themes/000/000/028//dummy/bbs-logo@2x.png",
                        width: 110,
                        height: 25,
                        delay: 0.5
                    }
                ].map((partner, index) => (
                    <motion.a
                        key={index}
                        className="m-3 p-4"
                        href="#"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: partner.delay }}
                    >
                        <img
                            src={partner.src}
                            width={partner.width}
                            height={partner.height}
                            alt={`Partner ${index + 1}`}
                        />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Partners;
