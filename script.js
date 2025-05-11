document.addEventListener('DOMContentLoaded', function () {

    const scrollElements = document.querySelectorAll('.second-container, .third-container, .fourth-container');

    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.75;
    };

    const displayScrollElement = (element) => {
        element.classList.add('animate');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);

   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        });
    });



 
   
    const stars = document.querySelectorAll('.star, .star1');
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].style.background = 'rgba(173, 145, 26, 1)';
                stars[i].style.transform = 'scale(1.2)';
            }
        });

        star.addEventListener('mouseout', () => {
            stars.forEach((s, i) => {
                if (i === stars.length - 1) {
                    s.style.background = 'rgb(146, 146, 142)';
                } else {
                    s.style.background = 'rgba(173, 145, 26, 1)';
                }
                s.style.transform = 'scale(1)';
            });
        });
    });

    // 8. Sequential rotate-in fade animation
    fadeInSequence('.content-1 p, .content-2 p, .content-3 button');
});

function fadeInSequence(selector) {
    const elements = document.querySelectorAll(selector);
    let index = 0;

    const fadeNext = () => {
        if (index < elements.length) {
            const el = elements[index];
            el.style.display = 'block';
            el.classList.add('rotate-in');
            index++;
            setTimeout(fadeNext, 300);
        }
    };

    fadeNext();
}


const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .rotate-in {
        animation: rotateIn 0.8s ease forwards;
        opacity: 0;
    }

    @keyframes rotateIn {
        0% {
            transform: rotate(-720deg) scale(0);
            opacity: 0;
        }
        100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
