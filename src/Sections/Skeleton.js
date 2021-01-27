import React from 'react'

import Header from './Header';
import SideNav from './SideNav';
import Landing from './Landing';
import About from './About';

import { useWheel } from 'react-use-gesture';

import { Lethargy } from 'lethargy'

import '../Assets/styles/skeletonCSS.css';

const lethargy = new Lethargy()
const slides = [0, 1]
const clamp = (value, min, max) => Math.max(Math.min(max, value), min)

const Skeleton = () => {

    const [landingRender, setLandingRender] = React.useState(true);
    const [aboutRender, setAboutRender] = React.useState(true);
    const [landingSVG, setLandingSVG] = React.useState(true);

    const [index, setIndex] = React.useState(0)

    const bind = useWheel(({ event, last, memo: wait = false }) => {
        if (!last) {
            const s = lethargy.check(event)
            if (s) {
                if (!wait) {
                    if ((i) => clamp(i - s, 0, slides.length - 1) === 1) {
                        setLandingSVG(false);
                    }
                    setTimeout(() => {
                        setIndex((i) => clamp(i - s, 0, slides.length - 1))
                    }, 700)
                    return true
                }
            } else return false
        } else {
            return false
        }
    })

    const handleNavClick = (index) => {
        switch (index) {
            case 0:
                setTimeout(() => {
                    setIndex(index);
                }, 700)
                setTimeout(() => {
                    setLandingRender(true);
                    setAboutRender(false);
                    setLandingSVG(true);
                }, 800);
                break;
            case 1:
                setLandingSVG(false);
                setTimeout(() => {
                    setIndex(index);
                },700)
                setTimeout(() => {
                    setAboutRender(true);
                    setLandingRender(false);
                }, 800);
                break;
        }
    }

    React.useEffect(() => {
        switch (index) {
            case 0:
                setLandingSVG(true);
                setTimeout(() => {
                    setLandingRender(true);
                    setAboutRender(false);
                }, 800);
                break;
            case 1:
                setTimeout(() => {
                    setAboutRender(true);
                    setLandingRender(false);
                }, 800);
                break;
        }
    }, [index])

    return (
        <div className="app" {...bind()} style={{ backgroundImage: "linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)" }} >
            <Header />
            <SideNav
                index={index}
                handleNavClick={(index) => handleNavClick(index)}
            />
            <div className="slider" style={{ transform: `translateY(${-index * 100}vh)` }}>
                <div>
                    <Landing
                        render={landingRender}
                        svgRender={landingSVG}
                    />
                </div>
                <div>
                    <About
                        render={aboutRender}
                    />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Skeleton);